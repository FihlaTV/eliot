// Copyright 2019, University of Colorado Boulder
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "AXON/Property", "JOIST/Screen", "ELIOT/eliot", "ELIOT/eliot/model/EliotModel", "ELIOT/eliot/view/EliotScreenView"], function (require, exports, Property_1, Screen_1, eliot_1, EliotModel_1, EliotScreenView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Property_1 = __importDefault(Property_1);
    Screen_1 = __importDefault(Screen_1);
    eliot_1 = __importDefault(eliot_1);
    EliotScreenView_1 = __importDefault(EliotScreenView_1);
    var EliotScreen = /** @class */ (function (_super) {
        __extends(EliotScreen, _super);
        function EliotScreen() {
            var _this = this;
            var options = {
                backgroundColorProperty: new Property_1.default('white')
            };
            _this = _super.call(this, function () { return new EliotModel_1.EliotModel(); }, function (model) { return new EliotScreenView_1.default(model); }, options) || this;
            return _this;
        }
        return EliotScreen;
    }(Screen_1.default));
    eliot_1.default.register('EliotScreen', EliotScreen);
    exports.default = EliotScreen;
});
