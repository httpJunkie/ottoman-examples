// Legacy no scope or collection provided (default)
// implied collection name is assumed to be the model name ("Airline")

// Global Level Definition
const { Ottoman } = require('ottoman')
var ottoman = new Ottoman({ })

const schema = new Schema({ callsign: String, country: String, name: String })

// Model Level Definition
const options = { } // assumes default
const Airline = connection.model('Airline', schema, options)
const cb_airlines = new Airline({ 
  callsign: 'CBA', country: 'United States', name: 'Couchbase Airlines' 
})

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
// Resolve to: scopeName: '_default', collectionName: 'Airline'

// ENSURECOLLECTIONSLOGIC:
// If ottoman.ensureCollections is called or start() which also calls ensureCollections()  
//    we should attempt to create `Airline` collection under the `_default` scope
//    this will result in an unsupported exception, we should throw as unsupported

// ENSUREINDEXESLOGIC:
// This would fail as unsupported. though it would not be called if ensureCollections fails anyways.

// ORDERLOGIC: 
// When start() is called ensureCollections() is called first and then ensureIndexes() is called