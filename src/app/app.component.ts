import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { LoginService } from './login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './user';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user: User;
  mediaSub: Subscription;
  deviceXs: boolean; // da ne pisemo u svakoj komponenti
  deviceSm: boolean;



  constructor(private loginService: LoginService, public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.loginService.GetUser().subscribe((user: User) => {
      this.user = user;
  });
  this.mediaSub = this.mediaObserver.media$.subscribe(
    (result: MediaChange) => {
    console.log(result.mqAlias);
    this.deviceXs = result.mqAlias === 'xs' ? true : false; // ako je xs, bit ce true, inace false
    this.deviceSm = result.mqAlias === 'sm' ? true : false;
  }
  );




}
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  Logout(){
    this.loginService.Logout();
  }
}





