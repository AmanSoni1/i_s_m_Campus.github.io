class Boundary {
    static width = 26.4
    static height = 26.4
    constructor({position}) {
        this.position = position
        this.width = 26.4
        this.height = 26.4
    }

    draw() {
        c.fillStyle = 'rgba(255,67,0,0.0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
class Sprite {
    constructor({position, velocity, image,frames = {max: 1}, sprites }) {     //constructor automatically gets called as class steps in
        this.position = position
        this.image = image
        this.frames = {...frames, val: 0, elapsed: 0}
        this.image.onload = () => {
        this.width = this.image.width / this.frames.max
        this.height = this.image.height
        // console.log(this.width);
        // console.log(this.height);
        }
        this.moving = false
        this.sprites = sprites
    }

    draw() {
        // c.drawImage(this.image, this.position.x, this.position.y)
        c.drawImage(
            this.image,
            this.frames.val* this.width,
            0,
            this.image.width/ this.frames.max,
            this.image.height, //above 4 is for cropping below 4 is for rendering
            this.position.x,
            this.position.y,
            this.image.width/ this.frames.max,
            this.image.height
            )

            if(!this.moving) return
            if(this.frames.max>1) {
                this.frames.elapsed++
            }
            if(this.frames.elapsed %10 ==0){
            if(this.frames.val < this.frames.max-1) this.frames.val++
            else this.frames.val = 0
            }
    
    }
    draw1(){
        c.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.image.width=300,
        this.image.height=300,
        )
        }
   
}
