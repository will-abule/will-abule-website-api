import { loadSync } from "@grpc/proto-loader";
import {
  loadPackageDefinition,
  sendUnaryData,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { grpcProtoLoaderOptions } from "../../../shared/functions/grpc-proto-loader-options-function";
import {
  Url,
  validateUrl,
  validateUrlForUpdate,
} from "../../schemas/url-schema";
import { errorHandler } from "../../utils/functions/handler";
import { ProtoGrpcType } from "../../../shared/interface/protos/url";
import getResReq from "mongodb-collection-query-with-mongoose";
import { urlSelect } from "../../utils/functions/select-functions";
import { UrlResponse } from "../../../shared/interface/protos/url/UrlResponse";
import { authGuard } from "../../guard/auth-guard";
import { validateObjectId } from "../../utils/functions/validate-function";
import { QueryInterface } from "../../../shared/interface/app/query-interface";
import { UrlAddRequest__Output } from "../../../shared/interface/protos/url/UrlAddRequest";
import { UrlSingleResponse } from "../../../shared/interface/protos/url/UrlSingleResponse";
import { UrlSingleRequest__Output } from "src/shared/interface/protos/url/UrlSingleRequest";
import { UrlDeleteRequest__Output } from "src/shared/interface/protos/url/UrlDeleteRequest";
import { UrlUpdateRequest__Output } from "src/shared/interface/protos/url/UrlUpdateRequest";
import { Content } from "../../schemas/content-schema";

const protoDefinition = loadSync(
  `${__dirname}/../../../shared/protos/url.proto`,
  grpcProtoLoaderOptions
);

const urlPackageDefinition = loadPackageDefinition(
  protoDefinition
) as unknown as ProtoGrpcType;

const getUrls = async (
  call: ServerUnaryCall<QueryInterface, UrlResponse>,
  callback: sendUnaryData<UrlResponse>
) => {
  try {
    const query: QueryInterface = {
      filter: String(call.request.filter) === "true" ? true : false,
      sort: String(call.request.sort),
      sortName: String(call.request.sortName),
      pageSize: Number(call.request.pageSize),
      pageNumber: Number(call.request.pageNumber),
      ...(call?.request?.searchFilters && {
        searchFilters: String(call.request.searchFilters),
      }),
    };

    const response = await Promise.all([getResReq(query, Url, urlSelect)]);
    const { data, type, msg, status } = response[0];
    if (type === "error") {
      errorHandler(msg);
      return callback(null, {
        status,
        errorMessage: `internal server error`,
      });
    }

    return callback(null, {
      status: 200,
      data: data?.data,
      pageNumber: data?.pageNumber,
      pageSize: data?.pageSize,
      totalPage: data?.total,
      records: data?.records,
    });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const getSingleUrl = async (
  call: ServerUnaryCall<UrlSingleRequest__Output, UrlSingleResponse>,
  callback: sendUnaryData<UrlSingleResponse>
) => {
  try {
    if (validateObjectId(call.request._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request._id}' is invalid!`,
      });

    const url = await Url.findById(call.request._id).select(urlSelect);

    if (!url)
      return callback(null, {
        status: 404,
        errorMessage: `No Url with this '${call.request._id}' was Found! please make sure you're sending the correct id`,
      });

    return callback(null, { status: 200, data: url });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const addUrl = async (
  call: ServerUnaryCall<UrlAddRequest__Output, UrlSingleResponse>,
  callback: sendUnaryData<UrlSingleResponse>
) => {
  try {
    const { error } = validateUrl({
      token: call.request.token,
      title: call.request.token,
    });

    if (error)
      return callback(null, {
        status: 400,
        errorMessage: error.details[0].message,
      });

    if (authGuard(call.request.token).error)
      return authGuard(call.request?.token).error;

    let url = await Url.findOne({
      link: call.request.title.replace(/ /g, "-").toLowerCase(),
    });

    if (!url)
      return callback(null, {
        status: 400,
        errorMessage: `This name: '${call.request.title}' already exist`,
      });

    url = new Url({
      title: call.request.title,
      link: call.request.title.replace(/ /g, "-").toLowerCase(),
    });

    const result = await url.save();

    return callback(null, { status: 200, data: result });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const updateUrl = async (
  call: ServerUnaryCall<UrlUpdateRequest__Output, UrlSingleResponse>,
  callback: sendUnaryData<UrlSingleResponse>
) => {
  try {
    const { error } = validateUrlForUpdate({
      token: call.request.token,
      title: call.request.title,
      _id: call.request._id,
    });

    if (error)
      return callback(null, {
        status: 400,
        errorMessage: error.details[0].message,
      });

    if (validateObjectId(call.request._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request._id}' is invalid!`,
      });

    if (authGuard(call.request.token).error)
      return authGuard(call.request.token).error;

    let url = await Url.findOne({
      link: call.request.title.replace(/ /g, "-").toLowerCase(),
    });

    if (!url)
      return callback(null, {
        status: 400,
        errorMessage: `This name: '${call.request.title}' already exist`,
      });

    url = await Url.findById(call.request._id);
    if (!url)
      return callback(null, {
        status: 404,
        errorMessage: `No Url was found with the given id '${call.request._id}'`,
      });

    const CHG = await Content.find({ urlLink: url.urlLink });

    await Url.findByIdAndUpdate(call.request._id, {
      $set: {
        title: call.request.title,
        link: call.request.title.replace(/ /g, "-").toLowerCase(),
      },
    });

    for await (const c of CHG) {
      await Content.findByIdAndUpdate(c._id, {
        $set: {
          urlLink: call.request.title.replace(/ /g, "-").toLowerCase(),
        },
      });
    }

    return callback(null, {
      status: 200,
      data: {
        title: call.request.title,
        link: call.request.title.replace(/ /g, "-").toLowerCase(),
      },
    });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const deleteUrl = async (
  call: ServerUnaryCall<UrlDeleteRequest__Output, UrlSingleResponse>,
  callback: sendUnaryData<UrlSingleResponse>
) => {
  try {
    if (validateObjectId(call.request._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request._id}' is invalid!`,
      });

    const url = await Url.findById(call.request._id);
    if (!url)
      return callback(null, {
        status: 404,
        errorMessage: `No Url was found with the given id '${call.request._id}'`,
      });

    const result = await Url.findByIdAndDelete(call.request._id);

    return callback(null, { status: 200, data: result });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

export {
  urlPackageDefinition,
  getUrls,
  getSingleUrl,
  addUrl,
  updateUrl,
  deleteUrl,
};
