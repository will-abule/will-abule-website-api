import { Server, ServerCredentials } from "@grpc/grpc-js";
import { initConfig } from "./server/startup/config";
import { mongoDBConnect } from "./server/startup/db";
// import { Rest2gRPCServer } from "rest2grpc";
import {
  authPackageDefinition,
  register,
  login,
} from "./server/routes/apis/auth-route";
import { errorHandler } from "./server/utils/functions/handler";
import {
  contentPackageDefinition,
  getContents,
  getSingleContent,
  addContent,
  updateContent,
  deleteContent,
} from "./server/routes/apis/content-route";
import {
  dataPackageDefinition,
  getAllData,
  getSingleData,
  addData,
  updateData,
  deleteData,
} from "./server/routes/apis/data-route";
import {
  urlPackageDefinition,
  getUrls,
  getSingleUrl,
  addUrl,
  updateUrl,
  deleteUrl,
} from "./server/routes/apis/url-route";

export const port = process.env.PORT || 50011;

export const main = async () => {
  initConfig();

  await mongoDBConnect.connect();
  const address = `localhost:${port}`,
    server = new Server();

  // gRPC setup
  server.addService(authPackageDefinition.auth.AuthService.service, {
    register,
    login,
  });

  server.addService(contentPackageDefinition.content.ContentService.service, {
    getContents,
    getSingleContent,
    addContent,
    updateContent,
    deleteContent,
  });

  server.addService(dataPackageDefinition.data.DataService.service, {
    getAllData,
    getSingleData,
    addData,
    updateData,
    deleteData,
  });

  server.addService(urlPackageDefinition.url.UrlService.service, {
    getUrls,
    getSingleUrl,
    addUrl,
    updateUrl,
    deleteUrl,
  });

  server.bindAsync(
    address,
    ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        errorHandler(`Server error: ${err.message}`);
      } else {
        server.start();
        console.log(`Server bound on port: ${port}`);
      }
    }
  );

  // console.info(`gRPC: listening on port ${port}`);

  // // REST API setup
  // let configFile = `${__dirname}/routes/yaml/register.yaml`;
  // const restApiServerRegisterService = new Rest2gRPCServer(console);
  // await restApiServerRegisterService.register(
  //   configFile,
  //   [`${__dirname}/routes/protos`],
  //   "register.proto",
  //   address
  // );

  // restApiServerRegisterService.start(30011);
};

main();
