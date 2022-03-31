import { loadSync } from "@grpc/proto-loader";
import {
  loadPackageDefinition,
  sendUnaryData,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { grpcProtoLoaderOptions } from "../../../shared/functions/grpc-proto-loader-options-function";
import {
  Content,
  validateContent,
  validateContentForUpdate,
} from "../../schemas/content-schema";
import { errorHandler } from "../../utils/functions/handler";
import { ProtoGrpcType } from "../../../shared/interface/protos/content";
import getResReq from "mongodb-collection-query-with-mongoose";
import { contentSelect } from "../../utils/functions/select-functions";
import { ContentResponse } from "../../../shared/interface/protos/content/ContentResponse";
import { Url } from "../../schemas/url-schema";
import { authGuard } from "../../guard/auth-guard";
import { validateObjectId } from "../../utils/functions/validate-function";
import { QueryInterface } from "../../../shared/interface/app/query-interface";
import { ContentAddRequest } from "../../../shared/interface/protos/content/ContentAddRequest";
import { ContentSingleResponse } from "../../../shared/interface/protos/content/ContentSingleResponse";
import { ContentUpdateRequest } from "../../../shared/interface/protos/content/ContentUpdateRequest";
import { ContentSingleRequest__Output } from "src/shared/interface/protos/content/ContentSingleRequest";
import { ContentDeleteRequest__Output } from "src/shared/interface/protos/content/ContentDeleteRequest";

const protoDefinition = loadSync(
  `${__dirname}/../../../shared/protos/content.proto`,
  grpcProtoLoaderOptions
);

const contentPackageDefinition = loadPackageDefinition(
  protoDefinition
) as unknown as ProtoGrpcType;

const getContents = async (
  call: ServerUnaryCall<QueryInterface, ContentResponse>,
  callback: sendUnaryData<ContentResponse>
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

    const response = await Promise.all([
      getResReq(query, Content, contentSelect),
    ]);
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

const getSingleContent = async (
  call: ServerUnaryCall<ContentSingleRequest__Output, ContentSingleResponse>,
  callback: sendUnaryData<ContentSingleResponse>
) => {
  try {
    if (validateObjectId(call.request._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request._id}' is invalid!`,
      });

    const content = await Content.findById(call.request._id).select(
      contentSelect
    );

    if (!content)
      return callback(null, {
        status: 404,
        errorMessage: `No Content with this '${call.request._id}' was Found! please make sure you're sending the correct id`,
      });

    return callback(null, { status: 200, data: content });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const addContent = async (
  call: ServerUnaryCall<ContentAddRequest, ContentSingleResponse>,
  callback: sendUnaryData<ContentSingleResponse>
) => {
  try {
    const { error } = validateContent({
      token: call.request.token,
      data: {
        title: call.request?.data?.title,
        content: call.request?.data?.content,
        urlLink: call.request?.data?.urlLink,
        tags: call.request?.data?.tags,
        position: call.request?.data?.position,
      },
    });

    if (error)
      return callback(null, {
        status: 400,
        errorMessage: error.details[0].message,
      });

    if (call.request.token && authGuard(call.request.token).error)
      return authGuard(call.request?.token).error;

    const url = await Url.findOne({
      link: call.request?.data?.urlLink,
    }).select(contentSelect);

    if (!url)
      return callback(null, {
        status: 404,
        errorMessage: `No url with this link '${call.request?.data?.urlLink}' was Found! please make sure you're sending the correct url link`,
      });

    const content = new Content(call.request);

    const result = await content.save();

    return callback(null, { status: 200, data: result });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const updateContent = async (
  call: ServerUnaryCall<ContentUpdateRequest, ContentSingleResponse>,
  callback: sendUnaryData<ContentSingleResponse>
) => {
  try {
    const { error } = validateContentForUpdate({
      token: call.request.token,
      data: {
        _id: call.request?.data?._id,
        content: call.request?.data?.content,
        position: call.request?.data?.position,
        title: call.request?.data?.title,
        tags: call.request?.data?.tags,
        urlLink: call.request?.data?.urlLink,
      },
    });

    if (error)
      return callback(null, {
        status: 400,
        errorMessage: error.details[0].message,
      });

    if (call.request?.data?._id && !validateObjectId(call.request.data._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request.data._id}' is invalid!`,
      });

    if (call.request?.data?.urlLink) {
      const url = await Url.findOne({
        link: call.request?.data?.urlLink,
      }).select(contentSelect);

      if (!url)
        return callback(null, {
          status: 404,
          errorMessage: `No url with this link '${call.request?.data?.urlLink}' was Found! please make sure you're sending the correct url link`,
        });
    }

    const content = await Content.findById(call.request?.data?._id);
    if (!content)
      return callback(null, {
        status: 404,
        errorMessage: `No Content was found with the given id '${call.request?.data?._id}'`,
      });

    const result = await Content.findByIdAndUpdate(call.request?.data?._id, {
      $set: {
        ...(call.request?.data?.content && {
          content: call.request?.data?.content,
        }),
        ...(call.request?.data?.position && {
          position: call.request?.data?.position,
        }),
        ...(call.request?.data?.title && {
          title: call.request?.data?.title,
        }),
        ...(call.request?.data?.tags && {
          tags: call.request?.data?.tags,
        }),
        ...(call.request?.data?.urlLink && {
          urlLink: call.request?.data?.urlLink,
        }),
      },
    });

    return callback(null, { status: 200, data: result });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const deleteContent = async (
  call: ServerUnaryCall<ContentDeleteRequest__Output, ContentSingleResponse>,
  callback: sendUnaryData<ContentSingleResponse>
) => {
  try {
    if (validateObjectId(call.request._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request._id}' is invalid!`,
      });

    const content = await Content.findById(call.request._id);
    if (!content)
      return callback(null, {
        status: 404,
        errorMessage: `No Content was found with the given id '${call.request._id}'`,
      });

    const result = await Content.findByIdAndDelete(call.request._id);

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
  contentPackageDefinition,
  getContents,
  getSingleContent,
  addContent,
  updateContent,
  deleteContent,
};
