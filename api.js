class WeatherAPI{
    //! burda weatherapi adında bir sınıf tanımladık ve bir metot oluşturduk bu metot içerisinde openweather sitesinden key ve api aldık ve bu metot içinde tanımladık
    constructor(){
        this.baseURL="https://api.openweathermap.org/data/2.5/weather";
        this.apiKey="734d25146056936f212cc4c1dc83912e";
    }
    //!https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    // ! biz aşağıda fetch ile yukardaki linki oluşturduk units ile derecesini yani birimini verdik ve lang ile de türkçe dilini seçtik

    // ! daha sonra bu fetch bize promise döndüğü için yani asenkron olduğu için biz bunu senkrona çeviricez ---> async&await ya da promise kullanabilirsin (then catch ile yakalayalım bu kodta)

    // getWeatherInfo(cityname){
    //     fetch(`${this.baseURL}?=${cityname}&appid=${this.apiKey}&units=metric&lang=tr`)
    //     .then(response=> response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    //     // bu oluşturduğumuz metodun çalışması için çağırmamız lazım ---Z main.js sınıfında çağırıcaz
    // }

    async getWeatherInfo(cityName){
        // burda yakaladığumuz veriyi ressponse ye attık
        const response = await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric&lang=tr`);
        const data = await response.json();
        return data;
    }
}
