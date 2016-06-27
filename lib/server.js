//
// I think this file will be loaded first before everything else?
//
import "babel-polyfill";
import "core-js/stage/4";

import container from "meteor/andre:di-container";
import { EventAggregator } from "aurelia-event-aggregator";

console.log( `We have imported the ES7 stage 4 polys :: ${ typeof Object.entries }` );

container.registerSingleton( EventAggregator );

console.log( `lib/server.js :: Intialized the application` );
