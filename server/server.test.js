const request = require("supertest");
const expect = require("expect")

let app = require("./server").app;

describe("Server", () => {

  describe("GET /", () => {
    //still using mocha
    it("should return hello world response", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .expect("Hello world!!!")
        .end(done);
    });
  })
  it("should return the user object", (done) => {
    request(app)
      .get("/users")
      .expect(200)
      .expect((response) => {
        expect(response.body).toInclude({
          name: "matt2",
          age: 100,
        });
      })
      .end(done);
  })

})
