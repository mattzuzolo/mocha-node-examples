const expect = require("expect");
const rewire = require("rewire");

let app = rewire("./app");

describe("App", () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("should call the spy correctly", () => {
    let spy = expect.createSpy();
    spy("matt", 24);
    expect(spy).toHaveBeenCalledWith("matt", 24);
  });

  it("should call saverUser with user obj", () => {
    let email = "matt@gmail.com";
    let password = "password123";

    app.handleSignup(email, password); // will call spy instead
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
