import { Asset } from '../Asset'

export interface Assets {
    blue: {
        canIncreaseRentPrice: boolean
        assets: Asset[]
    }
    yellow: {
        canIncreaseRentPrice: boolean
        assets: Asset[]
    }
    red: {
        canIncreaseRentPrice: boolean
        assets: Asset[]
    }
    black: {
        canIncreaseRentPrice: boolean
        assets: Asset[]
    }
}