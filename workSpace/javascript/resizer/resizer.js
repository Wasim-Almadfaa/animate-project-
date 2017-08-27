function resizer(resizerID, mousemove, cursor) {
    consoleLog("resizer(" + resizerID + ")");
    var resizer = document.getElementById(resizerID);
    resizer.style.cursor = cursor;
    resizer.mousemove = mousemove;

    resizer.onmousedown = function (e) {
        try{
            consoleLog("resizer.onmousedown(e)");
            document.documentElement.addEventListener('mousemove', resizer.doDrag, false);
            document.documentElement.addEventListener('mouseup', resizer.stopDrag, false);
        } catch (e) {
            ErrorMessage("resizer.onmousedown(...) failed! Your browser does not support this feature. " + e.message);
        }
    }

    resizer.doDrag = function (e) {
        if (e.which != 1){
            consoleLog("mouseup");
            resizer.stopDrag(e);
            return;
        }
        //consoleLog("doDrag(e)");
        resizer.mousemove(e);
    }

    resizer.stopDrag = function (e) {
        consoleLog("stopDrag(e)");
        document.documentElement.removeEventListener('mousemove', resizer.doDrag, false);
        document.documentElement.removeEventListener('mouseup', resizer.stopDrag, false);
    }
}

function resizerX(resizerID, mousemove) {
    resizer(resizerID, mousemove, "e-resize");
}

function resizerY(resizerID, mousemove) {
    resizer(resizerID, mousemove, "n-resize");
}

function consoleLog(message) {
	try{
		console.log(message);//Do not works in WP
    } catch(e) {
    }
}

