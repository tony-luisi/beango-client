import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [{
      id: 1,
      name: 'Flat White',
      price: 4.5,
      size: 'small'
    }]
  }
});
