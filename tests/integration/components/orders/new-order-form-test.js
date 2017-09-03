import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('orders/new-order-form', 'Integration | Component | orders/new order form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{orders/new-order-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#orders/new-order-form}}
      template block text
    {{/orders/new-order-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
