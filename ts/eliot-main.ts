// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Michael Barlow (PhET Interactive Simulations)
 */

// modules
import Sim from 'JOIST/Sim';
import SimLauncher from 'JOIST/SimLauncher';
import EliotScreen from 'ELIOT/eliot/EliotScreen';

// strings
import eliotTitleString from 'string!ELIOT/eliot.title';

const simOptions = {
  credits: {
    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
    leadDesign: '',
    softwareDevelopment: '',
    team: '',
    qualityAssurance: '',
    graphicArts: '',
    soundDesign: '',
    thanks: ''
  }
};

// launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
SimLauncher.launch( () => {
  const sim = new Sim( eliotTitleString, [ new EliotScreen() ], simOptions );
  sim.start();
} );