//
// I think this file will be loaded first before everything else?
//
import "babel-polyfill"; 

import { Container } from "aurelia-dependency-injection";
import { EventAggregator } from "aurelia-event-aggregator";

// Should we set up an application object and do silly global managment?
const container = Container.instance = new Container( );

container.registerSingleton( EventAggregator );

console.log( `lib/server.js :: Intialized the application` );
