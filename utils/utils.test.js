const expect = require("expect")

const utils = require("./utils")

describe("Utils", () => {

  describe("#add", () => {
    it ("should add two numbers", () => {
      let result = utils.add(33, 11);

      expect(result).toBe(44).toBeA("number");
      // if (result != 44){
      //   throw new Error(`Expected 44, but received ${result}.`)
      // }
    });
  });



  it("should async add two numbres", (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA("number");
      done();
    });
  })


  it ("should square a number", () => {
    let result = utils.square(5);

    expect(result).toBe(25).toBeA("number");
    // if (result != 25){
    //   throw new Error(`Expected 25, but received ${result}.`)
    // };
  });

  it ("should asnyc square a number", (done) => {
    utils.asyncSquare(6, (result) => {
      expect(result).toBe(36).toBeA("number");
      done();
    })
  })

  it ("should set first and last names", () => {
    let user = {};
    let result = utils.setName(user, "John Doe");

    expect(result).toInclude({
      firstName: "John",
      lastName: "Doe"
    }).toBeA("object")
  })
});




//experimenting:
// it("should expect some values", () => {
//   expect({name: "Matt"}).toEqual({name: "Matt"});
// });
