import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  selectedImage: string | null = null;
  
  galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1604175287072-b5e71423060c?q=80&w=600',
      title: 'Eiffel Tower',
      description: 'The iconic symbol of Paris, standing 330 meters tall. Enjoy breathtaking views of the city from its observation decks.',
      likes: 1623,
      dislikes: 10
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1719430571386-b32cec341373?q=80&w=600',
      title: 'Notre-Dame Cathedral',
      description: 'A masterpiece of French Gothic architecture dating back to the 12th century, currently under restoration.',
      likes: 2341,
      dislikes: 150
    },
    {
      image: 'https://images.unsplash.com/photo-1560425946-7d5830202765?q=80&w=700',
      title: 'Louvre Museum',
      description: 'The world\'s largest art museum, home to the Mona Lisa and over 35,000 works of art spanning centuries.',
      likes: 2157,
      dislikes: 236
    },
    {
      image: 'https://images.unsplash.com/photo-1725528141836-c3238fd35d04?q=80&w=1000',
      title: 'Seine River',
      description: 'Take a romantic cruise along the Seine and see Paris\'s most beautiful bridges and riverside architecture.',
      likes: 1352,
      dislikes: 223
    },
    {
      image: 'https://images.unsplash.com/photo-1603489243594-05229b860653?q=80&w=600',
      title: 'Montmartre',
      description: 'Charming hilltop neighborhood with cobblestone streets, artists, and the stunning Sacré-Cœur Basilica.',
      likes: 4251,
      dislikes: 635
    },
    {
      image: 'https://images.unsplash.com/photo-1642509949167-67139eb1b37b?q=80&w=600',
      title: 'Parisian Cafés',
      description: 'Experience authentic café culture at charming sidewalk bistros serving espresso and fresh croissants.',
      likes: 5267,
      dislikes: 283
    }
  ];

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