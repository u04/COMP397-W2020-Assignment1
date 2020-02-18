// IIFE
(function () {
    let canvas = document.getElementById("canvas");
    let stage;
    
   // let statusLabel;
   // let jackpotLable;
    //let betLable;
    
    let spinButton;
    let resetButton;
    let background;
    let bananna1;
    let grape1;
    let orange1;
    let cherry1;
    let bar1;
    let bell1;
    let seven1;
    let blank1;

    let bananna2;
    let grape2;
    let orange2;
    let cherry2;
    let bar2;
    let bell2;
    let seven2;
    let blank2;

    let bananna3;
    let grape3;
    let orange3;
    let cherry3;
    let bar3;
    let bell3;
    let seven3;
    let blank3;
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
        background = new createjs.Bitmap('./Assets/images/slot-machine_small.jpg');
        stage.addChild(background);
        
        //statusLabel = new createjs.Text("hi", "20px Consolas", "#000000");
        //statusLabel.x = 250;
        //statusLabel.y = 185;
        //jackpotLable = new createjs.Text("jack", "20px Consolas", "#000000");
        //jackpotLable.x = 250;
        //jackpotLable.y = 160;
        //betLable = new createjs.text("b", "20px Consolas", "#000000");
        //betLable.x = 250;
        //betLable.y = 135;
        
        //stage.addChild(statusLabel);
        //stage.addChild(jackpotLable);
        //stage.addChild(betLable);

        bananna1 = new createjs.Bitmap('./Assets/images/banana_small.jpg');
        bananna1.x = 100;
        bananna1.y = 300;
        bananna2 = new createjs.Bitmap('./Assets/images/banana_small.jpg');
        bananna2.x = 230;
        bananna2.y = 300;
        bananna3 = new createjs.Bitmap('./Assets/images/banana_small.jpg');
        bananna3.x = 350;
        bananna3.y = 300;
        grape1 = new createjs.Bitmap('./Assets/images/grapes_small.png');
        grape1.x = 100;
        grape1.y = 300;
        grape2 = new createjs.Bitmap('./Assets/images/grapes_small.png');
        grape2.x = 230;
        grape2.y = 300;
        grape3 = new createjs.Bitmap('./Assets/images/grapes_small.png');
        grape3.x = 350;
        grape3.y = 300;
        orange1 = new createjs.Bitmap('./Assets/images/orange_small.png');
        orange1.x = 100;
        orange1.y = 300;
        orange2 = new createjs.Bitmap('./Assets/images/orange_small.png');
        orange2.x = 230;
        orange2.y = 300;
        orange3 = new createjs.Bitmap('./Assets/images/orange_small.png');
        orange3.x = 350;
        orange3.y = 300;
        cherry1 = new createjs.Bitmap('./Assets/images/cherry_small.jpg');
        cherry1.x = 100;
        cherry1.y = 300;
        cherry2 = new createjs.Bitmap('./Assets/images/cherry_small.jpg');
        cherry2.x = 230;
        cherry2.y = 300;
        cherry3 = new createjs.Bitmap('./Assets/images/cherry_small.jpg');
        cherry3.x = 350;
        cherry3.y = 300;
        bar1 = new createjs.Bitmap('./Assets/images/bar_small.jpg');
        bar1.x = 100;
        bar1.y = 300;
        bar2 = new createjs.Bitmap('./Assets/images/bar_small.jpg');
        bar2.x = 230;
        bar2.y = 300;
        bar3 = new createjs.Bitmap('./Assets/images/bar_small.jpg');
        bar3.x = 350;
        bar3.y = 300;
        bell1 = new createjs.Bitmap('./Assets/images/bell_small.jpg');
        bell1.x = 100;
        bell1.y = 300;
        bell2 = new createjs.Bitmap('./Assets/images/bell_small.jpg');
        bell2.x = 230;
        bell2.y = 300;
        bell3 = new createjs.Bitmap('./Assets/images/bell_small.jpg');
        bell3.x = 350;
        bell3.y = 300;
        seven1 = new createjs.Bitmap('./Assets/images/seven_small.jpg');
        seven1.x = 100;
        seven1.y = 300;
        seven2 = new createjs.Bitmap('./Assets/images/seven_small.jpg');
        seven2.x = 230;
        seven2.y = 300;
        seven3 = new createjs.Bitmap('./Assets/images/seven_small.jpg');
        seven3.x = 350;
        seven3.y = 300;
        blank1 = new createjs.Bitmap('./Assets/images/blank.jpg');
        blank1.x = 100;
        blank1.y = 300;
        blank2 = new createjs.Bitmap('./Assets/images/blank.jpg');
        blank2.x = 230;
        blank2.y = 300;
        blank3 = new createjs.Bitmap('./Assets/images/blank.jpg');
        blank3.x = 350;
        blank3.y = 300;
        spinButton = new object.Button('./Assets/images/spin.png', 550, 300, true);
        
        stage.addChild(spinButton);
        spinButton.on("click", function () {
            spin();
            stage.addChild(bananna3);
            if (spinResult[0] == "Banana") {
                
                stage.addChild(bananna1);
            }
            else if (spinResult[0] == "Grapes"){
                
                stage.addChild(grape1);
            }
            else if (spinResult[0] == "Orange")
            {
               
                stage.addChild(orange1);
            }
            else if (spinResult[0] == "Cherry")
            {
                
                stage.addChild(cherry1);
            }
            else if (spinResult[0] == "Bar")
            {
                
                stage.addChild(bar1);
            }
            else if (spinResult[0] == "Bell")
            {
                
                stage.addChild(bell1);
            }
            else if (spinResult[0] == "Seven")
            {
                
                stage.addChild(seven1);
            }
            else if (spinResult[0] == "blank")
            {
                
                stage.addChild(blank1);
            }

       

            if (spinResult[1] == "Banana") {
                
                stage.addChild(bananna2);
            }
            else if (spinResult[1] == "Grapes"){
                
                stage.addChild(grape2);
            }
            else if (spinResult[1] == "Orange")
            {
                
                stage.addChild(orange2);
            }
            else if (spinResult[1] == "Cherry")
            {
               
                stage.addChild(cherry2);
            }
            else if (spinResult[1] == "Bar")
            {
                
                stage.addChild(bar2);
            }
            else if (spinResult[1] == "Bell")
            {
                
                stage.addChild(bell2);
            }
            else if (spinResult[1] == "Seven")
            {
                
                stage.addChild(seven2);
            }
            else if (spinResult[1] == "blank")
            {
                
                stage.addChild(blank2);
            }


            if (spinResult[2] == "Banana") {
                
                stage.addChild(bananna3);
            }
            else if (spinResult[2] == "Grapes"){
                
                stage.addChild(grape3);
            }
            else if (spinResult[2] == "Orange")
            {
                
                stage.addChild(orange3);
            }
            else if (spinResult[2] == "Cherry")
            {
               
                stage.addChild(cherry3);
            }
            else if (spinResult[2] == "Bar")
            {
                
                stage.addChild(bar3);
            }
            else if (spinResult[2] == "Bell")
            {
                
                stage.addChild(bell3);
            }
            else if (spinResult[2] == "Seven")
            {
                
                stage.addChild(seven3);
            }
            else if (spinResult[2] == "blank")
            {
                
                stage.addChild(blank3);
            }

            //statusLabel.text = "player money: $" + playerMoney;
            //jackpotLable.text = "jackpot: $" + jackpot;
            //betLable.text = "bet: $" + playerBet;
        });
        resetButton = new object.Button('./Assets/images/reset.png', 400, 550, true);
        stage.addChild(resetButton);
        resetButton.on("click", function () {
            statusLabel.text = "hey";
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=game.js.map