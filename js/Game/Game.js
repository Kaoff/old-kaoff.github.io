"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Resources_1 = require("./Resources");
var OxygenGenerator_1 = require("./Buildings/OxygenGenerator");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.clickerPower = 1;
        this.resources = new Resources_1.Resources();
        this.buildings = new Array();
        this.buildings.push(new OxygenGenerator_1.OxygenGenerator(this));
        $('#clicker').click(function () {
            if (_this.resources.oxygen >= 1)
                _this.resources.metal += _this.clickerPower;
        });
        setInterval(function () {
            _this.update();
        }, 1000);
    }
    Game.prototype.update = function () {
        this.buildings.forEach(function (building) {
            building.update();
        });
        var oxygenString = (Math.round(this.resources.oxygen * 10) / 10).toString();
        $("#oxygenCounter").html(oxygenString);
        $("#metalCounter").html(this.resources.metal.toString());
    };
    return Game;
}());
exports.Game = Game;
