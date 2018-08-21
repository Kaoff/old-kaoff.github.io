class Resources
{
    constructor()
    {
        this.oxygen = 0;
        this.metal = 0;
    }

    worth(than)
    {
        if (this.oxygen < than.oxygen)
            return false;

        if (this.metal < than.metal)
            return false;

        return true;
    }
}