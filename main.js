function preLoad(){

}

function setup(){
    canvas = createCanvas(650, 440);
    canvas.position(372, 285);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
image(video, 0, 0, 650, 440);
tint(tint_color);
}

function take_snapshot(){
    save('filtered_image.jpeg');
}

function filter_tint(){
    tint_color = document.getElementById("colorIsColor").value;
}