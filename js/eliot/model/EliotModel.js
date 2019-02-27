// Copyright 2019, University of Colorado Boulder

/**
 * @author Michael Barlow (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const eliot = require( 'ELIOT/eliot' );

  /**
   * @constructor
   */
  class EliotModel  {

    constructor() {
      //TODO
    }

    // @public resets the model
    reset() {
      //TODO Reset things here.
    }

    // @public
    step( dt ) {
      //TODO Handle model animation here.
    }
  }

  return eliot.register( 'EliotModel', EliotModel );
} );