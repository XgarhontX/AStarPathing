const GAME_ENGINE = new GameEngine();
const ASSET_MANAGER = new AssetManager();
const SCENE_MANAGER = new SceneManager("")
const FRAME_WIDTH = 1900
const FRAME_HEIGHT = 1000

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	GAME_ENGINE.init(ctx);

	//Scene

	GAME_ENGINE.start();
});
