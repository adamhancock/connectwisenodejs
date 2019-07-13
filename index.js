var axios = require('axios')
var base64 = require('base-64')

class cw {

  constructor(company) {

    this.data = {
      cw_url: company.cw_url
    }
    let key = base64.encode(
      `${company.cw_company}+${company.cw_public_key}:${company.cw_private_key}`
    )

    this.config = {
      headers: {
        Authorization: `Basic ${key}`,
        'Content-Type': 'application/json'
      }
    }



    return 'Config Set'
  }
  // Connectwise Call
  getCall(api, conditions, orderby) {
    return axios
      .get(
        'https://' +
        this.data.cw_url +
        '/v4_6_release/apis/3.0' +
        api +
        '?conditions=' +
        conditions + '&pagesize=1000' +
        '&orderby=' +
        orderby,
        this.config
      )
      .then(function (response) {
        return response.data
      })
      .catch(error => {
        console.log(error)

        return error
      })
  }
  postCall(api, data) {
    return axios
      .post(
        'https://' + this.data.cw_url + '/v4_6_release/apis/3.0' + api,
        data,
        this.config
      )
      .then(function (response) {
        return response.data
      })
      .catch(error => {
        console.log(error)
        return error
      })
  }

  patchCall(api, data) {
    return axios
      .patch(
        'https://' + this.data.cw_url + '/v4_6_release/apis/3.0' + api,
        data,
        this.config
      )
      .then(function (response) {
        return response.data
      })
      .catch(error => error)
  }
}

module.exports = cw
if (process.env.cw_url) {}
