import { Game } from "../Game";
import { Resources } from "../Resources";

interface BuildingInterface
{
    baseCost: number;
    cost: Resources;
    button: HTMLElement;
    game: Game;
    owned: number;
}

export abstract class Building implements BuildingInterface
{
    baseCost: number;
    cost: Resources;
    button: HTMLElement;
    game: Game;
    owned: number;

    constructor(game)
    {
        this.game = game;
    }

    abstract update();
}