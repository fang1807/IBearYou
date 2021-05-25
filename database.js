const {Pool,Client} = require('pg')
const connectionString = 'postgressql://postgres:1807@localhost:5433/IBearU'

const client = new Client({
   connectionString: connectionString
})
 
client.connect()
 
export default client;
 
// client.query('SELECT * from Userprofile', (err, res) => {
   //  console.log(err, res)
    // client.end()
//})
