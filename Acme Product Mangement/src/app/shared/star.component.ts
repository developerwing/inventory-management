import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'star-rating',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    
    starWidth:number;
    @Input()
    rating:number;

    @Output()
    SentBackParentData:EventEmitter<string>=new EventEmitter<string>();//Custom Event Created Here
                                                                    //<string> Passed here is payload

    ngOnChanges():void{

        this.starWidth=this.rating*75/5;
    }
    onClick():void{
        this.SentBackParentData.emit('the rating clicked is'+ this.rating);
        
    }

} 