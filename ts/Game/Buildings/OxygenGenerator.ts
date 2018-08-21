import { Building } from "./Building";

export class OxygenGenerator extends Building
{
    earningRate: number;
    baseCost: 10;

    constructor(game)
    {
        super(game);

        this.cost.metal = 10;
    }

    buy()
    {
        if (this.game.resources.worth(this.cost))
        {
            this.owned += 1;
        }
    }

    update()
    {
        this.game.resources.oxygen += this.owned * this.earningRate;
    }
}