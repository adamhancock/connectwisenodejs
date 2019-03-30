var axios = require('axios')
var base64 = require('base-64')
// prettier-ignore
const connectwise = {
  data: {},

  setConfig: (company) => {
    let key = base64.encode(`${company.cw_company}+${company.cw_public_key}:${company.cw_private_key}`)

    this.data.config = {
      headers: {
        'Authorization': `Basic ${key}`,
        'Content-Type': 'application/json'
      }
    }

    this.data.cw_url = company.cw_url
    return 'Config Set'
  },
  // Connectwise Call
  getCall: (api, conditions, orderby) => {
    return axios.get('https://' + this.data.cw_url + '/v4_6_release/apis/3.0' + api + '?conditions=' + conditions + '&orderby=' + orderby, this.data.config)
      .then(function (response) {
        return response.data
      })
      .catch(error => {
        console.log(error)

        return error
      })
  },
  postCall: (api, data) => {
    return axios.post('https://' + this.data.cw_url + '/v4_6_release/apis/3.0' + api, data, this.data.config)
      .then(function (response) {
        return response.data
      })
      .catch(error => {
        console.log(error)
        return error
      })
  },
  patchCall: () => {
    // To be continued.
  }
}

if (process.env.cw_url) {
  connectwise.setConfig({
    cw_url: process.env.cw_url,
    cw_company: process.env.cw_company,
    cw_public_key: process.env.cw_public_key,
    cw_private_key: process.env.cw_private_key
  })
}
module.exports = connectwise
