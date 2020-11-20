// Modern no scope or collection provided (default)

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
key: '_default$_default::48bbab70-277b-4730-ba4a-c53fa200b292'
value: {
  callsign: "CBA",
  country: "United States",
  name: "Couchbase Airlines",
  id: "48bbab70-277b-4730-ba4a-c53fa200b292",
}
```

// RESOLVEDSCOPEANDCOLLECTION:
// resolve to: scopeName: '_default', collectionName: '_default'

// ENSURECOLLECTIONSLOGIC:
// if ensureScopeAndCollection = true, start() calls a method called ensureCollections() 
//    no attempts to create scope and collections should happen because 
//    the default scope will always exist and can never be dropped
//    the default collection can be dropped can never be recreated (per Jim Walker collections team)

// ENSUREINDEXESLOGIC:
// if ensureIndexes = true, create indexes

// ORDERLOGIC: 
// When start() is called ensureCollections() is called first and then ensureIndexes() is called