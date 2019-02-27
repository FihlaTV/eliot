// Copyright 2019, University of Colorado Boulder

/**
 * @author Michael Barlow (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const eliot = require( 'ELIOT/eliot' );

  class EliotScreenView extends ScreenView {

    /**
     * @param {EliotModel} model
     */
    constructor( model ) {

      super();

      const resetAllButton = new ResetAllButton( {
        listener: () => {
          model.reset();
        },
        right: this.layoutBounds.maxX - 10,
        bottom: this.layoutBounds.maxY - 10
      } );
      this.addChild( resetAllButton );
    }

    // @public
    step( dt ) {
      //TODO Handle view animation here.
    }
  }

  return eliot.register( 'EliotScreenView', EliotScreenView );
} );