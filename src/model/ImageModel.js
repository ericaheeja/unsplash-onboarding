export default class ImageModel {
  constructor(image) {
    this.imageUrl = image.urls?.regular;
    this.authorName = image.user?.name ?? "No author name";
    this.authorUserName = image.user?.username ?? "No username";
    this.thumbnail = image.user.profile_image?.large;
    this.id = image.id;
  }
}
