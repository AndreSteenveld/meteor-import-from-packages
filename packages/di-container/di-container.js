import { Container } from "aurelia-dependency-injection";

// Should we set up an application object and do silly global managment?
const container = Container.instance = new Container( );

export const di_container = { container };
export default container;
