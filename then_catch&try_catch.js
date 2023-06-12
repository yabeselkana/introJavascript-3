const cekHarikerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dateDay = ["senin", "selasa", "rabu", "kamis", "jumaat"];
      let cek = dateDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja "));
      }
    }, 3000);
  });
};

// cekHarikerja("senin")
//   .then((res) => {
//     console.log(`${res} hari kerja `);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
cekHarikerja("kamis");

const getData = async () => {
  try {
    const cek = await cekHarikerja("selasa");
    console.log(`${cek} hari kerja `);
  } catch (error) {
    console.log(error);
  }
};

getData();
