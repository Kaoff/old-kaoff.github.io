export class Resources
{
    oxygen: number;
    metal: number;

    constructor()
    {
        this.oxygen = 0;
        this.metal = 0;
    }

    worth(than:Resources)
    {
        if (this.oxygen < than.oxygen)
            return false;

        if (this.metal < than.metal)
            return false;

        return true;
    }
}