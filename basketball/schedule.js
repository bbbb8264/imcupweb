var stage = new Konva.Stage({
    container: "container",
    width: 820,
    height: 500
});
var layer = new Konva.Layer();

var text = new Konva.Text({
    x: stage.getWidth() / 2 - 100,
    y: 20,
    text: "賽程編輯系統",
    fontSize: 25,
    fontFamily: "Calibri",
    fill: "blue"
});
var cycleDragArea = new Konva.Rect({
    x: 10, y: 70,
    width: 140, height: 420,
    stroke: "red",
});

var triangleDrag = new Konva.Line({
    points: [80, 100, 120, 170, 40, 170],
    fill: "blue",
    stroke: "black",
    strokeWidth: 3,
    closed: true,
    draggable: true,
});

var rectDrag = new Konva.Rect({
    x: 40,
    y: 220,
    width: 80,
    height: 80,
    fill: "blue",
    stroke: "black",
    strokeWidth: 3,
    draggable: true
});

triangleDrag.on('dragstart', function() {
    triangleDrag.stopDrag();

    var newTriangle = triangleDrag.clone({
        x: 0,
        y: 0
    });
    newTriangle.off('dragstart');
    layer.add(newTriangle);
    newTriangle.startDrag();
});

triangleDrag.on('dragend', function() {
    var pos = stage.getPointerPosition();
    if (pos.y > 100 && pos.y < 160)
        i = "1";
    else if (pos.y > 250 && pos.y < 310)
        i = "2";
    else if (pos.y > 400 && pos.y < 460)
        i = "3";
    else
        i = "0";
    if (pos.x > 220 && pos.x < 280)
        j = "1";
    else if (pos.x > 370 && pos.x < 430)
        j = "2";
    else if (pos.x > 520 && pos.x < 580)
        j = "3";
    else if (pos.x > 670 && pos.x < 730)
        j = "4";
    else
        j = "0";
    if (i != "0" && j != "0") {     //place onto some cycle
        switch (i+j) {
            case "11":  break;
            case "12": break;
            case "13": break;
            case "14": break;
            case "21": break;
            case "22": break;
            case "23": break;
            case "24": break;
            case "31": break;
            case "32": break;
            case "33": break;
            case "34": break;
        }
    }
});

rectDrag.on('dragstart', function() {
    rectDrag.stopDrag();

    var newRect = rectDrag.clone({
        x: 40,
        y: 220
    });
    newRect.off('dragstart');
    layer.add(newRect);
    newRect.startDrag();
});

var CyclePlaceList = [];
var cycleLabel = 'A';
for (i=0;i<3;i++) {
    for (j=0;j<4;j++) {
        var cyclePlace = new Konva.Circle({
            x: 250 + j*150, y: 130 + i*150,
            radius: 20,
            stroke: "black",
            dash: [10, 10]
        });
        layer.add(cyclePlace);
        CyclePlaceList.push(cyclePlace);
        var cycleNo = new Konva.Text({
            x: 245 + j*150, y: 123 + i*150,
            text: cycleLabel,
            fontSize: 20,
            fontFamily: "Calibri",
            fill: "blue"
        });
        layer.add(cycleNo);
        cycleLabel = String.fromCharCode(cycleLabel.charCodeAt(0) + 1);
    }
}


function pointerOn() { document.body.style.cursor = "pointer" };
function pointerOff() { document.body,style.cursor = "default" };
layer.add(cycleDragArea);
layer.add(triangleDrag);
layer.add(rectDrag);
layer.add(text);
stage.add(layer);

var XHR = new XMLHttpRequest();
sendRequest("getSchedule.php");

function sendRequest(url, parameter) {
    para="";
    if (parameter != 0) {
        for (i in parameter) {
            para = para + i + "=" + parameter[i] + "&";
        }
        para = para.slice(0,-1);
    }
    XHR.open("POST", url, true);
    XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XHR.send(para);
}

XHR.onreadystatechange = function() {
    if (XHR.readyState==4 && (XHR.status==200 || XHR.status==304)) {
        console.log(XHR.responseText);
        var result = JSON.parse(XHR.responseText);
        switch (result["info"]) {
            case "getSchedule":
                getScheduleResult(result);
        }
    }
}

function getScheduleResult(result) {
    if (result["result"] == "empty") {
        alert("哭哭喔!");
    }
    else if (result["result"] == "success") {

    }
}
