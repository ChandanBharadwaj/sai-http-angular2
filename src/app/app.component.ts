import { Component,OnInit } from '@angular/core';
import { MyHttpService ,User} from './services/my-http.service';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[MyHttpService]
})
export class AppComponent implements OnInit{
    users :User[];
  constructor(private _myHttpService: MyHttpService) { }

  ngOnInit(){
 this._myHttpService.getValuesFromMyHTTP()
 .map(response => response.json())
 .subscribe((result) => {
   this.users =result;
   console.log(this.users);
 }
  );
  }

  title = 'app works!';
}
