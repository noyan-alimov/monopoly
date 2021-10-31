import { Player } from './Player'
import { Color } from './types/Color'

export class Asset {
    public position: number
    public name?: string
    public buyPrice?: number
    public rentPrice?: number
    public color?: Color
    public owner?: Player | null

    constructor(
        position: number,
        name?: string,
        buyPrice?: number,
        rentPrice?: number,
        color?: Color
    ) {
        this.position = position
        this.name = name
        this.buyPrice = buyPrice
        this.rentPrice = rentPrice
        this.color = color
        this.owner = null
    }

    public setOwner(owner: Player) {
        this.owner = owner
    }

    public increaseBuyPriceBy3() {
        if (!this.buyPrice) return

        this.buyPrice = this.buyPrice * 3
    }
}