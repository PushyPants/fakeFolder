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

function getUserAge(name) {
    return myFirstObj[name].age;
}