import {Observable} from 'rxjs'

export class Loadjson2{
    output = document.getElementById("output");
    button = document.getElementById("button");

    load(url: string) {
     
        return Observable.create(
ob=>{
      
         var xhr = new XMLHttpRequest(); 
         xhr.addEventListener("load", () => {
            let data = JSON.parse(xhr.responseText);
        ob.next(data);
        ob.complete();
    });
         xhr.open("GET", url);
        xhr.send();
});
      
  
    }
  
  renderData(data) {
        data.forEach(m => {
                let div = document.createElement("div");
                div.innerText = m._id;
                this.output.appendChild(div)
                
                let div2 = document.createElement("div");
                div2.innerText = m.name;
                this.output.appendChild(div2)
            });}

    
      click = Observable.fromEvent(this.button, "click")
    .flatMap(s=>this.load("ss.json")
    .subscribe( 
        z=>  this.renderData(z),
        error => console.log(error),
        () => console.log("ok")
    ));
 

}


