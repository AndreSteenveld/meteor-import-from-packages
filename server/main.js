import imports_from_package from "/imports/imports-from-packages";
import Import_InitializeMe from "/imports/import-with-class-properties";

import DependencyInjectedClass from "meteor/andre:using-installed-libs";

console.log( `main :: ${ imports_from_package }` );

console.log( `main :: ${ exported_to_imports }` );
console.log( `main :: ${ imports_from_imports }` );

//new IntializeMe( );
new Import_InitializeMe( );

const
	first_instance = new DependencyInjectedClass( ),
	second_instance = new DependencyInjectedClass( );

console.log( `Injected class have the same instances of the event aggregator :: [ ${ first_instance.event_aggregator === second_instance.event_aggregator } ]` );
console.log( `First and seconds instances are not the same [ ${ first_instance !== second_instance  } ]` );
