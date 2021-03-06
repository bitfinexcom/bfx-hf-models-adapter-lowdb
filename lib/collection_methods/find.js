'use strict'

const ensureCollection = require('../util/ensure_collection')
const verifyCriteria = require('../util/verify_criteria')

module.exports = async (db, { path }, criteria = []) => {
  ensureCollection(db, path)

  return db
    .get(path)
    .filter(doc => {
      return verifyCriteria(doc, criteria)
    })
    .values()
    .value()
}
