let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');

let select1 = document.querySelector('.select1');
let select2 = document.querySelector('.select2');
let select3 = document.querySelector('.select3');
let select4 = document.querySelector('.select4');

let ism = document.querySelector('.ism');
let familiya = document.querySelector('.familiya');
let pasport = document.querySelector('.pasport');
let inp = document.querySelector('.inp');

var stansiya1, stansiya2, poyezd, vaqt,
  input = '', ismi = '', familiyasi = '', pasporti = '', natija;

select1.addEventListener('change', function (e) {
  stansiya1 = e.target.value;
});
select2.addEventListener('change', function (e) {
  stansiya2 = e.target.value;
});
select3.addEventListener('change', function (e) {
  poyezd = e.target.value;
});
select4.addEventListener('change', function (e) {
  vaqt = e.target.value;
});

inp.addEventListener('change', function (e) {
  input = e.target.value;
});
ism.addEventListener('change', function (e) {
  ismi = e.target.value;
});
familiya.addEventListener('change', function (e) {
  familiyasi = e.target.value;
});
pasport.addEventListener('change', function (e) {
  pasporti = e.target.value;
});

let stan = {
  "Namangan": 240,
  "Qo'qon": 220,
  "Pop": 210,
  "Chust": 215,
  "Toshkent": 0,
  "Samarqand": 300,
  "Buxoro": 500,
  "Termiz": 400,
  "To'raqo'rg'on": 250,
}
let poyezdlar = {
  "Afrosiyob": 5000,
  "Sharq": 3000,
  "Nasaf": 2000,
}

btn.addEventListener('click', function () {
  if (stansiya1 && stansiya2 && poyezd && vaqt) {
    let masofa = Math.abs(stan[stansiya1] - stan[stansiya2]);
    let sum = poyezdlar[poyezd];

    let arr = [
      `Ism: ${ismi}`,
      `Familiya: ${familiyasi}`,
      `Pasport seria va raqam: ${pasporti}`,
      `Qayerdan: ${stansiya1}`,
      `Qayerga: ${stansiya2}`,
      `Poyezd: ${poyezd}`,
      `Vaqti: ${vaqt}`,
      `Umumiy summa: ${masofa * sum} so'm`,
    ];

    arr.forEach((element) => {
      console.log(element);
    });
    natija = masofa * sum;
  }
  else {
    console.log("Ma'lumot xato kiritilgan");
  }
});

btn2.addEventListener('click', function () {
  if (natija - (+input) > 0) {
    console.log("================");
    console.log(`Pulingiz ${natija - (+input)} so'm yetmadi.`);
  }
  else if (natija - (+input) < 0) {
    console.log("================");
    console.log(`Pulingiz ${Math.abs(natija - (+input))} so'm ortib qoldi.`);
  }
  else {
    console.log("================");
    console.log(`Xammasi yaxshi yakunladi.`);
  }
})