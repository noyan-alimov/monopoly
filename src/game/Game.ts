import { Asset } from './Asset'
import { Player } from './Player'
import pr from 'prompt-sync'

export class Game {
    public players: Player[]
    public assets: Asset[]
    private didGameEnd: boolean
    private prompt: pr.Prompt

    constructor(players: Player[], assets: Asset[], prompt: pr.Prompt) {
        this.players = players
        this.assets = assets
        this.didGameEnd = false
        this.prompt = prompt
    }

    private findAssetOnPosition(position: number) {
        return this.assets.find(asset => asset.position === position)
    }

    public async start() {
        while (!this.didGameEnd) {
            this.players.forEach(player => {
                if (player.balance <= 0) {
                    this.didGameEnd = true
                    console.log(`Game finished, player ${player.name} lost`)
                    return
                }

                player.move()

                const asset = this.findAssetOnPosition(player.currentPosition)
                if (!asset) {
                    console.log('Something got wrong, asset not found')
                    return
                }

                // means empty place
                if (!asset.name) {
                    console.log(`${player.name} got into empty place`)
                    console.log(`${player.name} has left balance of ${player.balance}`)
                    return
                }

                if (asset.owner) {
                    if (player.name === asset.owner?.name) {
                        console.log(`${player.name} got into his own asset ${asset.name}`)
                        console.log(`${player.name} has left balance of ${player.balance}`)
                        return
                    }

                    console.log(`${player.name} pays ${asset.owner.name} rent of ${asset.rentPrice}`)
                    player.payOwnerRent(asset)
                    console.log(`${player.name} has left balance of ${player.balance}`)
                    return
                }

                const answer = this.prompt(`${player.name}, do you wish to buy asset ${asset.name} for ${asset.buyPrice}? (yes or no)`)
                if (answer === 'no') {
                    return
                } else if (answer === 'yes') {
                    if (!asset.buyPrice) return

                    if (player.balance < asset.buyPrice) {
                        console.log('You can not buy this asset, balance too low')
                        console.log(`${player.name} has left balance of ${player.balance}`)
                        return
                    }

                    const canIncreaseRentPrice = player.buyAsset(asset)
                    if (canIncreaseRentPrice) {
                        console.log(`${asset.color} group increased rent price by 3`)
                        player.upgradeAssetsGroup(asset) 
                    }
                } else {
                    console.log('Should be "yes" or "no" next time')
                    console.log('Your answer is considered as no')
                }

                console.log(`${player.name} has left balance of ${player.balance}`)
            })
        }
    }
}