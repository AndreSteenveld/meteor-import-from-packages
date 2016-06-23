import { exported_to_imports } from "meteor/andre:exported-to-imports";

console.log( `imports from package :: ${ exported_to_imports }` );

export const imports_from_package = "imports-from-packages";
export default imports_from_package;
