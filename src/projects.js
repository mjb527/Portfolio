
const projects = [

  {
    _id: 0,
    title: "Eat-Da-Burger",
    repo: "https://github.com/mjb527/burgers",
    deployment: "https://eat-da-burger-mattb.herokuapp.com/",
    description: "This project was just a fun way to practice using HTML/JavaScript, Express, ORMs, and MySQL to POST and GET data from a database. Be sure to check out the deployed site!",
    technologies: ['HTML/CSS', 'Node.js', 'Handlebars', 'MySQL', 'Sequelize'],
    img_url: "static/imgs/burger.png"
  },
  {
    _id: 1,
    title: "Polish Word of the Day",
    repo: "https://github.com/mjb527/MMM-PL_WOTD",
    deployment: null,
    description: `A Magic Mirror module that populates today's word of the day, scraped from https://www.polishpod101.com/polish-phrases/. Contains the Polish word, English translation, part of speech, and several examples.`,
    technologies: ['HTML', 'Electron', 'Node.js', 'Cheerio', 'Request-Promise-Native'],
    img_url: "static/imgs/Word-of-the-Day-Example.png"
  },
  {
    _id: 2,
    title: "5 Day Weather App",
    repo: "https://github.com/mjb527/Homework_April11",
    deployment: "https://mjb527.github.io/Homework_April11",
    description: `This weather app gives a 5 day forecast of cities, including weather, temperature, humidy, and wind speed. Units are U.S. Standard. When you search for or select a city, you will see today's weather and a 5-day forecast.`,
    technologies: ['HTML', 'jQuery', 'OpenWeatherMap API'],
    img_url: "static/imgs/weather-app.png"
  },
  {
    _id: 3,
    title: "New York Mock Exchange",
    repo: "https://github.com/mjb527/NYME",
    deployment: "https://github.com/mjb527/NYME",
    description: `The New York Mock Exchange is an interactive app anyone can use to learn how to invest in the stock market. No real funds are used, but up to date stock prices are given, as well as a history up to six months for any stock.`,
    technologies: ['HTML', 'jQuery', 'Chart.js API', 'TwelveData API', 'Local Storage'],
    img_url: "static/imgs/Chart-js-screenshot.png"
  }

];

export default projects;
