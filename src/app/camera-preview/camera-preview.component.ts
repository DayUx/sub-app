import { Component, Inject, ViewChild } from '@angular/core';
import { NgxOpenCVService } from '../../lib/ngx-open-cv.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { PlastronService } from '../plastron.service';
import { OpenCVState } from '../../lib/models';

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.component.html',
  styleUrls: ['./camera-preview.component.scss'],
})
export class CameraPreviewComponent {
  private cvState: string = '';
  stream: MediaStream | undefined;
  @ViewChild('video', { static: true }) video: any;
  private playing: boolean = true;

  height: number = 0;
  width: number = 0;
  currentFps: number = 0;
  coordinates: any = null;
  coordinatesPercent: any = null;
  private frame: any = null;
  loading: boolean = false;

  capture() {
    this.loading = true;
    const scope = this;
    this.plastronService.setFrame(this.frame);
    // this.plastronService.process();

    scope.router.navigate(['camera/result']);
    this.loading = false;
  }

  coordinatesToPercent(coordinates: any) {
    if (!coordinates) {
      return;
    }
    this.coordinatesPercent = coordinates.map((coordinate: any) => {
      return {
        x: (coordinate.x / this.width) * 100,
        y: (coordinate.y / this.height) * 100,
      };
    });
  }
  getPolygon() {
    let result = '';
    if (!this.coordinatesPercent) {
      return;
    }
    for (const coordinate of this.coordinatesPercent) {
      result += `${coordinate.x}% ${coordinate.y}%,`;
    }
    return `polygon(${result.slice(0, -1)})`;
  }

  getFrameFromStream() {}

  constructor(
    private ngxOpenCv: NgxOpenCVService,
    @Inject(DOCUMENT) document: Document,
    private router: Router,
    private plastronService: PlastronService
  ) {
    router.events.subscribe((val) => {
      this.playing = false;
    });

    const scope = this;
    console.log(navigator.mediaDevices);
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { ideal: 4096 },
          height: { ideal: 2160 },
          facingMode: 'environment',
        },

        audio: false,
      })
      .then(function (stream: MediaStream) {
        let video = document.getElementById('video');
        if (video) {
          // @ts-ignore
          video.srcObject = stream;
          // @ts-ignore
          video.play().then((test) => {
            scope.initOpencv();
          });
        }
      })
      .catch(function (err) {
        console.log('An error occurred! ' + err);
      });
  }

  initOpencv() {
    // subscribe to status of OpenCV module
    this.ngxOpenCv.cvState.subscribe((cvState: OpenCVState) => {
      // do something with the state string
      this.cvState = cvState.state;
      if (cvState.error) {
        // handle errors
        console.log('error');
      } else if (cvState.loading) {
        // e.g. show loading indicator
        console.log('loading');
      } else if (cvState.ready) {
        // do image processing stuff
        console.log('ready');
        this.playing = true;
        this.startWebcam();
      }
    });
  }

  startWebcam() {
    // @ts-ignore
    const cv = window['cv'];
    this.plastronService.setCv(cv);
    let video = document.getElementById('video');

    while (video == null) {
      video = document.getElementById('video');
      setTimeout(() => {}, 1000);
    }
    // @ts-ignore
    let cap = new cv.VideoCapture(video);
    // @ts-ignore
    this.height = video.videoHeight;
    // @ts-ignore
    video.height = this.height;

    // @ts-ignore
    this.width = video.videoWidth;
    // @ts-ignore
    video.width = this.width;
    // @ts-ignore
    let frame = new cv.Mat(this.height, this.width, cv.CV_8UC4);
    const fps = 60;
    const scope = this;

    let currentFps = 0;
    let currentTimestamp = new Date().getTime();
    function processVideo() {
      if (new Date().getTime() - currentTimestamp > 1000) {
        scope.currentFps = currentFps;
        currentFps = 0;
        currentTimestamp = new Date().getTime();
      } else {
        currentFps += 1;
      }

      // @ts-ignore
      if (!scope.playing) {
        // frame.delete();
        return;
      }
      if (scope.height > 0 && scope.width > 0) {
        try {
          // @ts-ignore
          cap.read(frame);
          // cv.imshow('canvas', frame);
          try {
            scope.coordinates =
              scope.plastronService.getPlastronCoordinates(frame);
          } catch (err) {
            console.log(err);
          }

          if (!scope.coordinates) {
            scope.frame = null;
          } else {
            scope.frame = frame;
          }
          scope.coordinatesToPercent(scope.coordinates);
        } catch (err) {}
      } else {
        video = document.getElementById('video');
        // @ts-ignore
        cap = new cv.VideoCapture(video);
        // @ts-ignore
        scope.height = video.videoHeight;
        // @ts-ignore
        video.height = scope.height;
        // @ts-ignore
        scope.width = video.videoWidth;
        // @ts-ignore
        video.width = scope.width;
        frame.delete();
        // @ts-ignore
        frame = new cv.Mat(scope.height, scope.width, cv.CV_8UC4);
      }

      setTimeout(processVideo, 1000 / fps);
    }

    // schedule the first one.
    setTimeout(processVideo, 0);
  }
}