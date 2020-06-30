class Weather {
    constructor(state, country) {
        this.apiKey = 'b4b83d9787b4581fd0840dd33b0574fe';
        this.state = state;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state},${this.country}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(state, country) {
        this.state = state;
        this.country = country;
    }
}