import * as $ from "jquery";
import { Resources } from "./Resources";
import { Building } from "./Buildings/Building";
import { OxygenGenerator } from "./Buildings/OxygenGenerator";

export class Game
{
    resources: Resources;
    buildings: Array<Building>;
    clickerPower: number;

    constructor()
    {
        this.clickerPower = 1;
        this.resources = new Resources();
        this.buildings = new Array<Building>();

        this.buildings.push(new OxygenGenerator(this));

        $('#clicker').click(() => {
            if (this.resources.oxygen >= 1)
                this.resources.metal += this.clickerPower;
        });

        setInterval(() => {
            this.update();
        }, 1000);
    }

    update()
    {
        this.buildings.forEach((building) => {
            building.update();
        });

        let oxygenString = (Math.round(this.resources.oxygen * 10) / 10).toString();

        $("#oxygenCounter").html(oxygenString);
        $("#metalCounter").html(this.resources.metal.toString());
    }
}