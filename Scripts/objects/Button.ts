module object {
    export class Button extends createjs.Bitmap {
        constructor(imagePath: string, x: number, y: number, isCentered: boolean) {
            super(imagePath);
            this.image.addEventListener("load", () => {
                if (isCentered) {
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getBounds().height * 0.5;
                }
                this.x = x
                this.y = y
            });
            this.on("mouseover", this.MouseOver);
            this.on("mouseout", this.MouseOut);
        }
        MouseOver(): void {
            this.alpha = 0.7;
            console.log("MouseOver");
        }
        
        MouseOut(): void {
            this.alpha = 1.0;
            console.log("moOut");
        }
    }
}