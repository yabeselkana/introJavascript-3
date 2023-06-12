const getMonth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      let month = ["januari", "february", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "Desember"];
      if (!error) {
        resolve(month);
      } else {
        reject(new Error("Sorry not fonnd"), null);
      }
    }, 3000);
  });
};

getMonth()
  .then((res) => {
    res.map((item) => {
      console.log(`Bulan : ${item}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//
