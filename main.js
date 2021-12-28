objects = [];
status = "";
video = "";

function preload()
{
    video = createCapture(VIDEO);
    video.hide();
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}
function draw()
{
    image(video, 0, 0 , 480, 380);
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video = video.size(480, 380);
    video = video.hide(); 
}

function start()
{
    objectDetected = ml5.objectDetected('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Finding objects";
}