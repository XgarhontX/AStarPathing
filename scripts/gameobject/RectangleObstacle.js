class RectangleObstacle extends GameObjectBB {
    constructor(posX, posY, width, height, color="black", centered=false) {
        super(posX, posY, width, height, color, centered)
    }

    draw() {
        this.animator.drawFrame(this.posX,this.posY, this.color)
        this.BB.drawBoundingBox()
    }
}