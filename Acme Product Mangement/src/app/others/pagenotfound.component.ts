import { Component } from "@angular/core";

@Component({
    template:'{{ "Sorry " + Message}}'
})
export class PageNotFound{
    Message:string='PageNotFound 404';
}