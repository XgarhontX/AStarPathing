class Player {
    constructor() {
        this.agent = new AStarAgent(50,50)
        GAME_ENGINE.addEntity(this.agent)

        //Maze
        GAME_ENGINE.addEntity(new RectangleObstacle(0, 0, 1900, 20))
        GAME_ENGINE.addEntity(new RectangleObstacle(0, 980, 1900, 20))
        GAME_ENGINE.addEntity(new RectangleObstacle(0, 0, 20, 1000))
        GAME_ENGINE.addEntity(new RectangleObstacle(1880, 0, 20, 1000))

        this.isHolding = false
    }

    update() {
        //place & remove blocks
        if (GAME_ENGINE.left_click && !this.isHolding) {
            //remove
            let BB = new BoundingBox(GAME_ENGINE.mouse.x, GAME_ENGINE.mouse.y, 1, 1, true)
            let wasDelete = false
            GAME_ENGINE.entities.forEach((entity) => {
                if (entity instanceof RectangleObstacle) {
                    if (BB.collide(entity.BB)) {
                        entity.removeFromWorld = true
                        console.log("removed")
                        wasDelete = true
                    }
                }
            })
            //else place
            if (!wasDelete) {
                GAME_ENGINE.addEntity(new RectangleObstacle(GAME_ENGINE.mouse.x - 50, GAME_ENGINE.mouse.y - 50, 100, 100))
                console.log("placed")
            }
        }
        //agent move
        if (GAME_ENGINE.right_click) {
            console.log("goTo:", GAME_ENGINE.mouse.x, GAME_ENGINE.mouse.y)
            GAME_ENGINE.ctx.clearRect(0, 0, GAME_ENGINE.ctx.canvas.width, GAME_ENGINE.ctx.canvas.height);
            this.agent.goTo(GAME_ENGINE.mouse.x, GAME_ENGINE.mouse.y)
        }
        //prevent spam
        this.isHolding = true
        if (!GAME_ENGINE.left_click && !GAME_ENGINE.right_click) {
            GAME_ENGINE.ctx.clearRect(0, 0, GAME_ENGINE.ctx.canvas.width, GAME_ENGINE.ctx.canvas.height);
            this.isHolding = false
        }
    }


    draw() {

    }

}