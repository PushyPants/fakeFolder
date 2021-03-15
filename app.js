var myFirstObj = {
  turtle: {
    age: 35,
    gender: "car",
  },
  push: {
    age: 40,
    gender: "lawn mower",
  },
};

function getUser(name) {
    return myFirstObj[name]
}