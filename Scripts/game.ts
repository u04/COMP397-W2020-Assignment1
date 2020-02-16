// IIFE
(function(){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let hiLabel: createjs.Text;
    let meButton: object.Button;
    let resetButton: object.Button;
    let background: createjs.Bitmap;

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
        background = new createjs.Bitmap('./Assets/images/slot-machine_small.jpg');
        stage.addChild(background);

        hiLabel = new createjs.Text("hi", "20px Consolas", "#000000");
        hiLabel.x = 320;
        hiLabel.y = 240;
        stage.addChild(hiLabel);

        meButton = new object.Button('./Assets/images/me.png', 450, 200, true);
        stage.addChild(meButton);
        meButton.on("click", function(){
            
            hiLabel.text = "touched";
        });

        resetButton = new object.Button('./Assets/images/reset.png', 400, 150, true);
        stage.addChild(resetButton);
        resetButton.on("click", function(){
            hiLabel.text = "hey";
        })
        
    }
    window.addEventListener("load", Start);
})();