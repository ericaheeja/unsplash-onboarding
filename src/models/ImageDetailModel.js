export default class ImageDetailModel {
  constructor(detail) {
    this.views = detail.views;
    this.cameraMake = detail.exif.make;
    this.cameraModel = detail.exif.model;
    this.focalLength = detail.exif.focal_length;
    this.aperture = detail.exif.aperture;
    this.shutterSpeed = detail.exif.exposure_time;
    this.iso = detail.exif.iso;
  }
}
