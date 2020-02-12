// IIFE
(function(){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let hiLabel: createjs.Text;

    function Start():void
    {
        console.log("game started");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();

    }
    function Update():void
    {
        stage.update();
    }
    function Main():void
    {
        hiLabel = new createjs.Text("hi", "20px Consolas", "#000000");
        stage.addChild(hiLabel);
    }
    window.addEventListener("load", Start);
})();