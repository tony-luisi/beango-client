import DS from 'ember-data';

export default DS.Model.extend({
  order_time: DS.attr(),
  order_date: DS.attr(),
  status: DS.attr(),
  order_items: DS.hasMany('order-item')
});
