// elementleri seçelim 

const searchInput =document.querySelector("#searchInput");
const cityNameEl = document.querySelector(".cityName");
const degreeEl = document.querySelector(".degree");
const descEl = document.querySelector(".desc");


// ----------------------------------------------------------------------

searchInput.addEventListener("keypress", findWeatherInfo);

//* weatherApı ya gideceğimiz için yani onu çağıracağımız için ondan bir nesne üretmemiz lazım 
const weatherApi = new WeatherAPI();

// ascii tabloda enter a basmak consolda 13e tekabül ediyor 
function findWeatherInfo(e){
   if (e.keyCode =='13') {
    const cityName = searchInput.value.trim(); // trim() sağdan ve soldan boşlukları siliyor
    weatherApi.getWeatherInfo(cityName)
    .then (data => {
        if(data.message=="city not found" && error.response.status === 404){
            alert("ŞEHİR BULUNAMADI . LÜTFEN GEÇERLİ BİR ŞEHİR İSMİ GİRİNİZ.");
        }else{
     display(data);
      }
    })
    .catch(err => console.log(err));
  
    
   }
}


function display (data){
    cityNameEl.textContent=data.name;
    degreeEl.textContent=Math.round(data.main.temp)+ "°";
    descEl.textContent=data.weather[0].description;
}

searchInput.value="";
