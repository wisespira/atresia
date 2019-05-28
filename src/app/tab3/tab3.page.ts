import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    
    constructor(){
 this.larry();
        
    }
    
    
    
    money = 113547;
    
    larry(){
for(let i = 0; i<5000; i++){
    this.money++;
}
    }
    
    
    
    
    
    
    
    
}
