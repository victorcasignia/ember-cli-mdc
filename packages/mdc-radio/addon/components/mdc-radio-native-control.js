import Radio from 'ember-radio-button/components/radio-button-input';

export default Radio.extend({
  classNames: ['mdc-radio__native-control'],

  attributeBindings: ['form']
});
