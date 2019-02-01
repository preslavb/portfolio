'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // JQuery
  // app.import(app.bowerDirectory + '/jquery/dist/jquery.js');

  // Popper.js
  app.import(app.bowerDirectory + '/popper.js/dist/umd/popper.min.js');

  // Bootstrap
  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');

  // Font Awesome
  app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.css');
  app.import(app.bowerDirectory + '/font-awesome/fonts/FontAwesome.otf', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.eot', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.svg', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', { destDir: 'fonts' });
  app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2', { destDir: 'fonts' });

  // Owl Corousel
  app.import(app.bowerDirectory + '/owl.carousel/dist/owl.carousel.js');
  app.import(app.bowerDirectory + '/owl.carousel/dist/assets/owl.carousel.css');
  app.import(app.bowerDirectory + '/owl.carousel/dist/assets/owl.theme.default.css');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
