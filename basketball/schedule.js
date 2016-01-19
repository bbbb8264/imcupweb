var stage = new Konva.Stage({
    container: "container",
    width: 820,
    height: 420,
});
var height1 = 420;
var height2;
var layer = new Konva.Layer();
var activelayer = new Konva.Layer();
var SchedulePlace = new Konva.Circle({
    x: 410, y: 120,
    radius:75,
    stroke: "black",
});
SchedulePlace.isSchedule = true;
var cycleName = new Konva.Text({
    x: 335, y:110,
    width:150,
    align:"center",
    text: "將賽程拖曳至此",
    fontSize: 20,
    fontFamily: "Microsoft JhengHei",
    fill: "black",
});
layer.add(cycleName);
layer.add(SchedulePlace);
var cycleDragArea = new Konva.Rect({
    x: 10, y: 10,
    width: 140, height: 260,
    stroke: "red",
});
var triangleDrag = new Konva.Line({
    points: [80, 40, 120, 110, 40, 110],
    stroke: "black",
    fill: "white",
    strokeWidth: 3,
    closed: true,
    draggable: true,
});
var rectDrag = new Konva.Rect({
    x: 40,
    y: 160,
    width: 80,
    height: 80,
    fill: "white",
    stroke: "black",
    strokeWidth: 3,
    draggable: true
});
var schedulelist = [];
triangleDrag.on('dragstart', function() {
    triangleDrag.stopDrag();
    this.setX(0);
    this.setY(0);
    var newTriangle = triangleDrag.clone({
        x: 0,
        y: 0
    });
    newTriangle.off('dragstart');
    newTriangle.off('dragend');
    newTriangle.on('dragend', function() {
        var pos = stage.getPointerPosition();
        var shape = layer.getIntersection(pos);
        if(shape != null && shape.isSchedule){
            newTriangle.off('mouseenter');
            this.setX(shape.attrs.x - 80);
            this.setY(shape.attrs.y - 80);
            this.draggable(false);
            cycleName.setY(shape.attrs.y + 190);
            schedulelist.push(this);
            shape.setY(shape.attrs.y + 200);
            shape.attrs.stroke = "black";
            this.moveTo(layer);
            var teamplace = new Konva.Rect({
                x: this.attrs.x+29,
                y: this.attrs.y-20,
                width: 100,
                height: 40,
                stroke: "black",
                strokeWidth: 3,
                dash: [10]
            });
            teamplace.isTeamplace = true;
            teamplace.hasteam = false;
            layer.add(teamplace);
            this.team1 = teamplace;
            var teamplace = new Konva.Rect({
                x: this.attrs.x-80,
                y: this.attrs.y+120,
                width: 100,
                height: 40,
                stroke: "black",
                strokeWidth: 3,
                dash: [10]
            });
            teamplace.isTeamplace = true;
            teamplace.hasteam = false;
            this.team2 = teamplace;
            layer.add(teamplace);
            var teamplace = new Konva.Rect({
                x: this.attrs.x+140,
                y: this.attrs.y+120,
                width: 100,
                height: 40,
                stroke: "black",
                strokeWidth: 3,
                dash: [10]
            });
            teamplace.isTeamplace = true;
            teamplace.hasteam = false;
            this.team3 = teamplace;
            layer.add(teamplace);
            if(schedulelist.length > 1){
                height1 = (schedulelist.length+1)*210;
                if(stage.height() < (schedulelist.length+1)*210){
                    stage.height((schedulelist.length+1)*210);
                }
            }
            stage.draw();
        }else{
            $(this)[0].remove();
            stage.draw();
        }
    });
    var preshape;
    newTriangle.on('dragmove',function(e){
        var pos = stage.getPointerPosition();
        var shape = layer.getIntersection(pos);
        if (preshape && shape) {
                if (preshape !== shape) {
                    preshape = shape;
                } else {
                }
            } else if (!preshape && shape) {
                preshape = shape;
                if(shape.isSchedule){
                    shape.attrs.stroke = "blue";
                    layer.draw();
                }
            } else if (preshape && !shape) {
                if(preshape.isSchedule){
                    preshape.attrs.stroke = "black";
                    layer.draw();
                }
                preshape = undefined;
            }
    });
    activelayer.add(newTriangle);
    newTriangle.startDrag();
    this.setX(0);
    this.setY(0);
});
triangleDrag.on('dragend',function(){
    this.setX(0);
    this.setY(0);
});
triangleDrag.on('mouseenter',pointerOn);
triangleDrag.on('mouseleave',pointerOff);
rectDrag.on('mouseenter',pointerOn);
rectDrag.on('mouseleave',pointerOff);
rectDrag.on('dragstart', function() {
    rectDrag.stopDrag();
    this.setX(40);
    this.setY(160);
    var newRect = rectDrag.clone({
        x: 40,
        y: 160
    });
    newRect.off('dragstart');
    newRect.off('dragend');
    newRect.on('dragend', function() {
        var pos = stage.getPointerPosition();
        var shape = layer.getIntersection(pos);
        if(shape != null && shape.isSchedule){
            newRect.off('mouseenter');
            this.setX(shape.attrs.x - 40);
            this.setY(shape.attrs.y - 40);
            this.draggable(false);
            cycleName.setY(shape.attrs.y + 190);
            schedulelist.push(this);
            shape.setY(shape.attrs.y + 200);
            shape.attrs.stroke = "black";
            this.moveTo(layer);
            var teamplace = new Konva.Rect({
                x: this.attrs.x-90,
                y: this.attrs.y-50,
                width: 100,
                height: 40,
                stroke: "black",
                strokeWidth: 3,
                dash: [10]
            });
            teamplace.isTeamplace = true;
            teamplace.hasteam = false;
            layer.add(teamplace);
            this.team1 = teamplace;
            var teamplace = new Konva.Rect({
                x: this.attrs.x+70,
                y: this.attrs.y-50,
                width: 100,
                height: 40,
                stroke: "black",
                strokeWidth: 3,
                dash: [10]
            });
            teamplace.isTeamplace = true;
            teamplace.hasteam = false;
            this.team2 = teamplace;
            layer.add(teamplace);
            var teamplace = new Konva.Rect({
                x: this.attrs.x+70,
                y: this.attrs.y+90,
                width: 100,
                height: 40,
                stroke: "black",
                strokeWidth: 3,
                dash: [10]
            });
            teamplace.isTeamplace = true;
            teamplace.hasteam = false;
            this.team3 = teamplace;
            layer.add(teamplace);
            var teamplace = new Konva.Rect({
                x: this.attrs.x-90,
                y: this.attrs.y+90,
                width: 100,
                height: 40,
                stroke: "black",
                strokeWidth: 3,
                dash: [10]
            });
            teamplace.isTeamplace = true;
            teamplace.hasteam = false;
            this.team4 = teamplace;
            layer.add(teamplace);
            if(schedulelist.length > 1){
                height1 = (schedulelist.length+1)*210;
                if(stage.height() < (schedulelist.length+1)*210){
                    stage.height((schedulelist.length+1)*210);
                }
            }
            stage.draw();
        }else{
            $(this)[0].remove();
            stage.draw();
        }
    });
    var preshape;
    newRect.on('dragmove',function(e){
        var pos = stage.getPointerPosition();
        var shape = layer.getIntersection(pos);
        if (preshape && shape) {
                if (preshape !== shape) {
                    preshape = shape;
                } else {
                }
            } else if (!preshape && shape) {
                preshape = shape;
                if(shape.isSchedule){
                    shape.attrs.stroke = "blue";
                    layer.draw();
                }
            } else if (preshape && !shape) {
                if(preshape.isSchedule){
                    preshape.attrs.stroke = "black";
                    layer.draw();
                }
                preshape = undefined;
            }
    });
    activelayer.add(newRect);
    newRect.startDrag();
    this.setX(40);
    this.setY(160);
});
rectDrag.on('dragend',function(){
    this.setX(40);
    this.setY(160);
});
function pointerOn() { document.body.style.cursor = "pointer" };
function pointerOff() { document.body.style.cursor = "default" };
layer.add(cycleDragArea);
layer.add(triangleDrag);
layer.add(rectDrag);

