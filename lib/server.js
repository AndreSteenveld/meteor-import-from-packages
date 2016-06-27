//
// I think this file will be loaded first before everything else?
//
import "babel-polyfill";

import container from "meteor/andre:di-container";
import { EventAggregator } from "aurelia-event-aggregator";

container.registerSingleton( EventAggregator );

console.log( `lib/server.js :: Intialized the application` );
