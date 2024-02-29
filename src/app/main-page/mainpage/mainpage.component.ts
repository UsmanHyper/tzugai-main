import { Component, OnInit, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit, AfterViewInit {
  private videoElement: HTMLVideoElement;
  private userClicked: boolean = false;


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
    }, 5000);
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
    // if (this.userClicked) {
    // Add your logic to determine when to trigger video on scroll
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
    this.videoElement = this.elementRef.nativeElement.querySelector('#background-video');
    setTimeout(() => {
      this.playVideo()
    }, 5000)

  }


  // private checkAutoplayPermission() {
  //   if ('permissions' in navigator) {
  //     navigator.permissions.query({ name: 'autoplay' })
  //       .then(permissionStatus => {
  //         if (permissionStatus.state === 'granted') {
  //           this.playVideo();
  //         } else {
  //           permissionStatus.onchange = () => {
  //             if (permissionStatus.state === 'granted') {
  //               this.playVideo();
  //             }
  //           };

  //           navigator.permissions.request({ name: 'autoplay' })
  //             .then(permissionStatus => {
  //               if (permissionStatus.state === 'granted') {
  //                 this.playVideo();
  //               }
  //             });
  //         }
  //       })
  //       .catch(error => {
  //         console.error('Error checking or requesting autoplay permissions:', error);
  //       });
  //   } else {
  //     // Permissions API not supported, fallback to playing the video
  //     this.playVideo();
  //   }
  // }

  // private addClickListener() {
  //   document.addEventListener('click', this.clickHandler, { once: true });
  // }

  // private clickHandler = () => {
  //   this.playVideo();
  //   document.removeEventListener('click', this.clickHandler);
  // };

  // private playVideo() {
  //   this.videoElement.play()
  //     .then(_ => {
  //       // Autoplay started!
  //     })
  //     .catch(error => {
  //       // Autoplay was prevented.
  //       // Handle or log the error as needed.
  //       console.error('Autoplay prevented:', error);
  //     });
  // }

}
