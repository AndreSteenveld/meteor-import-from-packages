Package.describe({
  name: 'andre:package-with-class-properties',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3.1');
  api.use('ecmascript');
  api.mainModule('package-with-class-properties.js');
  api.export( "IntializeMe" );
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('andre:package-with-class-properties');
  api.mainModule('package-with-class-properties-tests.js');
});
