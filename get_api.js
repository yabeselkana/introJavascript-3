const axios = require("axios");

console.log("======== Aplikasi Product ==========");
const keys = (input) => {
  axios
    .get("https://dummyjson.com/products/")
    .then((res) => {
      const text = input;
      const isApi = res.data.products;
      const cek = isApi.some((obj) => obj.hasOwnProperty(input));
      if (cek) {
        isApi.map((item) => {
          console.log(`${input} Product : ${item[text]}`);
        });
      } else if (!input) {
        console.log(" Input  Tidak Ada  ");
      } else {
        console.log(" Key Tidak ada dalam Data ");
      }
    })
    .catch((err) => {
      if ((err = 404)) {
        console.error("Data Not Found ");
      }
    });
};

keys("title");
keys("description");
keys("brand");

console.log("======== Aplikasi Cypto ==========");
const Data = async () => {
  try {
    const response = await axios.get("https://api.reku.id/v2/coins");
    const data = response.data.result;
    data.map((item) => {
      console.log(`Name Cypto : ${item.accountname}`);
    });
  } catch (error) {
    if ((error = 404)) {
    }
    console.log("URL Salah ");
  }
};
Data();
