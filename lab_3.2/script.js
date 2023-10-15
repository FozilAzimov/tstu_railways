let select1 = document.querySelector('.stansiya');
let select2 = document.querySelector('.poyezd');
let btn = document.querySelector('.btn');

var stansiya = '', poyezd = '';

let stansiyalar = {
  'Toshkent': 0,
  'Andijon': 350,
  'Farg`ona': 330,
  'Namangan': 280,
  'Sirdaryo': 120,
  'Jizzax': 220,
  'Samarqand': 320,
  'Qashqadaryo': 440,
  'Surxondaryo': 530,
  'Navoiy': 570,
  'Buxoro': 630,
  'Xorazm': 1100,
  'Qoraqolpog`iston': 1300,
}

let tezlik = {
  'Afrosiyob': 3.5,
  'Sharq': 2.5,
  'Nasaf': 1.5,
}

select1.addEventListener('change', function ({ target: { value } }) {
  stansiya = value;
});
select2.addEventListener('change', function ({ target: { value } }) {
  poyezd = value;
});



btn.addEventListener('click', function () {

  let num = Math.ceil(Math.random() * 1000 + 300);
  let joylashuv = '';
  if (num === 0) {
    joylashuv = 'Toshkent bekatida';
  }
  else if (num > 0 && num < 120) {
    joylashuv = 'Toshkent va Sirdaryo bekatlari orasida';
  }
  else if (num === 120) {
    joylashuv = 'Sirdaryo bekatida';
  }
  else if (num < 220 && num > 120) {
    joylashuv = 'Sirdaryo va Jizzax bekatlari orasida';
  }
  else if (num === 220) {
    joylashuv = 'Jizzax bekatida';
  }
  else if (num > 220 && num < 280) {
    joylashuv = 'Toshkent va Namangan bekatlari orasida';
  }
  else if (num === 280) {
    joylashuv = 'Namangan bekatida';
  }
  else if (num < 320 && num > 280) {
    joylashuv = 'Jizzax va Samarqand bekatlari orasida';
  }
  else if (num === 320) {
    joylashuv = 'Samarqand bekatida';
  }
  else if (num > 320 && num < 330) {
    joylashuv = 'Namangan va Farg`ona bekatlari orasida';
  }
  else if (num === 330) {
    joylashuv = 'Farg`ona bekatida';
  }
  else if (num < 350 && num > 330) {
    joylashuv = 'Farg`ona va Andijon bekatlari orasida';
  }
  else if (num === 350) {
    joylashuv = 'Andijon bekatida';
  }
  else if (num > 350 && num < 440) {
    joylashuv = 'Samarqand va Qashqadaryo bekatlari orasida';
  }
  else if (num === 440) {
    joylashuv = 'Qashqadaryo bekatida';
  }
  else if (num < 530 && num > 440) {
    joylashuv = 'Qashqadaryo va Surxondaryo bekatlari orasida';
  }
  else if (num === 530) {
    joylashuv = 'Surxondaryo bekatida';
  }
  else if (num > 530 && num < 570) {
    joylashuv = 'Surxondaryo va Navoiy bekatlari orasida';
  }
  else if (num === 570) {
    joylashuv = 'Navoiy bekatida';
  }
  else if (num < 630 && num > 570) {
    joylashuv = 'Navoiy va Buxoro bekatlari orasida';
  }
  else if (num === 630) {
    joylashuv = 'Buxoro bekatida';
  }
  else if (num > 630 && num < 1100) {
    joylashuv = 'Buxoro va Xorazm bekatlari orasida';
  }
  else if (num === 630) {
    joylashuv = 'Xorazm bekatida';
  }
  else if (num < 1300 && num > 1100) {
    joylashuv = 'Xorazm va Qoraqolpog`iston bekatlari orasida';
  }
  else if (num === 1300) {
    joylashuv = 'Qoraqolpog`iston bekatida';
  }
  else if (num > 1300) {
    joylashuv = 'Chegaradan tashqaridagi bekatida';
  }
  else {
    joylashuv = 'Xato';
  }
  let arr = [
    `Poyezd nomi: ${poyezd}`,
    `Poyezd hozir: ${joylashuv}`,
    `Poyezd boradigan stansiya: ${stansiya}`,
    `Masofasi: ${Math.abs(num - stansiyalar[stansiya])}`,
    `Poyezd tezligi (o'rtacha): ${tezlik[poyezd]} km/min`,
    `Qancha vaqtda yetib borishi: ${Math.abs(num - stansiyalar[stansiya]) / tezlik[poyezd]} minut`,
    `============================`,
  ]
  if (stansiya && poyezd) {
    arr.forEach(value => {
      console.log(value);
    })
  }
  else {
    alert('Iltimos Stansiya va Poyezdni qatiy tanlashingiz kerak.')
  }
});