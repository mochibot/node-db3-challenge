const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep
}

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id }).first();
}

function findSteps(id) {
  return db('schemes as sh')
          .where('sh.id', id)
          .join('steps as s', 'sh.id','s.scheme_id')
          .select('s.id', 'sh.scheme_name', 's.step_number', 's.instructions')
          .orderBy('s.step_number')
}

function add(scheme) {
  return db('schemes').insert(scheme).then(id => findById(id[0]))
}

function update(changes, id) {
  return db('schemes').where({ id }).update(changes).then(() => findById(id));
}

function remove(id) {
  return db('schemes').where({ id }).del();
}

function addStep(step, scheme_id) {
  let newStep = {...step, scheme_id: scheme_id};
  
  return db('steps').insert(newStep).then(id => findSteps(scheme_id))
}