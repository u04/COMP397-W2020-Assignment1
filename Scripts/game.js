// IIFE
(function () {
    let canvas = document.getElementById("canvas");
    let stage;
    let hiLabel;
    function Start() {
        console.log("game started");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        hiLabel = new createjs.Text("hi", "20px Consolas", "#000000");
        stage.addChild(hiLabel);
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map