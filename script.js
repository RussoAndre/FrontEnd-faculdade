function relogio(tempoAlarme) {
  return new Promise((resolve, reject) => {
    let segundos = 0;
    let randomNum = (Math.random() * 100) % 10;
    console.log(randomNum);
    setInterval(() => {
      segundos++;

      if (segundos >= randomNum) {
        reject("ERRO!!!");
      }
      if (segundos == tempoAlarme) {
        resolve("BEEP BEEP");
      }
    }, 1000);
  });
}

//let p = relogio(5);
//console.log("p", p);
//p.then((res) => {
//  console.log("res", res);
//});
//setInterval(() => {
//segundos++;
//console.log(segundos);
//}, 1000);

async function brincaComRelogios() {
  try {
    let resp = await relogio(5);
    console.log("resp", resp);
    resp = await relogio(5);
    console.log("resp", resp);
  } catch {
    console.log("erro");
  }
}

brincaComRelogios();
