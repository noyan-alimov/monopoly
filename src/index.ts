import { Game } from './game/Game'
import { Player } from './game/Player'
import { assets } from './game/initializedAssets'
import pr from 'prompt-sync'

const prompt = pr({ sigint: true })

const player1Name = prompt('Enter name for Player 1: ')
const player2Name = prompt('Enter name for Player 2: ')

const player1 = new Player(player1Name)
const player2 = new Player(player2Name)

const game = new Game([player1, player2], assets, prompt)
game.start()