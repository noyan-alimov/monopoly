import { Asset } from './Asset'
import { Assets } from './types/Assets'

export class Player {
    public name: string
    public currentPosition: number
    public balance: number
    public assets: Assets

    constructor(
        name: string
    ) {
        this.name = name
        this.currentPosition = 0
        this.balance = 2000000

        this.assets = {
            blue: {
                canIncreaseRentPrice: false,
                assets: []
            },
            yellow: {
                canIncreaseRentPrice: false,
                assets: []
            },
            red: {
                canIncreaseRentPrice: false,
                assets: []
            },
            black: {
                canIncreaseRentPrice: false,
                assets: []
            }
        }
    }

    public buyAsset(asset: Asset) {
        if (!asset.color) return
        if (!asset.buyPrice) return

        this.decreaseBalance(asset.buyPrice)

        if (this.assets[asset.color].assets.length === 2) {
            this.assets[asset.color].canIncreaseRentPrice = true
        }
        this.assets[asset.color].assets.push(asset)
        asset.setOwner(this)

        return this.assets[asset.color].canIncreaseRentPrice
    }

    public upgradeAssetsGroup(asset: Asset) {
        if (!asset.color) return

        if (!(this.assets[asset.color].canIncreaseRentPrice)) {
            throw new Error('You can not increase buy price because you do not own all assets with the same color')
        }

        this.assets[asset.color].assets.forEach(a => a.increaseBuyPriceBy3())
    }

    public move() {
        this.currentPosition += Math.floor(Math.random() * 10)
        if (this.currentPosition >= 16) {
            this.balance += 500
            this.currentPosition -= 16
        }
    }

    public decreaseBalance(sum: number) {
        this.balance -= sum
    }

    public increaseBalance(sum: number) {
        this.balance += sum
    }

    public payOwnerRent(asset: Asset) {
        if (!asset.rentPrice) return

        const rentPrice = asset.rentPrice

        this.decreaseBalance(rentPrice)
        asset.owner?.increaseBalance(rentPrice)
    }
}