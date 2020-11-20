const couchbase = require("couchbase");
const CollectionExistsError = require("couchbase").CollectionExistsError
const cluster = new couchbase.Cluster("couchbase://localhost", {
  username: "Administrator",
  password: "password",
})

// Open a bucket to allow cluster-level querying
var bucket = cluster.bucket('travel')
// var collection = bucket.collection('Airline')

const createCollection = async () => {
  try {
    await bucket.collections().createCollection({
      name: 'Airlinez',
      scopeName: '_default',
      maxExpiry: 500,
    })
  } catch(e) {
    console.error(e.message)
  }
}

createCollection()
// .then(() => console.log(`collection created`))
.catch((e) => {
  if (!(e instanceof CollectionExistsError)) {
    console.error(e);
  }
})


// const airline = {
//   type: 'test',
//   id: 8091,
//   callsign: "CBS",
//   iata: null,
//   icao: null,
//   name: "Couchbase Airways",
// };

// const upsertDocument = async (doc) => {
//   try {
//     // key will equal: "airline_8091"
//     // const key = `${doc.type}_${doc.id}`
//     const result = await collection.insert(key, doc)
//     console.log("Upsert Result: ")
//     console.log(result)
//   } catch (error) {
//     console.error(error)
//   }
// }

// upsertDocument(airline)

