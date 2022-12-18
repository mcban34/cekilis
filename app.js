function tikla(){

  let isimler = document.querySelector(".isimler").value;
 
  let bolum =  isimler.split(",");
  
  let isimlerLenght = bolum.length;

  let kazananSayisi = Number(document.querySelector(".kazananSayisi").value);
  let yedekSayisi = Number(document.querySelector(".yedekSayisi").value);

  let kazananlar = [];
  let yedekler = [];
  for(i=0;i<kazananSayisi;i++){
    let randomIndex = Math.floor(Math.random() * isimlerLenght);
    kazananlar.push(bolum[randomIndex]);
  }
  for(i=0;i<yedekSayisi;i++){
    let yedekIndex = Math.floor(Math.random() * isimlerLenght);
    yedekler.push(bolum[yedekIndex]);
  }

  const set = new Set(kazananlar);
  const uniqueArray = [...set];

  const setYedek = new Set(yedekler);
  const uniqueArrayYedek = [...setYedek];

  const kazananEksiBir = kazananSayisi -1;
  const yedekEksiBir = yedekSayisi - 1;

  if(uniqueArray.length==kazananEksiBir){
    let randomIndex2 = Math.floor(Math.random() * isimlerLenght);
    uniqueArray.push(bolum[randomIndex2]);
  }

  if(uniqueArrayYedek.length==yedekEksiBir){
    let randomIndex3 = Math.floor(Math.random() * isimlerLenght);
    uniqueArrayYedek.push(bolum[randomIndex3]);
  }

  function noMatchingElements(uniqueArray, uniqueArrayYedek) {
    for (let i = 0; i < uniqueArray.length; i++) {
      for (let j = 0; j < uniqueArrayYedek.length; j++) {
        if (uniqueArray[i] === uniqueArrayYedek[j]) {
          console.log("aynı elemanlar var");
          uniqueArrayYedek.splice(j,1);
          let yedekIndex2 = Math.floor(Math.random() * isimlerLenght);
          uniqueArrayYedek.push( bolum[yedekIndex2]);
          break;
        }           
      }
    }
  }

  

  noMatchingElements(uniqueArray, uniqueArrayYedek);

  
  console.log(uniqueArray);
  console.log(uniqueArrayYedek);


}