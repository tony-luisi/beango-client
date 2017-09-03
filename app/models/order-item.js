import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.belongsTo('order'),
  productId: DS.attr(),
  name: DS.attr(),
  notes: DS.attr()
});
