//let myself_image;
let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose,skeleton ;

function setup()
{
    createCanvas(800, 400);
   // myself_image = loadImage('images/dog.jpg');
  // myself_image.hide
   capture = createCapture(VIDEO);
   capture.hide();

   posenet = ml5.poseNet(capture, modelLoaded);
   posenet.on('pose', receivePoses)

}

function receivePoses(poses){
    console.log(poses)

    if (poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
        // noseX = singlePose.pose.nose.x;
        // noseY = singlePose.pose.nose.y;

        // reyeX = singlePose.pose.rightEye.x;
        // reyeY = singlePose.pose.rightEye.y;
        
        // leyeX = singlePose.pose.leftEye.x;
        // leyeY = singlePose.pose.leftEye.y;
    }
}

// for taking random colors
// function getRandomArbitrary(min, max)
// {
//     return Math.random() * (max-min) + min;
// }

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
    //background(200);
 
//  just for practice

    // 1.point
    //point(400,400);
    // 2.line
    // line(200,200,500,500)
    // 3.triangle
    // triangle(100,200,300,400,150,450)
    // 4.rectangle
    // rect(100,100,100,100)
    // 5.circle
    // ellipse(150,50,100,100)

    // stroke and colors
    // fill(0,0,0)
    // stroke(255,0,255)//RGB
    // strokeWeight(5);
    // ellipse(100,200,100,100)
    // stroke(0,0,255)//RGB
    // ellipse(250,200,100,100)
    // stroke(255,255,0)//RGB
    // ellipse(400,200,100,100)
    // stroke(255,0,0)//RGB
    // ellipse(550,200,100,100)
    // stroke(0,255,0)//RGB 
    // ellipse(700,200,100,100)

    //pratice for circle
    // r = getRandomArbitrary(0,255);
    // g = getRandomArbitrary(0,255);
    // b = getRandomArbitrary(0,255);
    // fill(r,g,b);
    // ellipse(mouseX, mouseY, 50,50);

    //load image and video(webcam)
    //image(myself_image, mouseX,mouseY,100,100);
    image(capture,0,0);
    fill(255,255,0);
    // ellipse(noseX, noseY, 30, 30);
    // ellipse(reyeX, reyeY, 30, 30);
    // ellipse(leyeX, leyeY, 30, 30);

    if (singlePose) {
        for(let i = 0; i<singlePose.keypoints.length;i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 10);
        }

        stroke(0,255,0);
        for(let j = 0; j<singlePose.keypoints.length;j++) {
        line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
            
        }
        
    }


}