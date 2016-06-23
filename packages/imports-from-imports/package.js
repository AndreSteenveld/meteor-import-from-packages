Package.describe({
  name: 'andre:imports-from-imports',
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
  api.versionsFrom('1.2');
  api.use('ecmascript');
  api.mainModule('imports-from-imports.js');
  api.export( "imports_from_imports" );
  //Npm.depends({ "/imports/exported-to-packages" : "0.0.0" })
  //Npm.require( "/imports/exported-to-packages/index.js" );
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('andre:imports-from-imports');
  api.mainModule('imports-from-imports-tests.js');
});
