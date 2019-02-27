// Copyright 2019, University of Colorado Boulder
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "ELIOT/eliot"], function (require, exports, eliot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    eliot_1 = __importDefault(eliot_1);
    /**
     * @constructor
     */
    var EliotModel = /** @class */ (function () {
        function EliotModel() {
            //TODO
        }
        // @public resets the model
        EliotModel.prototype.reset = function () {
            //TODO Reset things here.
        };
        // @public
        EliotModel.prototype.step = function (dt) {
            //TODO Handle model animation here.
        };
        return EliotModel;
    }());
    exports.EliotModel = EliotModel;
    eliot_1.default.register('EliotModel', EliotModel);
});
