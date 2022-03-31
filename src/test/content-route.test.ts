// import { Content } from "../server/schemas/content-schema";
// import {
//   clientGetSingleContent,
//   clientGetContents,
//   clientAddContent,
//   clientUpdateContent,
//   clientDeleteContent,
// } from "../client/content-client";
// import { ContentResponse } from "../shared/interface/protos/content/ContentResponse";
// import { ContentSingleResponse } from "src/shared/interface/protos/content/ContentSingleResponse";
// import { generateAuthToken } from "../server/schemas/user-schema";
// import { Url } from "../server/schemas/url-schema";

// describe("content", () => {
//   afterAll(async () => {
//     jest.clearAllTimers();

//     await Content.deleteMany();
//     await Url.deleteMany();
//   });

//   beforeEach(() => {
//     jest.setTimeout(20000);
//   });

//   describe("UNARY API /getAllContent", async () => {
//     await Content.deleteMany();
//     let id: string = "";

//     await new Url({ title: "Example", link: "example" }).save();

//     it("should get content successfully", async () => {
//       for (let i = 0; i < 3; i++) {
//         const content = await new Content({
//           urlLink: "example",
//           title: `Example ${i + 1}`,
//           position: i + 1,
//           content: "content",
//           tags: ["tag1", "tag2"],
//         }).save();
//         id = content._id;
//       }

//       clientGetContents(
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
//                 content: "example 1",
//               },
//             ],
//           }),
//         },
//         (value: ContentResponse) => {
//           expect(value.status).toBe(200);
//           expect(value?.data?.length).toBe(1);
//         }
//       );
//     });

//     it("should get single content successfully", async () => {
//       clientGetSingleContent(
//         {
//           _id: id,
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value?.data?._id).toBe(id);
//         }
//       );
//     });

//     it("should fail to get single content", async () => {
//       clientGetSingleContent(
//         {
//           _id: "1234",
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to get single content", async () => {
//       clientGetSingleContent(
//         {
//           _id: "5be6b2993846c059c25c5181",
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Content with this '5be6b2993846c059c25c5181' was Found! please make sure you're sending the correct id`
//           );
//         }
//       );
//     });

//     it("should add content successfully", async () => {
//       clientAddContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           data: {
//             urlLink: "example",
//             title: `qwerty`,
//             position: 1,
//             content: "content",
//             tags: ["tag1", "tag2"],
//           },
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value.data?.title).toBe("about");
//         }
//       );
//     });

//     it("should fail to add content", async () => {
//       clientAddContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           data: {
//             urlLink: "example-qwerty",
//             title: `qwerty`,
//             position: 1,
//             content: "content",
//             tags: ["tag1", "tag2"],
//           },
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.data?.title).toBe(
//             `No url with this link 'example-qwerty' was Found! please make sure you're sending the correct url link`
//           );
//         }
//       );
//     });

//     it("should update content successfully", async () => {
//       clientUpdateContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//           data: {
//             urlLink: "example",
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             tags: ["tag1", "tag2"],
//           },
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(200);
//           expect(value.data?.title).toBe(`Updated`);
//         }
//       );
//     });

//     it("should fail to update content", async () => {
//       clientUpdateContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "1234",
//           data: {
//             urlLink: "example",
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             tags: ["tag1", "tag2"],
//           },
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to update content", async () => {
//       clientUpdateContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//           data: {
//             urlLink: "example-1",
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             tags: ["tag1", "tag2"],
//           },
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(
//             `No url with this link 'example-1' was Found! please make sure you're sending the correct url link`
//           );
//         }
//       );
//     });

//     it("should fail to update content", async () => {
//       clientUpdateContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "5be6b2993846c059c25c5181",
//           data: {
//             urlLink: "example",
//             title: `Updated`,
//             position: 1,
//             content: "content",
//             tags: ["tag1", "tag2"],
//           },
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Content was found with the given id '5be6b2993846c059c25c5181'`
//           );
//         }
//       );
//     });

//     it("should delete content successfully", async () => {
//       clientDeleteContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: id,
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(200);
//         }
//       );
//     });

//     it("should fail to delete content", async () => {
//       clientDeleteContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "1234",
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(400);
//           expect(value.errorMessage).toBe(`This id '1234' is invalid!`);
//         }
//       );
//     });

//     it("should fail to delete content", async () => {
//       clientDeleteContent(
//         {
//           token: generateAuthToken({ email: "willxd42@gmail.com" }).token,
//           _id: "5be6b2993846c059c25c5181",
//         },
//         (value: ContentSingleResponse) => {
//           expect(value.status).toBe(404);
//           expect(value.errorMessage).toBe(
//             `No Content was found with the given id '5be6b2993846c059c25c5181'`
//           );
//         }
//       );
//     });
//   });
// });
