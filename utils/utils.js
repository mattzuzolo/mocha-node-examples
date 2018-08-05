module.exports.add = (a, b) =>  a + b;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.square = (x) => x * x;

module.exports.asyncSquare = (y, callback) => {
  setTimeout(() => {
    callback(y * y);
  }, 1000);
};

module.exports.setName = (user, fullName) => {
  let namesArray = fullName.split(" ");
  user.firstName = namesArray[0];
  user.lastName = namesArray[1];
  return user;
}
