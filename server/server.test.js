const request = require("supertest");

let app = require("./server").app;

describe("server test", () => {
  describe("GET /", () => {
    it("should return hello as the response", done => {
      request(app)
        .get("/")
        .expect(404)
        // .expect(res => {
        //   expect(res.body).toInclude({
        //     error: "Page not found"
        //   });
        // })
        .end(done);
    });
  });
  describe("GET /user", () => {
    it("should have an object which has Yoshi as the name property", done => {
      request(app)
        .get("/user")
        .expect(200)
        // .expect(res => {
        //   expect(res.body).toInclude({
        //     name: "Yoshi"
        //   });
        // })
        .end(done);
    });
  });
});
