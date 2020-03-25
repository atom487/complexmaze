namespace SpriteKind {
    export const Weapon = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const Portal = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . c c c c c c . . . . . 
. . . . c c . . . . c c . . . . 
. . . c . . . . . . . . c . . . 
. . c c . . . . . . . . c c . . 
. . c . . . . . . . . . . c . . 
. . c . . c . . . . c . . c . . 
. . c . . c . . . . c . . c . . 
. . c . . . . . . . . . . c . . 
. . . c . . c . . c . . c . . . 
. . . . c . c . . c . c . . . . 
. . . . . c c c c c c . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . c c c . . . 
. . . . . . . . . c c c . . . . 
. . . . . . . . c c c . . . . . 
. . . . c c . c c c . . . . . . 
. . . . c c c c c . . . . . . . 
. . . . . c c c . . . . . . . . 
. . . . c c c c c . . . . . . . 
. . . c c c . c c . . . . . . . 
. . . c c . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
c c c c c c c c c c c c c c c c 
c . . . c c . . . . c c . . . c 
c . . c c . . . . . . c c . . c 
c . c c . . . . . . . . c c . c 
c c c . . . . . . . . . . c c c 
c c . . . . . . . . . . . . c c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c . . . . . . . . . . . . . . c 
c c . . . . . . . . . . . . c c 
c c c . . . . . . . . . . c c c 
c . c c . . . . . . . . c c . c 
c . . c c . . . . . . c c . . c 
c . . . c c . . . . c c . . . c 
c c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
1 1 1 1 f f f f 1 1 1 1 f f f f 
1 1 1 1 f f f f 1 1 1 1 f f f f 
1 1 1 1 f f f f 1 1 1 1 f f f f 
1 1 1 1 f f f f 1 1 1 1 f f f f 
f f f f 1 1 1 1 f f f f 1 1 1 1 
f f f f 1 1 1 1 f f f f 1 1 1 1 
f f f f 1 1 1 1 f f f f 1 1 1 1 
f f f f 1 1 1 1 f f f f 1 1 1 1 
1 1 1 1 f f f f 1 1 1 1 f f f f 
1 1 1 1 f f f f 1 1 1 1 f f f f 
1 1 1 1 f f f f 1 1 1 1 f f f f 
1 1 1 1 f f f f 1 1 1 1 f f f f 
f f f f 1 1 1 1 f f f f 1 1 1 1 
f f f f 1 1 1 1 f f f f 1 1 1 1 
f f f f 1 1 1 1 f f f f 1 1 1 1 
f f f f 1 1 1 1 f f f f 1 1 1 1 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    hascoin = true
    coin.destroy()
    music.magicWand.play()
})
let hascoin = false
let coin: Sprite = null
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . e e . . e e . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tiles.createTilemap(
            hex`0f000f00010303030303030303030103030306061200000000000000000600000006060001030600030306000600010306060006000600000006000000061b0601030f0003030300010306000600060600000000160000060006000600060600060006000600060003030f0006060006000600060000000000000006010306000303030303030303030306061f0600000000000000000000000606000103010303030316030301030606000600060000000000000006000606000600060006000103031e0f000606000000000006000600000000000603030303030303030303030303200f`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . 2 . . . 2 
2 . 2 2 2 . 2 2 2 . 2 . 2 2 2 
2 . 2 . 2 . . . 2 . . . 2 . 2 
2 2 2 . 2 2 2 . 2 2 2 . 2 . 2 
2 . . . . . . . 2 . 2 . 2 . 2 
2 . 2 . 2 . 2 . 2 . 2 2 2 . 2 
2 . 2 . 2 . 2 . . . . . . . 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 . 2 2 2 2 2 
2 . 2 . 2 . . . . . . . 2 . 2 
2 . 2 . 2 . 2 . 2 2 2 . 2 . 2 
2 . . . . . 2 . 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorthWest,sprites.castle.tilePath5,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.chestOpen,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterEast0,myTiles.tile2,sprites.dungeon.doorClosedSouth,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorMixed,myTiles.tile3,sprites.dungeon.floorDark0,sprites.dungeon.floorLight2,myTiles.tile4,sprites.dungeon.floorDarkDiamond,myTiles.tile5,sprites.dungeon.floorDark5],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
coin = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.Item)
tiles.placeOnRandomTile(coin, sprites.dungeon.floorDarkDiamond)
let mySprite3 = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.Portal)
tiles.placeOnRandomTile(mySprite3, myTiles.tile4)
let mySprite4 = sprites.create(img`
. . . . . . . . . . . . . 9 9 9 
. . . . . . . . . . . . 9 9 9 9 
. . . . . . . . . . . 9 9 9 9 9 
. . . . . . . . . . 9 9 9 9 9 . 
. 9 9 . . . . . . 9 9 9 9 9 . . 
. 9 9 9 . . . . 9 9 9 9 9 . . . 
. . 9 9 9 . . 9 9 9 9 9 . . . . 
. . . 9 d d 9 9 9 9 9 . . . . . 
. . . . d d 9 9 9 9 . . . . . . 
. . . . . d d 9 9 . . . . . . . 
. . . . d d d d d . . . . . . . 
. . . d d d . d d 9 . . . . . . 
. . d d d . . . 9 9 9 . . . . . 
. d d d . . . . . 9 9 9 . . . . 
. d d . . . . . . . 9 9 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Weapon)
tiles.placeOnRandomTile(mySprite4, myTiles.tile3)
let mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite5, myTiles.tile2)
hascoin = false
