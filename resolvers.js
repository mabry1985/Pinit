const user = {
  _id: "1",
  name: "Josh",
  email: "Test@gmail.com",
  picture: "https://test.com",
}

module.exports = { 
  Query: {
    me: () => user
  }
}