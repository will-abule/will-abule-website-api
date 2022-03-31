// import { Data } from "../server/schemas/data-schema";
// import {
//   clientGetSingleData,
//   clientGetAllData,
//   clientAddData,
//   clientUpdateData,
//   clientDeleteData,
// } from "../client/data-client";
// import { DataResponse } from "../shared/interface/protos/data/DataResponse";
// import { DataSingleResponse } from "src/shared/interface/protos/data/DataSingleResponse";
// import { generateAuthToken } from "../server/schemas/user-schema";
// import { Url } from "../server/schemas/url-schema";
// import { Content } from "../server/schemas/content-schema";

// describe("data", () => {
//   afterAll(async () => {
//     jest.clearAllTimers();

//     await Data.deleteMany();
//     await Content.deleteMany();
//     await Url.deleteMany();
//   });

//   beforeEach(() => {
//     jest.setTimeout(20000);
//   });

//   describe("UNARY API /getAllData", async () => {
//     await Data.deleteMany();
//     let id: string = "",
//       contentId: string = "";

//     await new Url({ title: "Example", link: "example" }).save();
//     const content = await new Content({
//       title: "Example",
//       urlLink: "example",
//       position: 1,
//       content: "content",
//       tags: ["tag1", "tag2"],
//     }).save();

//     contentId = content._id;

//     it("should get data successfully", async () => {
//       for (let i = 0; i < 3; i++) {
//         const data = await new Data({
//           contentId,
//           title: `Example ${i + 1}`,
//           position: i + 1,
//           content: "content",
//           publish: true,
//         }).save();
//         id = data._id;
//       }

//       clientGetAllData(
//         {
//           filter: true,
//           pageSize: 10,
//           pageNumber: 1,
//           sort: "desc",
//           sortName: "title",
//           searchFilters: JSON.stringify({
//             searchOption: "OR",
//             rules: [
//               {
//                 field: "title",
//                 option: "cn",
//                 type: "string",
//                 data: "example 1",
//               },
//             ],
//           }),
//         },
//         (value: DataResponse) => {
//           expect(value.status).toBe(200);
//           expect(value?.data?.length).toBe(1);
//         }
//       );
//     });

//     it("should get single data successfully", async () => {
//       clientGetSingleData(
//         {
//           _id: id,
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value?.data?._id).toBe(id);
//         }
//       );
//     });

//     it("should fail to get single data", async () => {
//       clientGetSingleData(
//         {
//           _id: "1234",
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to get single data", async () => {
//       clientGetSingleData(
//         {
//           _id: "5be6b2993846c059c25c5181",
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Data with this '5be6b2993846c059c25c5181' was Found! please make sure you're sending the correct id`
//           );
//         }
//       );
//     });

//     it("should add data successfully", async () => {
//       clientAddData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           data: {
//             contentId,
//             title: `qwerty`,
//             position: 1,
//             content: "content",
//             publish: true,
//           },
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value.data?.title).toBe("about");
//         }
//       );
//     });

//     it("should fail to add data", async () => {
//       clientAddData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           data: {
//             contentId: "1234",
//             title: `qwerty`,
//             position: 1,
//             content: "content",
//             publish: true,
//           },
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.data?.title).toBe(`This contentId '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to add data", async () => {
//       clientAddData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           data: {
//             contentId: "5be6b2993846c059c25c5181",
//             title: `qwerty`,
//             position: 1,
//             content: "content",
//             publish: true,
//           },
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.data?.title).toBe(
//             `No content Id with this id '5be6b2993846c059c25c5181' was Found! please make sure you're sending the correct contentId`
//           );
//         }
//       );
//     });

//     it("should update data successfully", async () => {
//       clientUpdateData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//           data: {
//             contentId,
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             publish: true,
//           },
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value.data?.title).toBe(`Updated`);
//         }
//       );
//     });

//     it("should fail to update data", async () => {
//       clientUpdateData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "1234",
//           data: {
//             contentId,
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             publish: true,
//           },
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to update data", async () => {
//       clientUpdateData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//           data: {
//             contentId: "1234",
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             publish: true,
//           },
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This contentId '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to update data", async () => {
//       clientUpdateData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "5be6b2993846c059c25c5181",
//           data: {
//             contentId,
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             publish: true,
//           },
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Data was found with the given id '5be6b2993846c059c25c5181'`
//           );
//         }
//       );
//     });

//     it("should fail to update data", async () => {
//       clientUpdateData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//           data: {
//             contentId: "5be6b2993846c059c25c5181",
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             publish: true,
//           },
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No content Id with this id '5be6b2993846c059c25c5181' was Found! please make sure you're sending the correct contentId`
//           );
//         }
//       );
//     });

//     it("should delete data successfully", async () => {
//       clientDeleteData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(200);
//         }
//       );
//     });

//     it("should fail to delete data", async () => {
//       clientDeleteData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "1234",
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to delete data", async () => {
//       clientDeleteData(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "5be6b2993846c059c25c5181",
//         },
//         (value: DataSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Data was found with the given id '5be6b2993846c059c25c5181'`
//           );
//         }
//       );
//     });
//   });
// });
