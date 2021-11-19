const axios = require('axios');

async function makeGetRequest() {

  let res = await axios.get('http://localhost:8080/donation/donations');

  let data = res.data;
  console.log(data);
}

makeGetRequest();