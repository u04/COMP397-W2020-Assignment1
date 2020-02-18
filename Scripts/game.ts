// IIFE
(function(){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let statusLabel: createjs.Text;
    let spinButton: object.Button;
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

        statusLabel = new createjs.Text("hi", "20px Consolas", "#000000");
        statusLabel.x = 320;
        statusLabel.y = 240;
        stage.addChild(statusLabel);

        spinButton = new object.Button('./Assets/images/spin.png', 550, 300, true);
        stage.addChild(spinButton);
        spinButton.on("click", function(){
            
            statusLabel.text = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
        });

        resetButton = new object.Button('./Assets/images/reset.png', 400, 150, true);
        stage.addChild(resetButton);
        resetButton.on("click", function(){
            statusLabel.text = "hey";
            
            
        })
        
    }
    window.addEventListener("load", Start);
})();