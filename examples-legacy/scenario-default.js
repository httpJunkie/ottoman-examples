// Legacy no scope or collection provided (default)

// Global Level Definition
const { Ottoman } = require('ottoman')
var ottoman = new Ottoman({ collectionName: '_default'})

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
// Resolve to: scopeName: '_default', collectionName: '_default'
// explicitly providing a collectionname as `_default` overrides implied collectionName

// ENSURECOLLECTIONSLOGIC:
// If ottoman.ensureCollections is called or start() which also calls ensureCollections()  
//    we should not attempt to recreate the default scope and collection

// ENSUREINDEXESLOGIC:
// Create indexes *it should create the indexes (should not fail)

// ORDERLOGIC: 
// When start() is called ensureCollections() is called first and then ensureIndexes() is called