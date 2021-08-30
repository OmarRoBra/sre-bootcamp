import chai from "chai";
import { loginFunction } from "../services/login";
import { protectFunction } from "../services/protected";
import { getToken } from "../Helpers/JWTSign";
import { login } from "../routes/login";
import { protect } from "../routes/protected";

const expect = chai.expect;

describe("loginFunction()", function () {
  it("Test login", async function () {
    const response = await loginFunction("admin", "secret");
    expect(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4ifQ.BmcZ8aB5j8wLSK8CqdDwkGxZfFwM1X1gfAIN7cXOx9w"
    ).to.be.equal(response.token);
  });

  it("User not found", async function () {
    const response = await loginFunction("admn", "secret");
    expect("User Not found").to.be.equal(response.msg);
  });
  it("Invalid credentials", async function () {
    const response = await loginFunction("admin", "secrets");
    expect("Invalid credentials").to.be.equal(response.msg);
  });
});

describe("protectFunction()", function () {
  it("Test protected", function () {
    expect("You are under protected data").to.be.equal(
      protectFunction(
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4ifQ.StuYX978pQGnCeeaj2E1yBYwQvZIodyDTCJWXdsxBGI"
      )
    );
  });
});

describe("getToken()", function () {
  it("Test get Token", function () {
    expect(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW4ifQ.BmcZ8aB5j8wLSK8CqdDwkGxZfFwM1X1gfAIN7cXOx9w"
    ).to.be.equal(getToken("admin"));
  });
});
