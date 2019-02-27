// Copyright 2019, University of Colorado Boulder

/**
 * @author Michael Barlow (PhET Interactive Simulations)
 */

// modules
import Property from 'AXON/Property';
import Screen from 'JOIST/Screen';
import eliot from 'ELIOT/eliot';
import { EliotModel } from 'ELIOT/eliot/model/EliotModel';
import EliotScreenView from 'ELIOT/eliot/view/EliotScreenView';

class EliotScreen extends Screen {

  constructor() {

    const options = {
      backgroundColorProperty: new Property( 'white' )
    };

    super(
      () => new EliotModel(),
      ( model: EliotModel ) => new EliotScreenView( model ),
      options
    );
  }
}

eliot.register( 'EliotScreen', EliotScreen );

export default EliotScreen;