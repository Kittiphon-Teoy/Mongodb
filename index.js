// Load mongodb driver
const MongoClient = require('mongodb').MongoClient


// Create mongo client
const url = 'mongodb+srv://SuperAdmin:d961d955*@cluster0.zgoyb.mongodb.net/sample_mflix?retryWrites=true&w=majority'


const client = new MongoClient(url, { useNewUrlParser: true })

async function run() {
    try {
        // Create Connection mongodb 
        await client.connect()   //await รอ มีการทำงานแบบ Asynchronous

        // Connect to Database
        const db = client.db('sample_mflix')
        // Retrieve Collection
        const collection = db.collection('movies')
        //Query Data
        const query = { rated: 'TV-G' }
        //const movie = await collection.find(query) //findOne เเสดงตัวเดียว find ทั้งหมด
        const cursor = collection.find(query)
        await cursor.forEach(console.dir)

        
        
        console.log(movie)


    } catch(e) {
        console.log(e)
    } finally{
        await client.close()
    }
  
}
run().catch(console.dir)