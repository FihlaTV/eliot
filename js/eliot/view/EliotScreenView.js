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
define(["require", "exports", "SCENERY_PHET/buttons/ResetAllButton", "JOIST/ScreenView", "ELIOT/eliot"], function (require, exports, ResetAllButton_1, ScreenView_1, eliot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ResetAllButton_1 = __importDefault(ResetAllButton_1);
    ScreenView_1 = __importDefault(ScreenView_1);
    eliot_1 = __importDefault(eliot_1);
    var EliotScreenView = /** @class */ (function (_super) {
        __extends(EliotScreenView, _super);
        /**
         * @param {EliotModel} model
         */
        function EliotScreenView(model) {
            var _this = _super.call(this) || this;
            var resetAllButton = new ResetAllButton_1.default({
                listener: function () {
                    model.reset();
                },
                right: _this.layoutBounds.maxX - 10,
                bottom: _this.layoutBounds.maxY - 10
            });
            _this.addChild(resetAllButton);
            return _this;
        }
        // @public
        EliotScreenView.prototype.step = function (dt) {
            //TODO Handle view animation here.
        };
        return EliotScreenView;
    }(ScreenView_1.default));
    eliot_1.default.register('EliotScreenView', EliotScreenView);
    exports.default = EliotScreenView;
});
