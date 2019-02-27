// Copyright 2019, University of Colorado Boulder
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "JOIST/Sim", "JOIST/SimLauncher", "ELIOT/eliot/EliotScreen", "string!ELIOT/eliot.title"], function (require, exports, Sim_1, SimLauncher_1, EliotScreen_1, eliot_title_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Sim_1 = __importDefault(Sim_1);
    SimLauncher_1 = __importDefault(SimLauncher_1);
    EliotScreen_1 = __importDefault(EliotScreen_1);
    eliot_title_1 = __importDefault(eliot_title_1);
    var simOptions = {
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
    SimLauncher_1.default.launch(function () {
        var sim = new Sim_1.default(eliot_title_1.default, [new EliotScreen_1.default()], simOptions);
        sim.start();
    });
});
