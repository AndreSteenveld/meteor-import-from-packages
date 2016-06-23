Package.describe({
  name: 'andre:exported-to-imports',
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
  api.mainModule('exported-to-imports.js');
  api.export( "exported_to_imports" );
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('andre:exported-to-imports');
  api.mainModule('exported-to-imports-tests.js');
});