stage.add(layer);
stage.add(activelayer);
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
        //alert("哭哭喔!");
    }
    else if (result["result"] == "success") {

    }
}
var teamDragArea = new Konva.Rect({
    x: 670, y: 10,
    width: 140, height: 100,
    stroke: "red",
});
layer.add(teamDragArea);
var undistributedteam = [];
function sortteam(){
    height2 = undistributedteam.length*60+30;
    if(height1 < undistributedteam.length*60+30){
        stage.height(undistributedteam.length*60+30);
    }
    $(undistributedteam).each(function(k,v){
        v.setY(20+k*60);
        v.setX(680);
        teamDragArea.height(60*undistributedteam.length+10);
    });
}
$.ajax({
    url : "getTeam.php",
    type : "POST",
    data : {},
    success : function(data) {
        data = jQuery.parseJSON(data);
        teamDragArea.height(60*data.length+10);
        height2 = data.length*60+30;
        if(data.length*60+30 > 420){
            stage.height(data.length*60+30);
        }
        height2 = data.length*60+30;
        $(data).each(function(k,v){
            var teamdrag = new Konva.Rect({
                width: 120, height: 50,
                fill: "white",
                stroke: "black",
            });
            var teamgroup = new Konva.Group({
                x: 680, y: 20+k*60,
                draggable: true
            });
            var teamname = new Konva.Text({
                y:15,
                text: v.nickName,
                width: 120, height: 50,
                fontSize: 20,
                fontFamily: "Microsoft JhengHei",
                fill: "black",
                align:"center",
            });
            var preshape;
            teamgroup.on('dragmove',function(e){
            var pos = stage.getPointerPosition();
            var shape = layer.getIntersection(pos);
                if (preshape && shape) {
                        if (preshape !== shape) {
                            preshape = shape;
                        } else {
                        }
                    } else if (!preshape && shape) {
                        preshape = shape;
                        if(shape.isTeamplace){
                            shape.attrs.stroke = "blue";
                            layer.draw();
                        }
                    } else if (preshape && !shape) {
                        if(preshape.isTeamplace){
                            preshape.attrs.stroke = "black";
                            layer.draw();
                        }
                        preshape = undefined;
                    }
            });
            teamgroup.on("dragstart",function(){
                this.moveTo(activelayer);
                if(this.par != null){
                    this.par.hasteam = false;
                    undistributedteam.push(this);
                    this.par = null;
                }
                stage.draw();
            });
            teamgroup.on('mouseenter',pointerOn);
            teamgroup.on('mouseleave',pointerOff);
            teamgroup.on("dragend",function(){
                this.moveTo(layer);
                var pos = stage.getPointerPosition();
                var shape = layer.getIntersection(pos);
                if(shape != null && shape.isTeamplace && !shape.hasteam){
                    undistributedteam.splice(undistributedteam.indexOf(this),1);
                    shape.team = this;
                    this.setX(shape.attrs.x-9);
                    this.setY(shape.attrs.y-5);
                    this.par = shape;
                }
                sortteam();
                stage.draw();
            });
            teamgroup.add(teamdrag);
            teamgroup.add(teamname);
            undistributedteam.push(teamgroup);
            layer.add(teamgroup);
        });
        stage.draw();
    },
    error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText);
    } 
});
$(document).ready(function(){
    $("#submitbutton").click(function(){
        $(this).addClass("loading");
    });
});