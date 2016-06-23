// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by exported-to-imports.js.
import { name as packageName } from "meteor/andre:exported-to-imports";

// Write your tests here!
// Here is an example.
Tinytest.add('exported-to-imports - example', function (test) {
  test.equal(packageName, "exported-to-imports");
});
