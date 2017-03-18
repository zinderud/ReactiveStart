import { Observable, Observer, Subject,AsyncSubject } from "rxjs";


export class subjectReact {
    //basit subject kullanımı
    public showmeSimpleSubject(): void {

        var subject = new Subject();

        var subscription = subject.subscribe(
            function (x) { console.log('onNext: ' + x); },
            function (e) { console.log('onError: ' + e.message); },
            function () { console.log('onCompleted'); });

        subject.next(1);
        // => onNext: 1

        subject.next(2);
        // => onNext: 2

        subject.complete();
        // => onCompleted

        subscription.closed = true;
    }

    //AsyncSubject kullanımı
    public showmeAsyncSubject():void{
    
     var subject = new AsyncSubject();

var i = 0;
var handle = setInterval(function () {
    subject.next(i)
    if (++i > 3) {
        subject.complete();
        clearInterval(handle);
    }
}, 500);

var subscription = subject.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });


    }

}

