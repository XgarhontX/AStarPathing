class GameObject {
    constructor(posX, posY, width, height, color) {
        Object.assign(this, {posX, posY, width, height, color})
        // if (centered) {
        //     this.posX = this.setCenteredPosX(posX)
        //     this.posY = this.setCenteredPosY(posY)
        // }
        this.removeFromWorld = false
        this.animator = new Animator(width, height)
    }

    update() {
        // this.draw();
    }

    draw() {
        // this.animator.drawFrame(this.posX, this.posY, this.color);
    }

    getCenteredPosX() {
        return this.posX + (this.width/2)
    }
    getCenteredPosY() {
        return this.posY + (this.height/2)
    }
    getRightPosX() {
        return this.posX + this.width
    }
    getBottomPosY() {
        return this.posY + this.height
    }

    setCenteredPosX(centerPosX) {
        this.posX = centerPosX - (this.width/2)
    }
    setCenteredPosY(centerPosY) {
        this.posY = centerPosY - (this.height/2)
    }
    setRightPosX(rightPosY) {
        this.posX = rightPosY - this.width
    }
    setBottomPosY(bottomPosY) {
        this.posY = bottomPosY - this.height
    }
}