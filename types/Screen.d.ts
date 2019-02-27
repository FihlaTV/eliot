

declare module 'JOIST/Screen' {
  import ScreenView from 'JOIST/ScreenView';

  class PhetScreen {
    constructor(
      creator: () => Object,
      createView: <T>( T: Object ) => any,
      options: Object
    )
  }
  export = PhetScreen;
}

