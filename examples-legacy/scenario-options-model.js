// Legacy scope and collection provided at model level

const { Ottoman } = require('ottoman')
var ottoman = new Ottoman({ scopeName: 'na', collectionName: 'us' }) // empty object does not mean default

const schema = new Schema({ callsign: String, country: String, name: String })

const options = { scopeName: 'na', collectionName: 'Airlines' } // takes precedence over global
const Airline = connection.model('Airline', schema, options)
const cb_airlines = new Airline({ callsign: 'CBA', country: 'United States', name: 'Couchbase Airlines' })

cb_airlines.save()

ottoman.start() // ottoman.ensureCollections() && calls ottoman.ensureIndexes()

// RESULT: 
// Error: This version of Couchbase Server does not support scopes and collections

// DOCUMENT:
// No doc generated

// RESOLVEDSCOPEANDCOLLECTION:
// Resolve to: scopeName: 'na', collectionName: 'Airlines' 
// Since scopeName and collecionName were provided at the model level, it takes precedence

// ENSURECOLLECTIONSLOGIC:
// If ottoman.ensureCollections is called or start() which also calls ensureCollections()  
//    we should attempt to create the 'na' && 'Airlines' scope and collection
//    this will result in an unsupported exception, we should throw as unsupported

// ENSUREINDEXESLOGIC:
// This would fail as unsupported. though it would not be called if ensureCollections fails anyways.

// ORDERLOGIC: 
// When start() is called ensureCollections() is called first and then ensureIndexes() is called