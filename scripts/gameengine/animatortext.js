class AnimatorText extends Animator {
    constructor() {
        super();
    }

    drawFrame(posX, posY, text, color='Gray', font='bold 128px Arial') {
        GAME_ENGINE.ctx.save()
        GAME_ENGINE.ctx.font = font
        GAME_ENGINE.ctx.fillStyle = color
        GAME_ENGINE.ctx.textAlign = "center"
        GAME_ENGINE.ctx.fillText(text, posX, posY)
        GAME_ENGINE.ctx.restore()
    }
}