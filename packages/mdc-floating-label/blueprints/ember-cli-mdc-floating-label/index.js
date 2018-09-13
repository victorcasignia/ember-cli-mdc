/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/floating-label'}
  ],

  addons: [
    {name: 'ember-cli-mdc-rtl'},
    {name: 'ember-cli-mdc-base'},
    {name: 'ember-cli-mdc-theme'},
    {name: 'ember-cli-mdc-typography'},
    {name: 'ember-cli-mdc-animation'}
  ]
});
