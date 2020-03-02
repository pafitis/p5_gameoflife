let angle = 0;
let w = 30;
let magicangle;
let maxdist;

let giflength = 300;

function setup() {
    var p5canvas = createCanvas(1200, 1200, WEBGL);
    canvas = p5canvas.canvas;
    magicangle = atan(1/sqrt(2));
    maxdist = dist(0, 0, 600, 600);

    // capturer.start();
}

function draw() {
    background(0);
    ortho(-1200, 1200, 1200, -1200, -1200, 1800);
    rotateX(PI);
    rotateY(PI)

    rotateX(PI/4);
    rotateY(magicangle);

    for (let z = 0; z < height; z += w){
        for (let x = 0; x < width; x += w){
            push();
            
            let d = dist(x, z, width/2, height/2);
            let offset = map(d, 0, maxdist, -2, 2);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 2, 10);

            translate(x - width/2, 0, z-height/2);
            normalMaterial();
            torus(w-2, h, w-2);
            
            pop();
        }
    }
    angle += 0.1;
    // if (frameCount < giflength) {
    //     capturer.capture(canvas);
    // } else {
    //     capturer.stop();
    //     capturer.save();
    // }
}