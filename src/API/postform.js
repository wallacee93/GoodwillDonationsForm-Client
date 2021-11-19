const axios = require('axios');

async function makePostRequest() {

    params = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com',
        address: '112 S French St',
        description_type: 'sneakers',
        quantity: '2'
      }

    let res = await axios.post('http://localhost:8080/donation/', params);

    console.log(res.data);
}

makePostRequest();