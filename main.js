var nx = 0;
var ny = 0;  

function preload(){

  img =  loadImage("https://i.postimg.cc/FK593N7W/istockphoto-1192834521-612x612-removebg-preview.png");

}

function setup(){

canvas = createCanvas(300, 300);
canvas.center();

video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose',gotPoses);

}

function modelLoaded(){

    console.log("Your model has been Loaded :)");
    
    }

function gotPoses(Results){

    if(Results.length > 0){
    
        console.log("nose x position = " + Results[0].pose.nose.x + " nose y position = " + Results[0].pose.nose.y);
        nx = Results[0].pose.nose.x - 10;
        ny = Results[0].pose.nose.y - 10;
        console.log(Results);
    }
}
function draw(){

image(video, 0, 0, 300, 300);

image(img,nx, ny, 25, 25);

}

function take_snapshot(){
    save("ClownNoseFilter.png");
 
}

