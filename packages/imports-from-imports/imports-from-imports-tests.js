// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by imports-from-imports.js.
import { name as packageName } from "meteor/andre:imports-from-imports";

// Write your tests here!
// Here is an example.
Tinytest.add('imports-from-imports - example', function (test) {
  test.equal(packageName, "imports-from-imports");
});
