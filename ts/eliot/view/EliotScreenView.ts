

// Copyright 2019, University of Colorado Boulder

/**
 * @author Michael Barlow (PhET Interactive Simulations)
 */

import ResetAllButton from 'SCENERY_PHET/buttons/ResetAllButton';
import ScreenView from 'JOIST/ScreenView';
import eliot from 'ELIOT/eliot';
import EliotModel from "ELIOT/eliot/model/EliotModel";

class EliotScreenView extends ScreenView {

  /**
   * @param {EliotModel} model
   */
  constructor( model: EliotModel ) {

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
  step( dt: Number ) {
    //TODO Handle view animation here.
  }
}

eliot.register( 'EliotScreenView', EliotScreenView );

export default EliotScreenView;