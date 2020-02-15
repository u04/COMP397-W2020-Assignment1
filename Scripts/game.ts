// IIFE
(function(){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let hiLabel: createjs.Text;
    let meButton: createjs.Bitmap;

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
        hiLabel.x = 320;
        hiLabel.y = 240;
        stage.addChild(hiLabel);

        meButton = new createjs.Bitmap('./Assets/images/me.png');
        //meButton.regX = meButton.getBounds().width * 0.5;
        //meButton.regY = meButton.getBounds().height * 0.5;
        meButton.x = 450;
        meButton.y = 200;
        stage.addChild(meButton);
        
        meButton.on("click", function(){
            //hiLabel.text = "touched";
            //console.log("button pushed");
        });
    }
    window.addEventListener("load", Start);
})();