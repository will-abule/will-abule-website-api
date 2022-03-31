// import { Url } from "../server/schemas/url-schema";
// import {
//   clientGetSingleUrl,
//   clientGetUrls,
//   clientAddUrl,
//   clientUpdateUrl,
//   clientDeleteUrl,
// } from "../client/url-client";
// import { UrlResponse } from "../shared/interface/protos/url/UrlResponse";
// import { UrlSingleResponse } from "src/shared/interface/protos/url/UrlSingleResponse";
// import { generateAuthToken } from "../server/schemas/user-schema";

// describe("url", () => {
//   afterAll(async () => {
//     jest.clearAllTimers();

//     await Url.deleteMany();
//   });

//   beforeEach(() => {
//     jest.setTimeout(20000);
//   });

//   describe("UNARY API /getUrls", async () => {
//     await Url.deleteMany();
//     let id: string = "";

//     it("should get urls successfully", async () => {
//       for (let i = 0; i < 3; i++) {
//         const urls = new Url({
//           title: `Example ${i + 1}`,
//           link: `example=${i}`,
//         });
//         const result = await urls.save();
//         id = result._id;
//       }

//       clientGetUrls(
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
//         (value: UrlResponse) => {
//           expect(value.status).toBe(200);
//           expect(value?.data?.length).toBe(1);
//         }
//       );
//     });

//     it("should get single url successfully", async () => {
//       clientGetSingleUrl(
//         {
//           _id: id,
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value?.data?._id).toBe(id);
//         }
//       );
//     });

//     it("should fail to get single url", async () => {
//       clientGetSingleUrl(
//         {
//           _id: "1234",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to get single url", async () => {
//       clientGetSingleUrl(
//         {
//           _id: "5be6b2993846c059c25c5181",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Url with this '5be6b2993846c059c25c5181' was Found! please make sure you're sending the correct id`
//           );
//         }
//       );
//     });

//     it("should add url successfully", async () => {
//       clientAddUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           title: "About",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value.data?.title).toBe("about");
//         }
//       );
//     });

//     it("should fail to add url", async () => {
//       clientAddUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           title: "About",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.data?.title).toBe(`This name: 'About' already exist`);
//         }
//       );
//     });

//     it("should update url successfully", async () => {
//       clientUpdateUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           title: "Updated",
//           _id: id,
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value.data?.title).toBe(`Updated`);
//         }
//       );
//     });

//     it("should fail to update url", async () => {
//       clientUpdateUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "1234",
//           title: "Example 0",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to update url", async () => {
//       clientUpdateUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//           title: "Example 0",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(
//             `This name: 'Example 0' already exist`
//           );
//         }
//       );
//     });

//     it("should fail to update url", async () => {
//       clientUpdateUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "5be6b2993846c059c25c5181",
//           title: "Updated",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Url was found with the given id '5be6b2993846c059c25c5181}'`
//           );
//         }
//       );
//     });

//     it("should delete url successfully", async () => {
//       clientDeleteUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(200);
//         }
//       );
//     });

//     it("should fail to delete url", async () => {
//       clientDeleteUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "1234",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to delete url", async () => {
//       clientDeleteUrl(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "5be6b2993846c059c25c5181",
//         },
//         (value: UrlSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Url was found with the given id '5be6b2993846c059c25c5181'`
//           );
//         }
//       );
//     });
//   });
// });
