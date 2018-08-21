"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Building_1 = require("./Building");
var OxygenGenerator = /** @class */ (function (_super) {
    __extends(OxygenGenerator, _super);
    function OxygenGenerator(game) {
        var _this = _super.call(this, game) || this;
        _this.cost.metal = 10;
        return _this;
    }
    OxygenGenerator.prototype.buy = function () {
        if (this.game.resources.worth(this.cost)) {
            this.owned += 1;
        }
    };
    OxygenGenerator.prototype.update = function () {
        this.game.resources.oxygen += this.owned * this.earningRate;
    };
    return OxygenGenerator;
}(Building_1.Building));
exports.OxygenGenerator = OxygenGenerator;
