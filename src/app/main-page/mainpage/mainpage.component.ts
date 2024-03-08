import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit, AfterViewInit {
  private videoElement: HTMLVideoElement;
  private userClicked: boolean = false;
  video: string = "../../../assets/videos/promo.mp4";


  constructor(private elementRef: ElementRef) {
    this.videoElement = this.elementRef.nativeElement.querySelector('#background-video');
  }


  ngOnInit(): void {

    window.onload = () => {
      this.videoElement = this.elementRef.nativeElement.querySelector('#background-video');
      if (this.videoElement) {


        this.videoElement.play()
          .then(_ => {
            // Autoplay started!
          })
          .catch(error => {
            // Autoplay was prevented.
            // Handle or log the error as needed.
            console.error('Autoplay prevented:', error);
          })

      }
    }
    setTimeout(() => {
      this.triggerClick();
    }, 4000);
  }


  playVideoonloop() {
    const video = document.getElementById('background-video') as HTMLVideoElement;
    video.play();
  }

  triggerClick() {
    // this.userClicked = true;
    this.playVideo();
  }

  @HostListener('click')
  onClick() {
    this.playVideo();
  }

  @HostListener('window:scroll')
  onScroll() {

    const scrollPosition = window.scrollY;
    const triggerPoint = 500; // Adjust this value based on your requirements

    if (scrollPosition > triggerPoint) {
      this.playVideo();
    }
    // }
  }



  private playVideo() {
    this.videoElement.play()
      .then(_ => {
        // Autoplay started!
      })
      .catch(error => {
        // Autoplay was prevented.
        // Handle or log the error as needed.
        console.error('Autoplay prevented:', error);
      });
  }


  ngAfterViewInit(): void {


  }


}
