import { Container } from "aurelia-dependency-injection";
import { assert } from "assert";

function registerInstanceOfType( key, instance, type = instance.constructor ){
	this.registerInstance( key, instance );
	this.registerAlias( key, type );
}

const register_instance_of_type = registerInstanceOfType.call.bind( registerInstanceOfType );

const container = new Container( );

class A {

	constructor( properties = { } ){

		Object.assign( this, properties );

	}

}

class B {

	constructor( properties = { } ){

		Object.assign( this, properties );

	}

}

const
	first  = new A({ name : "first" }),
	second = new A({ name : "second" }),
	third  = new A({ name : "third" }),
	forth  = new A({ name : "forth "}),
	fifth  = new A({ name : "fifth" }),
	sixth  = new A({ name : "sixth" });

container.registerInstance( "first", first );
container.registerAlias( "first", A );

container.registerInstance( "second", second );
container.registerAlias( "second", A );

container.registerInstance( "third", third );
container.registerAlias( "third", A );

container::registerInstanceOfType( "forth", forth );

register_instance_of_type( container, "fifth", fifth );

container.unregister( "second" );
container::registerInstanceOfType( "second", sixth );

console.log( `Getting the first instance :: ${ container.get( "first" ).name }` );
console.log( `Getting all the As :: ${ container.getAll( A ).map( ({ name }) => name ).join( ", " ) }` );
console.log( `Getting just the A? :: ${ container.get( A ).name }` );
console.log( `Getting forth :: ${ container.get( "forth" ).name }` );

console.log( "----------------------" );
