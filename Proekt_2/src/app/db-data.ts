

export interface GalleryItem {
    image: string;
    title: string;
    description: string;
    likes: number;
    dislikes: number;
}
export interface GuideAttraction {
  name: string;
  description: string;
}

export interface CityGuideItem {
  attractions: GuideAttraction[];
  restaurants: GuideAttraction[];
  tips: string[];
}
export const GALLERY_DATA: GalleryItem[]=[
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
]
export const GUIDE_DATA: CityGuideItem[] = [
  {
    attractions: [
      {
      name: 'Eiffel Tower (La Tour Eiffel)',
      description: 'Built in 1889, this 330-meter iron tower is Paris\'s most iconic landmark. Visit at sunset for spectacular views. Tip: Book tickets online to skip long queues.'
    },
    {
      name: 'Louvre Museum',
      description: 'The world\'s largest art museum with over 380,000 objects. Home to the Mona Lisa, Venus de Milo, and countless masterpieces. Allow at least 4 hours for your visit.'
    },
    {
      name: 'Notre-Dame Cathedral',
      description: 'Medieval Gothic cathedral on Île de la Cité. Though currently closed for restoration after the 2019 fire, you can still admire its exterior and visit the nearby archaeological crypt.'
    },
    {
      name: 'Arc de Triomphe',
      description: 'Monumental arch at the center of Place Charles de Gaulle. Climb to the top for panoramic views of the 12 radiating avenues including the Champs-Élysées.'
    },
    {
      name: 'Sacré-Cœur Basilica',
      description: 'White-domed basilica crowning Montmartre hill. Enjoy free entry and climb the dome for one of Paris\'s best viewpoints. The surrounding Montmartre neighborhood is perfect for wandering.'
    },
    {
      name: 'Musée d\'Orsay',
      description: 'Stunning museum in a former railway station housing the world\'s finest collection of Impressionist and Post-Impressionist masterpieces by Monet, Renoir, Van Gogh, and more.'
    }
    ],
    restaurants: [
      {
      name: 'Le Jules Verne',
      description: 'Michelin-starred restaurant on the Eiffel Tower\'s second floor. Exceptional modern French cuisine with unbeatable views. Reserve months in advance.'
    },
    {
      name: 'L\'Ami Jean',
      description: 'Beloved bistro near the Eiffel Tower serving hearty Basque-influenced French dishes. Known for lively atmosphere and family-style portions. No reservations for lunch.'
    },
    {
      name: 'Breizh Café',
      description: 'Award-winning crêperie in the Marais serving authentic Breton galettes (savory buckwheat crêpes) and sweet crêpes with organic ingredients.'
    },
    {
      name: 'Le Comptoir du Relais',
      description: 'Classic Saint-Germain bistro by chef Yves Camdeborde. Traditional French dishes with a modern twist. Arrive early as they don\'t take reservations for dinner.'
    },
    {
      name: 'L\'As du Fallafel',
      description: 'Legendary falafel spot in the Marais Jewish quarter. Always a queue, but the famous falafel sandwich is worth the wait. Cash only.'
    },
    {
      name: 'Café de Flore',
      description: 'Historic literary café in Saint-Germain-des-Prés. Once frequented by Sartre and Hemingway. Perfect for people-watching over coffee and a croissant.'
    }
    ],
    tips: [
      'The Paris Museum Pass gives you skip-the-line access to 50+ attractions and unlimited metro rides',
    'Most museums are closed on Mondays (Louvre, Rodin) or Tuesdays (Orsay, Pompidou) - plan accordingly',
    'Buy a carnet (book of 10 metro tickets) for savings, or use a rechargeable Navigo Découverte card',
    'Many restaurants close between lunch (12-2pm) and dinner (7-10pm) service',
    'Learn basic French phrases - "Bonjour," "merci," and "s\'il vous plaît" go a long way',
    'Cafés charge more for table service (sitting) than standing at the bar',
    'The best views are free: Sacré-Cœur steps, Galeries Lafayette rooftop, and Pont Alexandre III bridge',
    'Neighborhoods to explore: Le Marais (trendy), Saint-Germain (classic), Montmartre (artistic), Canal Saint-Martin (hip)'
    ]
  }
];