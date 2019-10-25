import Component from '@ember/component';
import layout from '../templates/components/mdc-radio';

function noOp () {

}

export default Component.extend({
  layout,

  classNames: ['mdc-radio'],
  
  didInsertElement () {
    this._super (...arguments);
    this.getWithDefault ('initialized', noOp) (this._radio);
  },
});
