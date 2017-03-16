import { Observable } from 'rxjs';

export var MouseEventObserve = Observable.fromEvent(document, "mousemove");

MouseEventObserve.subscribe(
    e => console.log("mouse location: x ", e.layerX, "mouse location: y ", e.layerY)
)

export class loadJson {
    output = document.getElementById("output");
    button = document.getElementById("button");


    load(url: string) {

        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            let data = JSON.parse(xhr.responseText);
            data.forEach(m => {
                let div = document.createElement("div");
                div.innerText = m._id;
                this.output.appendChild(div)
                
                let div2 = document.createElement("div");
                div2.innerText = m.name;
                this.output.appendChild(div2)
            });
        });
        xhr.open("Get", url);
        xhr.send();
    }

    click = Observable.fromEvent(this.button, "click").subscribe(
        e => this.load("ss.json"),
        error => console.log(error),
        () => console.log("ok")
    )
}