let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
let select1 = document.querySelector('.select1');
let select2 = document.querySelector('.select2');
let select3 = document.querySelector('.select3');
let select4 = document.querySelector('.select4');
let inp = document.querySelector('.inp');
let inp2 = document.querySelector('.inp2');

var stansiya1, stansiya2, yuk, vagon, input = '', input2 = '', natija;

select1.addEventListener('change', function (e) {
  stansiya1 = e.target.value;
});
select2.addEventListener('change', function (e) {
  stansiya2 = e.target.value;
});
select3.addEventListener('change', function (e) {
  yuk = e.target.value;
});
select4.addEventListener('change', function (e) {
  vagon = e.target.value;
});
inp.addEventListener('change', function (e) {
  input = e.target.value;
});
inp2.addEventListener('change', function (e) {
  input2 = e.target.value;
});

let stan = {
  "Namangan": 80,
  "Qo'qon": 0,
  "Pop": 40,
  "Chust": 45,
  "To'raqo'rg'on": 45,
}
let vag = {
  "Sisterna": 100,
  "Ochiq_vagon": 80,
  "Og'ir_yuk_uchun_vagon": 120,
}

btn.addEventListener('click', function () {
  if (stansiya1 && stansiya2 && vagon && yuk && !isNaN(input)) {
    let masofa = Math.abs(stan[stansiya1] - stan[stansiya2]);
    let sum = vag[vagon];

    let arr = [
      `Jo'natilgan Stansiya: ${stansiya1}`,
      `Qabul qilgan Stansiya: ${stansiya2}`,
      `Oraliq masofa: ${masofa} km`,
      `Yuk turi: ${yuk}`,
      `Vagon turi: ${vagon}`,
      `Yuk og'irligi: ${input} kg`,
      `Umumiy summa: ${masofa * sum * input} so'm`
    ];

    arr.forEach((element) => {
      console.log(element);
    });
    natija = masofa * sum * input;
  }
  else {
    console.log("Ma'lumot xato kiritilgan");
  }
});

btn2.addEventListener('click', function () {
  if (natija - (+input2) > 0) {
    console.log("================");
    console.log(`Pulingiz ${natija - (+input2)} so'm yetmadi.`);
  }
  else if (natija - (+input2) < 0) {
    console.log("================");
    console.log(`Pulingiz ${Math.abs(natija - (+input2))} so'm ortib qoldi.`);
  }
  else {
    console.log("================");
    console.log(`Xammasi yaxshi yakunladi.`);
  }
})