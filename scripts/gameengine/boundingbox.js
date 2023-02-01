class BoundingBox {
    constructor(posX, posY, width, height, centered=false) {
        Object.assign(this, { width, height });
        this.posX = centered ? posX + (this.width/2) : posX
        this.posY = centered ? posY + (this.width/2) : posY
        this.updateSides()
    };

    collide(oth) {
        if (this.right > oth.left &&
            this.left < oth.right &&
            this.top < oth.bottom &&
            this.bottom > oth.top) {
            return true;
        }
        return false;
    };

    /**
     * Owner of BB collision must call this before collide()
     */
    updateSides() {
        this.left = this.posX;
        this.top = this.posY;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    }

    drawBoundingBox() {
        GAME_ENGINE.ctx.save();
        GAME_ENGINE.ctx.strokeStyle = 'Red';
        GAME_ENGINE.ctx.strokeRect(
            this.posX,
            this.posY,
            this.width,
            this.height);
        
        // GAME_ENGINE.ctx.fillStyle = "white";
        // GAME_ENGINE.ctx.fillRect(this.x - GAME_ENGINE.camera.x, this.y - GAME_ENGINE.camera.y, this.width, this.height);
        GAME_ENGINE.ctx.restore();
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
}