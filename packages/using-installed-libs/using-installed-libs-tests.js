// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by using-installed-libs.js.
import { name as packageName } from "meteor/andre:using-installed-libs";

// Write your tests here!
// Here is an example.
Tinytest.add('using-installed-libs - example', function (test) {
  test.equal(packageName, "using-installed-libs");
});
