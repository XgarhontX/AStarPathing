class GameObjectBB extends GameObject {
    constructor(posX, posY, width, height, color) {
        super(posX, posY, width, height, color)
        this.BB = new BoundingBox(posX, posY, width, height)
        this.BB.updateSides()
    }

    //child implements
    // update() {
    //     this.updateBB()
    //     this.saveLastBB()
    //     this.handleCollisions()
    //     this.draw()
    // }

    saveLastBB() {
        this.lastBB = this.BB
    }

    updateBB() {
        this.BB = new BoundingBox(this.posX, this.posY, this.width, this.height)
        this.BB.updateSides()
    }

    //child implements
    // handleCollisions() {
    //
    // }

}