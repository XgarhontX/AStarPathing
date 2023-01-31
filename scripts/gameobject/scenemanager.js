class SceneManager {
    constructor(levelName) {
        this.score = 0
        this.loadLevel(levelName)
        this.bgm = null
    }

    loadLevel(levelName) {
        this.clearWorld()
        switch (levelName) {
            case "title":
            default:
                break;
        }
    }

    clearWorld() {
        GAME_ENGINE.entities.forEach((entity) => {
            entity.removeFromWorld = true
        })
    }
}

class Camera {
    constructor() {
        this.posX = 0
        this.posY = 0
        this.shake_current = 0
        this.shake_intensity = 0
    }

    startShake(length, intensity) {
        this.shake_current = length
        this.shake_max = length
        this.shake_intensity = intensity
    }

    update() {
        if (this.shake_current > 0) {
            this.posX = ((Math.random() * 2) - 1) * this.shake_intensity * (this.shake_current/this.shake_max)
            this.posY = ((Math.random() * 2) - 1) * this.shake_intensity * (this.shake_current/this.shake_max)
            this.shake_current -= GAME_ENGINE.clockTick
        } else {
            this.posX = 0
            this.posY = 0
        }
    }

    draw() {

    }
}

