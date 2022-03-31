import { main } from "../index";
import { clientLogin, clientRegister } from "../client/auth-client";
import { User } from "../server/schemas/user-schema";
import { AuthResponse } from "../shared/interface/protos/auth/AuthResponse";

describe("register", () => {
  beforeAll(async () => {
    await main();
  });

  afterAll(async () => {
    jest.clearAllTimers();
    await User.deleteMany();
  });

  beforeEach(() => {
    jest.setTimeout(20000);
  });

  describe("UNARY API /register", () => {
    it("should register user successfully", async () => {
      await User.deleteMany();

      clientRegister(
        {
          email: "willxd42@gmail.com",
          password: "______",
        },
        (value: AuthResponse) => {
          expect(value.status).toBe(200);
          expect(value.result).toBe("willxd42@gmail.com");
        }
      );
    });

    // it("should fail user registration", async () => {
    //   clientRegister(
    //     {
    //       email: "willxd42@gmail.com",
    //       password: "______",
    //     },
    //     (value: AuthResponse) => {
    //       expect(value.status).toBe(400);
    //       expect(value.result).toBe(
    //         "This email: 'willxd42@gmail.com' has already been used by another user"
    //       );
    //     }
    //   );
    // });

    // it("should login user successfully", async () => {
    //   clientLogin(
    //     {
    //       email: "willxd42@gmail.com",
    //       password: "______",
    //     },
    //     (value: AuthResponse) => {
    //       expect(value.status).toBe(200);
    //       expect(value.result).toBe("willxd42@gmail.com");
    //     }
    //   );
    // });

    // it("should fail, invalid email", async () => {
    //   clientLogin(
    //     {
    //       email: "will@gmail.com",
    //       password: "______",
    //     },
    //     (value: AuthResponse) => {
    //       expect(value.status).toBe(400);
    //       expect(value.result).toBe("willxd42@gmail.com");
    //     }
    //   );
    // });

    // it("should fail, invalid password", async () => {
    //   clientLogin(
    //     {
    //       email: "willxd42@gmail.com",
    //       password: "______",
    //     },
    //     (value: AuthResponse) => {
    //       expect(value.status).toBe(400);
    //       expect(value.result).toBe("willxd42@gmail.com");
    //     }
    //   );
    // });
  });
});
