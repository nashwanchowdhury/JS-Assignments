let photoSlideShow = {
        photoList: ['aardvark photo', 'bat photo', 'crocodile photo', 'dolphin photo', 'elephant photo', 'fox photo'],
        currentPhotoIndex: 0,
        nextPhoto: function () {
            if (this.currentPhotoIndex < this.photoList.length) {
                this.currentPhotoIndex++;
                if (this.currentPhotoIndex < this.photoList.length) {
                    return this.getCurrentPhoto();
                } else {
                    this.currentPhotoIndex--;
                    return "End of slideshow" }
            } else {}
            },
        prevPhoto: function () {
            if (this.currentPhotoIndex < this.photoList.length) {
                this.currentPhotoIndex--;
                if (this.currentPhotoIndex >= 0) {
                return this.getCurrentPhoto();
                }
                else {
                    this.currentPhotoIndex++;
                    return "End of slideshow"
                }
            } else {}
        },
        getCurrentPhoto: function () {
            return this.photoList[this.currentPhotoIndex];
        }
    };

console.log(photoSlideShow.getCurrentPhoto()); 
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.nextPhoto());
console.log(photoSlideShow.getCurrentPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.getCurrentPhoto());






