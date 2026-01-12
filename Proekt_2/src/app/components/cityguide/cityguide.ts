import { Component } from '@angular/core';

@Component({
  selector: 'app-cityguide',
  templateUrl: './cityguide.html',
  styleUrl: './cityguide.css'
})
export class Cityguide {
  attractions = [
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
  ];

  restaurants = [
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
  ];

  tips = [
    'The Paris Museum Pass gives you skip-the-line access to 50+ attractions and unlimited metro rides',
    'Most museums are closed on Mondays (Louvre, Rodin) or Tuesdays (Orsay, Pompidou) - plan accordingly',
    'Buy a carnet (book of 10 metro tickets) for savings, or use a rechargeable Navigo Découverte card',
    'Many restaurants close between lunch (12-2pm) and dinner (7-10pm) service',
    'Learn basic French phrases - "Bonjour," "merci," and "s\'il vous plaît" go a long way',
    'Cafés charge more for table service (sitting) than standing at the bar',
    'The best views are free: Sacré-Cœur steps, Galeries Lafayette rooftop, and Pont Alexandre III bridge',
    'Neighborhoods to explore: Le Marais (trendy), Saint-Germain (classic), Montmartre (artistic), Canal Saint-Martin (hip)'
  ];
}