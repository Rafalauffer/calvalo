var mouseEvent = "empty";
var lastPositionX,lastPositionY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
carlos="black";
luis=1;

var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
}

canvas.addEventListener("mousedown" , myMouseDown);
function myMouseDown(e)
{
    carlos=document.getElementById("carlos").value;
    luis=document.getElementById("luis").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave" , myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseeave";
}

canvas.addEventListener("mouseup" , myMouseUp);
function myMouseUp(e)
{
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove" , myMouseMove);
function myMouseMove(e)
{
    PositionMouseX= e.clientX - canvas.offsetLeft;
    PositionMouseY= e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=carlos;
        ctx.lineWidth = luis;

        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }
    
    lastPositionX= PositionMouseX;
    lastPositionY= PositionMouseY;
}
function clicks() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

canvas.addEventListener("touchstart", ToquedoCalvalo);
function ToquedoCalvalo(e)
{
    console.log("ToqueDoCalvalo");

    carlos = document.getElementById("carlos").value;
    luis = document.getElementById("luis").value;
    lpoX= e.touches[0].clientX - canvas.offsetLeft;
    lpoY= e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove" , myTouchMove);
function myTouchMove(e)
{
    cpotX= e.touches[0].clientX - canvas.offsetLeft;
    cpotY= e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle=carlos;
        ctx.lineWidth = luis;

        ctx.moveTo(lpoX, lpoY);
        ctx.lineTo(cpotX, cpotY);
        ctx.stroke();
    
    lpoX= cpotX;
    lpoY= cpotY;
}