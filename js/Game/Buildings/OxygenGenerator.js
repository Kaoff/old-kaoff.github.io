class OxygenGenerator extends Building
{
    constructor(game)
    {
        super(game);

        this.earningRate = 0.1;
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