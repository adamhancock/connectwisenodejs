  (async () => {
    const connectwise = require('../index')



    console.log("Loaded dotenv")
    await require('dotenv').config()
    console.log("process env", process.env)
    let cw = new connectwise({
      cw_url: process.env.cw_url,
      cw_company: process.env.cw_company,
      cw_public_key: process.env.cw_public_key,
      cw_private_key: process.env.cw_private_key,
      clientid: process.env.clientid
    })

    cw.getCall('/finance/invoices', `balance > 0`, 'company/name asc').then(async (res) => {

      console.log(res)
    }).catch((err) => {
      console.error(error)
      return error
    })
  })()
