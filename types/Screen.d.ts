

declare module 'JOIST/Screen' {
  import ScreenView from 'JOIST/ScreenView';

  interface viewCreator<V extends ScreenView> {
    ( model: any ): V;
  }

  class PhetScreen {
    constructor(
      creator: () => any,
      createView: ( o: any ) => ScreenView,
      options: any
    )
  }
  export = PhetScreen;
}

