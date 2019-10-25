'use strict';

module.exports = {
  name: 'ember-cli-mdc-radio',

  included (app) {
    this._super (...arguments);

    app.import ({
      development: 'node_modules/@material/radio/dist/mdc.radio.js',
      production: 'node_modules/@material/radio/dist/mdc.radio.min.js'
    });
  },

  optionsFor (type, options) {
    if (type === 'sass') {
      options.cacheInclude = options.cacheInclude || [];
      options.cacheInclude.push (/addon\.scss/);
      options.cacheInclude.push (/_app-theme\.scss/);

      options.cacheInclude.push (/@material\/animation/);
      options.cacheInclude.push (/@material\/base/);
      options.cacheInclude.push (/@material\/radio/);
      options.cacheInclude.push (/@material\/form-field/);
      options.cacheInclude.push (/@material\/ripple/);
      options.cacheInclude.push (/@material\/rtl/);
      options.cacheInclude.push (/@material\/theme/);
      options.cacheInclude.push (/@material\/typography/);
    }

    return options;
  }
};
