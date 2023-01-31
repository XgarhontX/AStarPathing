class Animator {
    constructor(width, height) {
        Object.assign(this, {width,height})
    }

    drawFrame(posX, posY, color) {
        GAME_ENGINE.ctx.save()
        GAME_ENGINE.ctx.stroke = color
        GAME_ENGINE.ctx.fillStyle = color
        GAME_ENGINE.ctx.beginPath();
        GAME_ENGINE.ctx.rect(posX, posY, this.width, this.height)
        GAME_ENGINE.ctx.fill()
        GAME_ENGINE.ctx.restore()
    };
}