function onresize() {
    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");
    var ResizerY = document.getElementById("resizerY");
    ResizerY.style.top = element3.offsetTop - 1 + "px";
    var topElements = document.getElementById("topElements");
    topElements.style.height = ResizerY.offsetTop + "px";
    var height = topElements.clientHeight;
    if (height < 0)
        height = 0;
    height += 'px';
    element1.style.height = height;
    element2.style.height = height;
}
function resizeX(x) {
    var element2 = document.getElementById("element2");
    element2.style.width =
        element2.parentElement.clientWidth
        + document.getElementById('rezizeArea').offsetLeft
        - x
        + 'px';
}
function resizeY(y) {
    var element3 = document.getElementById("element3");
    var height =
        element3.parentElement.clientHeight
        + document.getElementById('rezizeArea').offsetTop
        - y
    ;
 
    if ((height + 100) > element3.parentElement.clientHeight)
        return;//Limit of the height of the elemtnt 3
    element3.style.height = height + 'px';
    onresize();
}
var emailSubject = "Resizer example error";
