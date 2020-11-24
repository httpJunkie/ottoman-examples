// Legacy scope and collection provided at global level

const { Ottoman } = require('ottoman')
var ottoman = new Ottoman({ scopeName: 'na', collectionName: 'us' })

const schema = new Schema({ callsign: String, country: String, name: String })

const options = {  } // empty object does not mean default
const Airline = connection.model('Airline', schema, options)
const cb_airlines = new Airline({ callsign: 'CBA', country: 'United States', name: 'Couchbase Airlines' })

cb_airlines.save()

ottoman.start() // ottoman.ensureCollections() && calls ottoman.ensureIndexes()

// RESULT: 
// Error: This version of Couchbase Server does not support scopes and collections

// DOCUMENT:
// No doc generated

// RESOLVEDSCOPEANDCOLLECTION:
// Resolve to: scopeName: 'na', collectionName: 'us' 
// Since scopeName and collectionName was provided at the global level and not the model level, it takes precedence

// ENSURECOLLECTIONSLOGIC:
// if ottoman.ensureCollections is called or start() which also calls ensureCollections()  
//    we should attempt to create the 'na' && 'us' scope and collection
//    this will result in an unsupported exception, we should throw as unsupported

// ENSUREINDEXESLOGIC:
// this would fail as unsupported. though it would not be called if ensureCollections fails anyways.

// ORDERLOGIC: 
// When start() is called ensureCollections() is called first and then ensureIndexes() is called