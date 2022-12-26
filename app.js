function copyMessage() {
  // Mesajınızın değerini alın
  var message = "mcban,semraerdognn,bayramunl,burakylcn,araseda,mehmetaras34,cobanahmet36,mertaydn,merymcbn,ibrahimgediktr,ardakoskiss,berkayülger,neosyazilim,furkanylmz,omeraydin,tolgabilim";

  // Kopyalama işlemini gerçekleştirin
  navigator.clipboard.writeText(message).then(function() {
    console.log("Mesaj panosuna kopyalandı.");
  }, function(err) {
    console.error("Kopyalama işlemi başarısız oldu: ", err);
  });
  const alert = document.querySelector(".alert");
  alert.style.display="inline-block";
  setTimeout(function(){
    alert.style.display="none";
  },2000);
}

document.querySelector(".parentCekilisSonucu").style.display="none";

function tikla(){

  let isimler = document.querySelector(".isimler").value;
  let kazananSayisi = Number(document.querySelector(".kazananSayisi").value);
  let yedekSayisi = Number(document.querySelector(".yedekSayisi").value);

  if(isimler=="" || kazananSayisi=="" || yedekSayisi==""){
    return document.querySelector(".alert-danger").style.display="block";
  }


  if(isimler.length<35){
    document.querySelector(".alert-danger").innerHTML="Çok Az Kullanıcı Adına Sabipsiniz!";
    document.querySelector(".alert-danger").style.display="block";
    // alert("Çok Az Kullanıcı Adına Sabipsiniz!");
    return;
  }
 
  let bolum =  isimler.split(",");
  
  let isimlerLenght = bolum.length;

  

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


    // Ul elementi oluşturun
    const kazanan = document.querySelector(".kazanan");
  
    // Dizideki her bir öğe için li elementi oluşturun
    for (var i = 0; i < uniqueArray.length; i++) {
      var item = document.createElement("li");
      item.appendChild(document.createTextNode(uniqueArray[i]));
      kazanan.appendChild(item);
    }
    
     // Ul elementi oluşturun
     const yedek = document.querySelector(".yedek");
  
     // Dizideki her bir öğe için li elementi oluşturun
     for (var i = 0; i < uniqueArrayYedek.length; i++) {
       var item2 = document.createElement("li");
       item2.appendChild(document.createTextNode(uniqueArrayYedek[i]));
       yedek.appendChild(item2);
     }



    document.querySelector(".parent-content").style.display="none";
    document.querySelector(".parentCekilisSonucu").style.display="block";

}