import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000'
});
// import ActiveModelAdapter from 'active-model-adapter';

// export default ActiveModelAdapter.extend({
//   host: 'http://localhost:3000'
// });
