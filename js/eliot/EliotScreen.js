// Copyright 2019, University of Colorado Boulder

/**
 * @author Michael Barlow (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const eliot = require( 'ELIOT/eliot' );
  const EliotModel = require( 'ELIOT/eliot/model/EliotModel' );
  const EliotScreenView = require( 'ELIOT/eliot/view/EliotScreenView' );

  class EliotScreen extends Screen {

    constructor() {

      const options = {
        backgroundColorProperty: new Property( 'white' )
      };

      super(
        () => new EliotModel(),
        ( model ) => new EliotScreenView( model ),
        options
      );
    }
  }

  return eliot.register( 'EliotScreen', EliotScreen );
} );