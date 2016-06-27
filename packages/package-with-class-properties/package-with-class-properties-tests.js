// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by package-with-class-properties.js.
import { name as packageName } from "meteor/andre:package-with-class-properties";

// Write your tests here!
// Here is an example.
Tinytest.add('package-with-class-properties - example', function (test) {
  test.equal(packageName, "package-with-class-properties");
});
