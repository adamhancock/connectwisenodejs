# SDK for Connectwise Manage.

## Set environmental variables for the following:

- cw_url=
- cw_company=
- cw_public_key=
- cw_private_key=

cw_url is without https://. For example crm.company.com.

## Include package

```
const cw = require('connectwisenodejs')
```

## Example - Fetching invoices

```
    cw.getCall('/finance/invoices', `balance > 0`, 'company/name asc').then(async (res) => {
        console.log(res)
    }.catch((err) => {
        console.error(error)
        return error
    })
```

## Example - Creating ticket & returning ticket ID

```
// Set ticket data
   const ticketdata = {
        summary: `test ticket`,
                    company: {
                        id: <company rec id>
                    },
                    initialDescription: `Test ticket data `,
                    initialInternalAnalysis: `Internal Analysis`
                }

// Create ticket
    cw.postCall('/service/tickets', ticketdata).then((res) => {
			return res.id;
		}).catch((err) => {
			console.log(err);
		});
```
