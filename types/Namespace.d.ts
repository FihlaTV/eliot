declare class Namespace {
  readonly name: string;
  constructor( name: string )
  register: <Class>( key: string, value: Class ) => Class
}

declare module "PHET_CORE/Namespace" {
  export = Namespace;
}