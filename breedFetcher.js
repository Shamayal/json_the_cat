const request = require('request'); // to use request library and make the HTTP request

let breedName  = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log("Error: domain name not found.")
  } else {
    try {
      const data = JSON.parse(body);
      console.log(data[0].description);
    } catch (error) {
      console.log("Sorry, we could not find that breed name in our data base.");
    }
  }
});