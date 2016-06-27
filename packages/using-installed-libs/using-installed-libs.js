import { EventAggregator } from "aurelia-event-aggregator";
import { Container } from "aurelia-dependency-injection";

DependencyInjectedClass = class DependencyInjectedClass {

	static inject( ) { return [ EventAggregator ]; }

	constructor( event_aggregator ){

		if( !arguments.length )
			return Container.instance.get( DependencyInjectedClass );

		console.log( `YAY we got a thing :: ${ typeof event_aggregator }` );

	}

};

//export DependencyInjectedClass;
export default DependencyInjectedClass;
