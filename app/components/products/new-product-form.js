import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    selectSize(size) {
      this.set('size', size)
    },
    selectCategory(category) {
      this.set('category', category)
    },
    handleSubmit() {
      const store = this.get('store')
      const newProduct = {
        name: this.get('name'),
        price: this.get('price'),
        category: this.get('category') || 'coffee',
        size: this.get('size') || 'small'
      }

      const product = store.createRecord('product', newProduct)
      product.save()
    }
  }
});
