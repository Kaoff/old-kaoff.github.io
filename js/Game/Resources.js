"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resources = /** @class */ (function () {
    function Resources() {
        this.oxygen = 0;
        this.metal = 0;
    }
    Resources.prototype.worth = function (than) {
        if (this.oxygen < than.oxygen)
            return false;
        if (this.metal < than.metal)
            return false;
        return true;
    };
    return Resources;
}());
exports.Resources = Resources;
