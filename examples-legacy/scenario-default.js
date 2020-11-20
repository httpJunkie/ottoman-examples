// Legacy no scope or collection provided (default)

const { setGlobalConfig } = require('ottoman')
ottoman.globalConfig({})
const schema = new Schema({ callsign: String, country: String, name: String })

const options = {} // assumes default
const Airline = connection.model('Airline', schema, options)
const cb_airlines = new Airline({ callsign: 'CBA', country: 'United States', name: 'Couchbase Airlines' })

cb_airlines.save()

let ensureScopeAndCollection = true
let ensureIndexes = true // if true, start calls ensureIndexes()
ottoman.start(ensureScopeAndCollection, ensureIndexes)

// RESULT: 
// SUCCESS

// DOCUMENT:
```
key: '_default$Airline::48bbab70-277b-4730-ba4a-c53fa200b292'
value: {
  callsign: "CBA",
  country: "United States",
  name: "Couchbase Airlines",
  id: "48bbab70-277b-4730-ba4a-c53fa200b292",
  _type: "Airline"
}
```

// RESOLVEDSCOPEANDCOLLECTION:
// resolve to: scopeName: '_default', collectionName: '_default'

// ENSURECOLLECTIONSLOGIC:
// if ensureScopeAndCollection = true, start() calls a method called ensureCollections() 
//    no attempts to create scope and collections should happen because 
//    in modern we are skipping so it should be skipped in legacy as well

// ENSUREINDEXESLOGIC:
// if ensureIndexes = true, create indexes

// ORDERLOGIC: 
// When start() is called ensureCollections() is called first and then ensureIndexes() is called