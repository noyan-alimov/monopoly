import { Asset } from './Asset'

// empty places
const startPlace = new Asset(0)
const topRightPlace = new Asset(4)
const bottomRightPlace = new Asset(8)
const bottomLeftPlace = new Asset(12)

const blue1Asset = new Asset(1, 'blue1', 100000, 20000, 'blue')
const blue2Asset = new Asset(2, 'blue2', 100000, 20000, 'blue')
const blue3Asset = new Asset(3, 'blue3', 120000, 30000, 'blue')

const yellow1Asset = new Asset(5, 'yellow1', 200000, 20000, 'yellow')
const yellow2Asset = new Asset(6, 'yellow2', 200000, 20000, 'yellow')
const yellow3Asset = new Asset(7, 'yellow3', 250000, 30000, 'yellow')

const red1Asset = new Asset(9, 'red1', 300000, 20000, 'red')
const red2Asset = new Asset(10, 'red2', 300000, 20000, 'red')
const red3Asset = new Asset(11, 'red3', 370000, 30000, 'red')

const black1Asset = new Asset(13, 'black1', 400000, 20000, 'black')
const black2Asset = new Asset(14, 'black2', 400000, 20000, 'black')
const black3Asset = new Asset(15, 'black3', 490000, 30000, 'black')

export const assets = [
    startPlace,
    topRightPlace,
    bottomRightPlace,
    bottomLeftPlace,
    blue1Asset,
    blue2Asset,
    blue3Asset,
    yellow1Asset,
    yellow2Asset,
    yellow3Asset,
    red1Asset,
    red2Asset,
    red3Asset,
    black1Asset,
    black2Asset,
    black3Asset
]