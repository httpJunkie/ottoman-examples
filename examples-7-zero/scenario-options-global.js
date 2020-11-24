// Modern scope and collection provided at global level

const { Ottoman } = require('ottoman')
var ottoman = new Ottoman({ scopeName: 'na', collectionName: 'us' })

const schema = new Schema({ callsign: String, country: String, name: String })

const options = {  } // empty object does not mean default
const Airline = connection.model('Airline', schema, options)
const cb_airlines = new Airline({ callsign: 'CBA', country: 'United States', name: 'Couchbase Airlines' })

cb_airlines.save()

ottoman.start() // ottoman.ensureCollections() && calls ottoman.ensureIndexes()

// RESULT: 
// SUCCESS

// DOCUMENT:
```
key: 'Airline::48bbab70-277b-4730-ba4a-c53fa200b292'
value: {
  callsign: "CBA",
  country: "United States",
  name: "Couchbase Airlines",
  id: "48bbab70-277b-4730-ba4a-c53fa200b292",
  _type: "Airline"
}
```

// RESOLVEDSCOPEANDCOLLECTION:
// Resolve to: scopeName: 'na', collectionName: 'us' 
// since scopeName was provided at the global level and not at the model, it takes precedence

// ENSURECOLLECTIONSLOGIC:
// if ottoman.ensureCollections is called or start() which also calls ensureCollections()  
//    an attempt to create scope and collections will happen
//    ignore scope and collection exist errors

// ENSUREINDEXESLOGIC:
// create indexes *it should create the indexes (should not fail)

// ORDERLOGIC: 
// When start() is called ensureCollections() is called first and then ensureIndexes() is called