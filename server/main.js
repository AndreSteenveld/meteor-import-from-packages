import imports_from_package from "/imports/imports-from-packages";
import Import_InitializeMe from "/imports/import-with-class-properties";

//import DependencyInjectedClass from "andre:using-installed-libs";

console.log( `main :: ${ imports_from_package }` );

console.log( `main :: ${ exported_to_imports }` );
console.log( `main :: ${ imports_from_imports }` );

//new IntializeMe( );
new Import_InitializeMe( );

new DependencyInjectedClass( );
