noseX=0;
noseY=0;
function preload(){
    glasses_pic = loadImage('https://i.postimg.cc/NFRcQCLn/123-removebg-preview.png');
}

function setup(){
canvas=createCanvas(300 , 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("Posenet Model Working Properly.");
}

function gotPoses(results){
    if( results.length > 0 ){
console.log(results);
noseX=results[0].pose.nose.x -95;
noseY=results[0].pose.nose.y -170;
console.log("nose x =" + noseX);
console.log("nose y =" + noseY);
    }
}

function draw(){
image(video ,0 ,0 ,300 ,300);
image(glasses_pic , noseX , noseY , 200 , 200);
}

function take_snapshot(){
    save('myglassespic.png');
}
