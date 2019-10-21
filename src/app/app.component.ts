import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';
import { NguCarouselConfig } from './carousel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  imgags = [
    'assets/bg.jpg',
    'assets/car.png',
    'assets/canberra.jpg',
    'assets/holi.jpg'
  ];
  public carouselTileItems: Array<any> = [];
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.carouselTileLoad();
  }

  public carouselTileLoad() {
    const len = this.carouselTileItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTileItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
      this.cdr.detectChanges();
    }
  }
}
