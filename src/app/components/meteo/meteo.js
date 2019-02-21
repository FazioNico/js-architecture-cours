export class Meteo {
  constructor(htmlElement) {
    this.root = htmlElement;
    // store API KEY
    this.apiKey = 'e69064d639a2a2cd2f257cb59c476c6c';
    // Create default api url
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=LAT&lon=LON&units=metric&APPID='+this.apiKey ;
    // do test
    if (!htmlElement) {
      return alert('Please provide valid HTML element to load meteo app');
    }
    // run app
    this.buildTemplate();
    this.askPosition();
  }

  buildTemplate() {
    // replace root DOM with new skeleton
    this.root.innerHTML = `
      <div id="meteoResult"></div>
    `;
  }

  askPosition() {
      new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
              (position) => {
                  const {coords: {latitude, longitude} = {}} = position;
                  console.log('pos->', latitude, longitude);
                  resolve({latitude, longitude})
              }, 
              (error) => {
                  console.log('err->',  error);
                  reject({error})
              });            
      })
      .then(res => this.loadMeteoData(res))
      .catch(err => alert('User denied Geolocation'));

  }

  loadMeteoData(res){
    // build url query
    const url = this.apiUrl
                    .replace('LAT', res.latitude)
                    .replace('LON', res.longitude);
    // do query
    fetch(url).then(res => res.json())
    // wait response
    .then(response => {
      // display response as HTML
      this.displayData(response);
    })
    .catch(err => this.displayData(err))
  }

  displayData(data){
    // display log to see data to extract
    console.log('-->', data);
    // extracting datas
    const {
      main: {
        humidity = null,
        pressure = null,
        temp = null,
        temp_max = null,
        temp_min = null
      } = {},
      name = null,
      visibility = null,
      wind: {
        speed: windSpeed = null
      } = {},
      weather = [],
      message = null
    } = data;
    // build template with datas
    const template = `
      <p><b>${(name || message).toUpperCase()}</b></p>
      <p>
        <b>Humidity:</b> ${humidity}<br/>
        <b>Pressure:</b> ${pressure}<br/>
        <b>Temp.:</b> ${temp}<br/>
        <b>Temp. max</b> ${temp_max}<br/>
        <b>Temp. min</b> ${temp_min}<br/>
        <b>Visibility: </b> ${visibility}<br/>
        <b>Wind speed</b> ${windSpeed}
      </p>
    `;
    // insert template in DOM
    this.root.querySelector('#meteoResult').innerHTML = template;
    // add icon
    this.getIcon(weather);
  }

  getIcon(weather) {
    // check if data exsit
    if (!weather[0]) {
      return;
    }
    // check if data exsit
    const {icon = null} = weather[0];
    if (!icon) {
      return;
    }
    // build template
    const img = `<img src="https://openweathermap.org/img/w/${icon}.png" />`;
    // insert template
    this.root.querySelector('#meteoResult').insertAdjacentHTML('beforeend', img);
  }
}
