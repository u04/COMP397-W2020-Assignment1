var object;
(function (object) {
    class Button extends createjs.Bitmap {
        constructor(imagePath, x, y, isCentered) {
            super(imagePath);
            this.image.addEventListener("load", () => {
                if (isCentered) {
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getBounds().height * 0.5;
                }
                this.x = x;
                this.y = y;
            });
            this.on("mouseover", this.MouseOver);
            this.on("mouseout", this.MouseOut);
        }
        MouseOver() {
            this.alpha = 0.7;
            console.log("MouseOver");
        }
        MouseOut() {
            this.alpha = 1.0;
            console.log("moOut");
        }
    }
    object.Button = Button;
})(object || (object = {}));
//# sourceMappingURL=Button.js.map