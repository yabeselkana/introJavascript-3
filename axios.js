const axios = require("axios");

const res = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      const res = response.data;
      res.map((item) => {
        console.log(`name : ${item.name}`);
      });
    })
    .catch(function (error) {
      if ((error = 404)) {
        console.log("url salah  ");
      }
    });
};

console.log(res());
