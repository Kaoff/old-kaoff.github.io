class Game
{
    constructor()
    {
        this.clickerPower = 1;
        this.resources = new Resources();
        this.buildings = new Map();

        this.buildings.set("OxygenGenerator", new OxygenGenerator(this));

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