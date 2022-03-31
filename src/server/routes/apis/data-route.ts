import { loadSync } from "@grpc/proto-loader";
import {
  loadPackageDefinition,
  sendUnaryData,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { grpcProtoLoaderOptions } from "../../../shared/functions/grpc-proto-loader-options-function";
import {
  Data,
  validateData,
  validateDataForUpdate,
} from "../../schemas/data-schema";
import { errorHandler } from "../../utils/functions/handler";
import { ProtoGrpcType } from "../../../shared/interface/protos/data";
import getResReq from "mongodb-collection-query-with-mongoose";
import { dataSelect } from "../../utils/functions/select-functions";
import { DataResponse } from "../../../shared/interface/protos/data/DataResponse";
import { Content } from "../../schemas/content-schema";
import { authGuard } from "../../guard/auth-guard";
import { validateObjectId } from "../../utils/functions/validate-function";
import { QueryInterface } from "../../../shared/interface/app/query-interface";
import { DataSingleResponse } from "../../../shared/interface/protos/data/DataSingleResponse";
import { DataSingleRequest__Output } from "src/shared/interface/protos/data/DataSingleRequest";
import { DataAddRequest } from "../../../shared/interface/protos/data/DataAddRequest";
import { DataUpdateRequest } from "../../../shared/interface/protos/data/DataUpdateRequest";
import { DataDeleteRequest__Output } from "src/shared/interface/protos/data/DataDeleteRequest";

const protoDefinition = loadSync(
  `${__dirname}/../../../shared/protos/data.proto`,
  grpcProtoLoaderOptions
);

const dataPackageDefinition = loadPackageDefinition(
  protoDefinition
) as unknown as ProtoGrpcType;

const getAllData = async (
  call: ServerUnaryCall<QueryInterface, DataResponse>,
  callback: sendUnaryData<DataResponse>
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

    const response = await Promise.all([getResReq(query, Data, dataSelect)]);
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

const getSingleData = async (
  call: ServerUnaryCall<DataSingleRequest__Output, DataSingleResponse>,
  callback: sendUnaryData<DataSingleResponse>
) => {
  try {
    if (validateObjectId(call.request._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request._id}' is invalid!`,
      });

    const data = await Data.findById(call.request._id).select(dataSelect);

    if (!data)
      return callback(null, {
        status: 404,
        errorMessage: `No Data with this id '${call.request._id}' was Found! please make sure you're sending the correct id`,
      });

    return callback(null, { status: 200, data });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const addData = async (
  call: ServerUnaryCall<DataAddRequest, DataSingleResponse>,
  callback: sendUnaryData<DataSingleResponse>
) => {
  try {
    const { error } = validateData({
      token: call.request.token,
      data: {
        title: call.request?.data?.title,
        content: call.request?.data?.content,
        contentId: call.request?.data?.contentId,
        publish: call.request?.data?.publish,
        position: call.request?.data?.position,
      },
    });

    if (error)
      return callback(null, {
        status: 400,
        errorMessage: error.details[0].message,
      });

    let token;

    if (call.request.token && authGuard(call.request.token).error) {
      token = authGuard(call.request?.token).token;
      return authGuard(call.request?.token).error;
    }

    if (
      call.request?.data?.contentId &&
      !validateObjectId(call.request?.data?.contentId)
    )
      return callback(null, {
        status: 400,
        errorMessage: `This contentId '${call.request?.data?.contentId}' is invalid!`,
      });

    const contentId = await Content.findById(
      call.request?.data?.contentId
    ).select(dataSelect);

    if (!contentId)
      return callback(null, {
        status: 404,
        errorMessage: `No content Id with this id '${call.request?.data?.contentId}' was Found! please make sure you're sending the correct contentId`,
      });

    const data = new Data(call.request?.data);

    const result = await data.save();

    return callback(null, { status: 200, token, data: result });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const updateData = async (
  call: ServerUnaryCall<DataUpdateRequest, DataSingleResponse>,
  callback: sendUnaryData<DataSingleResponse>
) => {
  try {
    const { error } = validateDataForUpdate({
      token: call.request.token,
      data: {
        _id: call.request?.data?._id,
        content: call.request?.data?.content,
        position: call.request?.data?.position,
        title: call.request?.data?.title,
        contentId: call.request?.data?.contentId,
        publish: call.request?.data?.publish,
      },
    });

    if (error)
      return callback(null, {
        status: 400,
        errorMessage: error.details[0].message,
      });

    let token;

    if (call.request.token && authGuard(call.request.token).error) {
      token = authGuard(call.request?.token).token;
      return authGuard(call.request?.token).error;
    }

    if (call.request?.data?._id && !validateObjectId(call.request?.data?._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request?.data?._id}' is invalid!`,
      });

    if (call.request?.data?.contentId) {
      if (validateObjectId(call.request?.data?.contentId))
        return callback(null, {
          status: 400,
          errorMessage: `This contentId '${call.request?.data?._id}' is invalid!`,
        });

      const contentId = await Content.findById(
        call.request?.data?.contentId
      ).select(dataSelect);

      if (!contentId)
        return callback(null, {
          status: 404,
          errorMessage: `No content Id with this id '${call.request?.data?.contentId}' was Found! please make sure you're sending the correct contentId`,
        });
    }

    const data = await Data.findById(call.request?.data?._id);
    if (!data)
      return callback(null, {
        status: 404,
        errorMessage: `No Data was found with the given id '${call.request?.data?._id}'`,
      });

    await Data.findByIdAndUpdate(call.request?.data?._id, {
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
        ...(call.request?.data?.position && {
          position: call.request?.data?.position,
        }),
      },
    });

    return callback(null, { status: 200, token, data: call.request?.data });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

const deleteData = async (
  call: ServerUnaryCall<DataDeleteRequest__Output, DataSingleResponse>,
  callback: sendUnaryData<DataSingleResponse>
) => {
  try {
    let token;

    if (call.request.token && authGuard(call.request.token).error) {
      token = authGuard(call.request?.token).token;
      return authGuard(call.request?.token).error;
    }

    if (validateObjectId(call.request._id))
      return callback(null, {
        status: 400,
        errorMessage: `This id '${call.request._id}' is invalid!`,
      });

    const content = await Data.findById(call.request._id);
    if (!content)
      return callback(null, {
        status: 404,
        errorMessage: `No Data was found with the given id '${call.request._id}'`,
      });

    const result = await Data.findByIdAndDelete(call.request._id);

    return callback(null, { status: 200, token, data: result });
  } catch (error) {
    errorHandler(error);

    return callback(null, {
      status: 500,
      errorMessage: "internal server error",
    });
  }
};

export {
  dataPackageDefinition,
  getAllData,
  getSingleData,
  addData,
  updateData,
  deleteData,
};
