import { EventAggregator } from "aurelia-event-aggregator";
import container from "meteor/andre:di-container";

DependencyInjectedClass = class DependencyInjectedClass {

	static inject( ) { return [ EventAggregator ]; }

	constructor( event_aggregator ){

		if( !arguments.length )
			return container.get( DependencyInjectedClass );

		console.log( `We got an event aggregator :: [ ${ typeof event_aggregator } ]`)

		Object.assign( this, { event_aggregator } );

		console.log( `typeof this.event_aggregator === ${ typeof this.event_aggregator }` );

	}

};

container.registerTransient( DependencyInjectedClass );

//export DependencyInjectedClass;
export default DependencyInjectedClass;
