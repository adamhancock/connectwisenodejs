var axios = require('axios');
let connectwise = {
    data: {},

    setConfig: function (company) {
        let key = new Buffer(company.cw_company + "+" + company.public_key + ":" + company.private_key).toString('base64');

        this.data.config = {
            headers: {
                'Authorization': 'Basic ' + key,
                'Content-Type': 'application/json'
            }
        };

        this.data.cw_url = company.cw_url;
        return "Config Set";
    },
    // Connectwise Call
    getCall: function (api, conditions, orderby) {

        return axios.get('https://' + this.data.cw_url + '/v4_6_release/apis/3.0' + api + '?conditions=' + conditions + '&orderby=' + orderby, this.data.config)
            .then(function (response) {
                return response.data
            })
            .catch(error => error)

    },
    postCall: function (api, data) {

        return axios.post('https://' + this.data.cw_url + '/v4_6_release/apis/3.0' + api, data, this.data.config)
            .then(function (response) {
                return response.data
            })
            .catch(error => error)

    },
    patchCall: function (context){
        // To be continued. 
    }
}
module.exports = connectwise;