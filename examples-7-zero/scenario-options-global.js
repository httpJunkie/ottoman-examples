// Modern scope and collection provided at global level

const { setGlobalConfig } = require('ottoman')
ottoman.globalConfig({ scopeName: 'us', collectionName: 'Airlines' })
const schema = new Schema({ callsign: String, country: String, name: String })

const options = {  } // empty object does not mean default
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
key: 'us$Airlines::48bbab70-277b-4730-ba4a-c53fa200b292'
value: {
  callsign: "CBA",
  country: "United States",
  name: "Couchbase Airlines",
  id: "48bbab70-277b-4730-ba4a-c53fa200b292",
}
```

// RESOLVEDSCOPEANDCOLLECTION:
// resolve to: scopeName: 'us', collectionName: 'Airlines' 
// since scopeName was provided at the global level and not at the model, it takes precedence

// ENSURECOLLECTIONSLOGIC:
// if ensureScopeAndCollection = true, start() calls a method called ensureCollections() 
//    an attempt to create scope and collections will happen with transient retries
//    ignore scope and collection exist errors

// ENSUREINDEXESLOGIC:
// if ensureIndexes = true, create indexes

// ORDERLOGIC: 
// When start() is called ensureCollections() is called first and then ensureIndexes() is called