import { Observable  } from 'rxjs';
var output =document.getElementById("output");
var button=document.getElementById("button");
export var MouseEventObserve = Observable.fromEvent(document, "mousemove");

MouseEventObserve.subscribe(
    value=>console.log("mouse location: x ",value.layerX,"mouse location: y ",value.layerY)
)
  