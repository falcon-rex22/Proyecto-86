var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image(){
fabric.Image.fromURL("Birthdayimage.jpg", function(Img){
    block_image_object = Img;

    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
    center:500,
    center:300
    })
    canvas.add(block_image_object);
})	
	
}

function playSound(){;
	x.play();
}
