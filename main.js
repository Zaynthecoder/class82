var mouseEvent = "empty";
var last_pos_of_x,last_pos_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color="black";
width_of_line=2
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_the_line").value;

    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    current_pos_of_x = e.clientX - canvas.offsetLeft
    current_pos_of_y = e.clientY - canvas.offsetTop

    if (mouseEvent =="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_pos_of_x + "y = " + last_pos_of_y);
        ctx.moveTo(last_pos_of_x, last_pos_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_pos_of_x + "y = "+ current_pos_of_y);
        ctx.lineTo(current_pos_of_x, current_pos_of_y);
        ctx.stroke();


    }

    last_pos_of_x = current_pos_of_x;
    last_pos_of_y = current_pos_of_y;
}

function clearArea() {
ctx.clearRect (0,0,ctx.canvas.width,ctx.canvas.height);
}