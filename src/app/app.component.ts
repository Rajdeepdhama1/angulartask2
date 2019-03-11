import { Component,OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lazy';
  showLoader: Boolean = false;
  public textarray=Array(50);
  public textarray2=Array(50);
  @HostListener('window:scroll', [''])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            this.showLoader= true;
            this.textarray.push(this.textarray2)
            setTimeout(() => this.showLoader = false, 1000)
        }
    }
    ngOnInit(){}
    
  
  }
