function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocosstd',modelLoaded);
    document.getElementById("status"),innerHTML="status:deectingobjects";

}
img="";
status="";
objects=[];
function preload(){
img=loadImage('dog_cat.jpg');

}
function draw(){
    image(img,0,0,640,420);
if (status!=""){
    for(i=0;1<objects.length;i++){
        document.getElementById("status").innerHTML="status: object ditected";
        
    fill("#FF5733");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x+25,objects[i].y+25);
    noFill();
    stroke("#FF5733");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}



}
function modelLoaded(){
    console.log("modalLoaded😀😁😁😁😁😁😀");
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
