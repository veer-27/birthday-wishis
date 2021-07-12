canvas = new fabric.Canvas('myCanvas');
ctx=canvas.getContext("2d");
var audio= document.getElementById("myAudio");
 image_object = "";
function new_image()
{
fabric.Image.fromURL(get_image, function (Img) {
image_object = Img;
image_object.scaleToWidth(700);
image_object.scaleToHeight(510);
image_object.set({
top:0,
left:0,
});
canvas.add(image_object);
})	
}
function playSound() {
X.play();
}
