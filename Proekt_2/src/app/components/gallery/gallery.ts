import { Component } from '@angular/core';
import { GALLERY_DATA, GalleryItem } from '../../db-data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  galleryItems: GalleryItem[] = [];
  selectedImage: string | null = null;

  ngOnInit(): void {
    this.galleryItems = GALLERY_DATA;
  }
  

  like(item: any) {
    item.likes++;
    item.dislikes--;
    if(item.dislikes<0){
      item.dislikes = 0;
    }
  }

  dislike(item: any) {
    item.dislikes++;
    item.likes--;
    if(item.likes<0){
      item.likes = 0;
    }
  }

  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImage() {
    this.selectedImage = null;
  }
}