import app from "../server";
import request from "supertest";

// don't put stuff in db when testing, use test db
describe("POST /user", () => {
  it("responds with json", async () => {
    const res = await request(app)
      .post("/user")
      .send({ username: "hello", password: "hola" })
      .set("Accept", "application/json")

    console.log(res)
    // expect(res.headers["Content-Type"]).toMatch(/json/);
    expect(res.status).toEqual(200);
  });
});