import {Offer} from '../types/offer';

const offers: Offer[] = [
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/5.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg'
    ],
    'title': 'Waterfront with extraordinary view',
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'type': 'house',
    'bedrooms': 2,
    'maxAdults': 8,
    'price': 159,
    'goods': [
      'Air conditioning',
      'Washer',
      'Laptop friendly workspace',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'id': 1
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/15.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg'
    ],
    'title': 'The Pondhouse - A Magical Place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 135,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 50.849557,
      'longitude': 4.374696999999999,
      'zoom': 16
    },
    'id': 2
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/9.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.4,
    'type': 'apartment',
    'bedrooms': 2,
    'maxAdults': 4,
    'price': 144,
    'goods': [
      'Air conditioning',
      'Fridge',
      'Laptop friendly workspace',
      'Breakfast',
      'Baby seat',
      'Washer',
      'Dishwasher',
      'Towels'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'id': 3
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/10.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg'
    ],
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3,
    'type': 'apartment',
    'bedrooms': 5,
    'maxAdults': 9,
    'price': 358,
    'goods': [
      'Breakfast',
      'Air conditioning',
      'Washer',
      'Baby seat',
      'Laptop friendly workspace',
      'Fridge',
      'Dishwasher',
      'Washing machine',
      'Towels',
      'Coffee machine'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 53.546341000000005,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'id': 4
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/16.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg'
    ],
    'title': 'Perfectly located Castro',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5,
    'type': 'hotel',
    'bedrooms': 3,
    'maxAdults': 10,
    'price': 143,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer',
      'Dishwasher',
      'Fridge',
      'Baby seat',
      'Air conditioning',
      'Coffee machine',
      'Towels'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 53.528341000000005,
      'longitude': 10.018654000000002,
      'zoom': 16
    },
    'id': 5
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/11.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg'
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 144,
    'goods': [
      'Baby seat',
      'Coffee machine',
      'Air conditioning',
      'Towels',
      'Fridge',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 53.563341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'id': 6
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/1.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg'
    ],
    'title': 'The house among olive ',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 6,
    'price': 763,
    'goods': [
      'Dishwasher',
      'Air conditioning',
      'Washer',
      'Fridge',
      'Towels',
      'Laptop friendly workspace',
      'Breakfast',
      'Baby seat'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 52.364540000000005,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'id': 7
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/16.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg'
    ],
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 121,
    'goods': [
      'Breakfast',
      'Air conditioning',
      'Towels',
      'Laptop friendly workspace',
      'Fridge',
      'Baby seat',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 52.36954000000001,
      'longitude': 4.914976,
      'zoom': 16
    },
    'id': 8
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/14.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg'
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6,
    'type': 'apartment',
    'bedrooms': 3,
    'maxAdults': 8,
    'price': 274,
    'goods': [
      'Breakfast',
      'Washer',
      'Baby seat',
      'Fridge',
      'Air conditioning',
      'Towels',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 50.951361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'id': 9
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/12.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg'
    ],
    'title': 'The Pondhouse - A Magical Place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 111,
    'goods': [
      'Baby seat',
      'Breakfast',
      'Towels',
      'Air conditioning',
      'Laptop friendly workspace',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'id': 10
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg'
    ],
    'title': 'Tile House',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2,
    'type': 'hotel',
    'bedrooms': 4,
    'maxAdults': 7,
    'price': 313,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'id': 11
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/13.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg'
    ],
    'title': 'Wood and stone place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 3,
    'price': 291,
    'goods': [
      'Washer',
      'Air conditioning',
      'Towels',
      'Laptop friendly workspace',
      'Baby seat',
      'Breakfast',
      'Fridge'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 51.217402,
      'longitude': 6.7693140000000005,
      'zoom': 16
    },
    'id': 12
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/4.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg'
    ],
    'title': 'Beautiful & luxurious apartment at great location',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 8,
    'price': 441,
    'goods': [
      'Fridge',
      'Air conditioning',
      'Dishwasher',
      'Towels',
      'Washer',
      'Coffee machine',
      'Washing machine',
      'Baby seat',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 51.210402,
      'longitude': 6.798314,
      'zoom': 16
    },
    'id': 13
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/12.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg'
    ],
    'title': 'Beautiful & luxurious apartment at great location',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 5,
    'price': 141,
    'goods': [
      'Towels',
      'Air conditioning',
      'Laptop friendly workspace',
      'Washer',
      'Baby seat',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 53.565341000000004,
      'longitude': 9.978654,
      'zoom': 16
    },
    'id': 14
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/7.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg'
    ],
    'title': 'The Joshua Tree House',
    'isFavorite': false,
    'isPremium': true,
    'rating': 5,
    'type': 'apartment',
    'bedrooms': 3,
    'maxAdults': 3,
    'price': 196,
    'goods': [
      'Towels',
      'Air conditioning',
      'Washer',
      'Breakfast',
      'Laptop friendly workspace',
      'Baby seat'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 50.867557,
      'longitude': 4.339697,
      'zoom': 16
    },
    'id': 15
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/14.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    'title': 'The Pondhouse - A Magical Place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 262,
    'goods': [
      'Air conditioning',
      'Washer',
      'Breakfast',
      'Towels',
      'Baby seat',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 52.388540000000006,
      'longitude': 4.899976,
      'zoom': 16
    },
    'id': 16
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/13.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg'
    ],
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': false,
    'rating': 5,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 8,
    'price': 869,
    'goods': [
      'Towels',
      'Fridge',
      'Laptop friendly workspace',
      'Breakfast',
      'Dishwasher',
      'Washer',
      'Air conditioning',
      'Baby seat',
      'Washing machine',
      'Coffee machine'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'id': 17
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/10.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 175,
    'goods': [
      'Washer',
      'Baby seat',
      'Towels',
      'Breakfast',
      'Laptop friendly workspace',
      'Air conditioning'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 50.835556999999994,
      'longitude': 4.354697,
      'zoom': 16
    },
    'id': 18
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/9.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg'
    ],
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': false,
    'rating': 5,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 243,
    'goods': [
      'Washer',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'id': 19
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/5.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1,
    'type': 'apartment',
    'bedrooms': 5,
    'maxAdults': 7,
    'price': 112,
    'goods': [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 52.37854,
      'longitude': 4.894976,
      'zoom': 16
    },
    'id': 20
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/15.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': true,
    'rating': 5,
    'type': 'hotel',
    'bedrooms': 3,
    'maxAdults': 9,
    'price': 289,
    'goods': [
      'Air conditioning',
      'Breakfast',
      'Baby seat',
      'Washer',
      'Towels',
      'Fridge',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 9.994654,
      'zoom': 16
    },
    'id': 21
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/13.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg'
    ],
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 254,
    'goods': [
      'Baby seat',
      'Breakfast',
      'Air conditioning',
      'Washer',
      'Towels',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 52.37554,
      'longitude': 4.9019759999999994,
      'zoom': 16
    },
    'id': 22
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/4.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg'
    ],
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.1,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 151,
    'goods': [
      'Air conditioning',
      'Breakfast',
      'Laptop friendly workspace',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 53.529341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'id': 23
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 271,
    'goods': [
      'Air conditioning',
      'Fridge',
      'Washer',
      'Towels',
      'Baby seat',
      'Dishwasher',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 50.959361,
      'longitude': 6.978974,
      'zoom': 16
    },
    'id': 24
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/10.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg'
    ],
    'title': 'The house among olive ',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2,
    'type': 'house',
    'bedrooms': 2,
    'maxAdults': 4,
    'price': 528,
    'goods': [
      'Air conditioning',
      'Fridge',
      'Towels',
      'Washer',
      'Coffee machine',
      'Breakfast',
      'Baby seat',
      'Laptop friendly workspace',
      'Dishwasher'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'id': 25
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/8.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg'
    ],
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'type': 'hotel',
    'bedrooms': 2,
    'maxAdults': 7,
    'price': 493,
    'goods': [
      'Coffee machine',
      'Laptop friendly workspace',
      'Air conditioning',
      'Dishwasher',
      'Washer',
      'Breakfast',
      'Baby seat',
      'Fridge',
      'Towels'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 52.35754,
      'longitude': 4.9179759999999995,
      'zoom': 16
    },
    'id': 26
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/3.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg'
    ],
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 292,
    'goods': [
      'Air conditioning',
      'Breakfast',
      'Laptop friendly workspace',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 52.36854,
      'longitude': 4.887976,
      'zoom': 16
    },
    'id': 27
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/17.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg'
    ],
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 238,
    'goods': [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Air conditioning'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'id': 28
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg'
    ],
    'title': 'The Joshua Tree House',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3,
    'type': 'house',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 492,
    'goods': [
      'Baby seat',
      'Air conditioning',
      'Breakfast',
      'Washer',
      'Fridge',
      'Laptop friendly workspace',
      'Towels'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 48.846610000000005,
      'longitude': 2.374499,
      'zoom': 16
    },
    'id': 29
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/5.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg'
    ],
    'title': 'Nice, cozy, warm big bed apartment',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3,
    'type': 'apartment',
    'bedrooms': 1,
    'maxAdults': 4,
    'price': 431,
    'goods': [
      'Washer',
      'Laptop friendly workspace',
      'Air conditioning',
      'Dishwasher',
      'Fridge',
      'Baby seat',
      'Breakfast',
      'Towels',
      'Coffee machine'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'id': 30
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/19.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 196,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'id': 31
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/14.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg'
    ],
    'title': 'Beautiful & luxurious apartment at great location',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6,
    'type': 'hotel',
    'bedrooms': 4,
    'maxAdults': 8,
    'price': 463,
    'goods': [
      'Laptop friendly workspace',
      'Air conditioning',
      'Washer',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'id': 32
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/14.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg'
    ],
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 5,
    'price': 188,
    'goods': [
      'Towels',
      'Washer',
      'Fridge',
      'Coffee machine',
      'Dishwasher',
      'Breakfast',
      'Laptop friendly workspace',
      'Air conditioning',
      'Baby seat'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'location': {
      'latitude': 51.222402,
      'longitude': 6.786314,
      'zoom': 16
    },
    'id': 33
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/12.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    'title': 'The house among olive ',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5,
    'type': 'apartment',
    'bedrooms': 2,
    'maxAdults': 2,
    'price': 366,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 10.001654,
      'zoom': 16
    },
    'id': 34
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/14.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.7,
    'type': 'hotel',
    'bedrooms': 4,
    'maxAdults': 5,
    'price': 291,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 50.844556999999995,
      'longitude': 4.346697,
      'zoom': 16
    },
    'id': 35
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg'
    ],
    'title': 'Beautiful & luxurious apartment at great location',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 221,
    'goods': [
      'Washer',
      'Breakfast',
      'Laptop friendly workspace',
      'Air conditioning'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'id': 36
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/7.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg'
    ],
    'title': 'The house among olive ',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5,
    'type': 'hotel',
    'bedrooms': 3,
    'maxAdults': 9,
    'price': 292,
    'goods': [
      'Baby seat',
      'Towels',
      'Breakfast',
      'Washer',
      'Air conditioning',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.009654000000001,
      'zoom': 16
    },
    'id': 37
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/16.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg'
    ],
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2,
    'type': 'apartment',
    'bedrooms': 3,
    'maxAdults': 7,
    'price': 239,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer',
      'Dishwasher',
      'Towels',
      'Fridge',
      'Air conditioning',
      'Baby seat'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 50.842557,
      'longitude': 4.3536969999999995,
      'zoom': 16
    },
    'id': 38
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg'
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.8,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 5,
    'price': 357,
    'goods': [
      'Air conditioning',
      'Fridge',
      'Coffee machine',
      'Towels',
      'Baby seat',
      'Washer',
      'Breakfast',
      'Laptop friendly workspace',
      'Dishwasher',
      'Washing machine'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 53.574341000000004,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'id': 39
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/1.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg'
    ],
    'title': 'Tile House',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 114,
    'goods': [
      'Dishwasher',
      'Fridge',
      'Towels',
      'Washer',
      'Air conditioning',
      'Baby seat',
      'Laptop friendly workspace',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 50.828556999999996,
      'longitude': 4.362697,
      'zoom': 16
    },
    'id': 40
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/11.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg'
    ],
    'title': 'Canal View Prinsengracht',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.7,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 194,
    'goods': [
      'Laptop friendly workspace',
      'Washer',
      'Air conditioning',
      'Breakfast',
      'Baby seat'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 52.35054,
      'longitude': 4.908976,
      'zoom': 16
    },
    'id': 41
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/10.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2,
    'type': 'house',
    'bedrooms': 1,
    'maxAdults': 10,
    'price': 739,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'id': 42
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/19.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg'
    ],
    'title': 'Canal View Prinsengracht',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9,
    'type': 'hotel',
    'bedrooms': 4,
    'maxAdults': 8,
    'price': 415,
    'goods': [
      'Towels',
      'Dishwasher',
      'Air conditioning',
      'Washing machine',
      'Breakfast',
      'Washer',
      'Coffee machine',
      'Baby seat',
      'Fridge',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'id': 43
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/20.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg'
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.2,
    'type': 'apartment',
    'bedrooms': 4,
    'maxAdults': 6,
    'price': 378,
    'goods': [
      'Washer',
      'Breakfast',
      'Laptop friendly workspace',
      'Coffee machine',
      'Baby seat',
      'Towels',
      'Dishwasher',
      'Air conditioning',
      'Fridge'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 52.389540000000004,
      'longitude': 4.883976,
      'zoom': 16
    },
    'id': 44
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg'
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 172,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 51.235402,
      'longitude': 6.800314,
      'zoom': 16
    },
    'id': 45
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg'
    ],
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4,
    'type': 'house',
    'bedrooms': 1,
    'maxAdults': 10,
    'price': 544,
    'goods': [
      'Laptop friendly workspace',
      'Fridge',
      'Baby seat',
      'Towels',
      'Breakfast',
      'Air conditioning',
      'Dishwasher',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16
    },
    'id': 46
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg'
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4,
    'type': 'house',
    'bedrooms': 2,
    'maxAdults': 8,
    'price': 488,
    'goods': [
      'Washer',
      'Towels',
      'Air conditioning',
      'Breakfast',
      'Laptop friendly workspace',
      'Baby seat',
      'Dishwasher',
      'Fridge',
      'Coffee machine'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 50.862556999999995,
      'longitude': 4.375697,
      'zoom': 16
    },
    'id': 47
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/6.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg'
    ],
    'title': 'Wood and stone place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 10,
    'price': 755,
    'goods': [
      'Baby seat',
      'Air conditioning',
      'Towels',
      'Dishwasher',
      'Washer',
      'Fridge',
      'Laptop friendly workspace',
      'Breakfast',
      'Washing machine',
      'Coffee machine'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'id': 48
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/17.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    'title': 'The Joshua Tree House',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 5,
    'price': 420,
    'goods': [
      'Baby seat',
      'Washer',
      'Coffee machine',
      'Dishwasher',
      'Fridge',
      'Breakfast',
      'Laptop friendly workspace',
      'Air conditioning',
      'Towels'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 50.865556999999995,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'id': 49
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/17.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg'
    ],
    'title': 'The Joshua Tree House',
    'isFavorite': false,
    'isPremium': false,
    'rating': 5,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 5,
    'price': 225,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 52.36554,
      'longitude': 4.911976,
      'zoom': 16
    },
    'id': 50
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/13.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.5,
    'type': 'apartment',
    'bedrooms': 4,
    'maxAdults': 5,
    'price': 267,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Fridge',
      'Dishwasher',
      'Coffee machine',
      'Washing machine',
      'Washer',
      'Air conditioning',
      'Towels',
      'Baby seat'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'location': {
      'latitude': 50.860557,
      'longitude': 4.376697,
      'zoom': 16
    },
    'id': 51
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/4.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg'
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 217,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast',
      'Washer',
      'Air conditioning'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 48.865610000000004,
      'longitude': 2.350499,
      'zoom': 16
    },
    'id': 52
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/6.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg'
    ],
    'title': 'The house among olive ',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 6,
    'price': 928,
    'goods': [
      'Air conditioning',
      'Baby seat',
      'Breakfast',
      'Towels',
      'Laptop friendly workspace',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 53.540341000000005,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'id': 53
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg'
    ],
    'title': 'The house among olive ',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7,
    'type': 'hotel',
    'bedrooms': 1,
    'maxAdults': 7,
    'price': 159,
    'goods': [
      'Baby seat',
      'Washer',
      'Laptop friendly workspace',
      'Air conditioning',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 50.869557,
      'longitude': 4.332697,
      'zoom': 16
    },
    'id': 54
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/10.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg'
    ],
    'title': 'Canal View Prinsengracht',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4,
    'type': 'apartment',
    'bedrooms': 4,
    'maxAdults': 4,
    'price': 107,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'id': 55
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/14.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg'
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1,
    'type': 'hotel',
    'bedrooms': 2,
    'maxAdults': 3,
    'price': 370,
    'goods': [
      'Laptop friendly workspace',
      'Washer',
      'Baby seat',
      'Air conditioning',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 51.237402,
      'longitude': 6.779314,
      'zoom': 16
    },
    'id': 56
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/15.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 175,
    'goods': [
      'Breakfast',
      'Towels',
      'Laptop friendly workspace',
      'Baby seat',
      'Washer',
      'Air conditioning'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 48.87861,
      'longitude': 2.357499,
      'zoom': 16
    },
    'id': 57
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/10.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 9,
    'price': 944,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 51.236402000000005,
      'longitude': 6.784314,
      'zoom': 16
    },
    'id': 58
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/7.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 5,
    'price': 754,
    'goods': [
      'Washer',
      'Air conditioning',
      'Baby seat',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'id': 59
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/9.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg'
    ],
    'title': 'Perfectly located Castro',
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 164,
    'goods': [
      'Breakfast',
      'Towels',
      'Washer',
      'Air conditioning',
      'Baby seat',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 51.239402000000005,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'id': 60
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/7.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg'
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2,
    'type': 'hotel',
    'bedrooms': 4,
    'maxAdults': 9,
    'price': 287,
    'goods': [
      'Air conditioning',
      'Coffee machine',
      'Breakfast',
      'Towels',
      'Laptop friendly workspace',
      'Dishwasher',
      'Cable TV',
      'Baby seat',
      'Washing machine',
      'Washer',
      'Fridge'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    'location': {
      'latitude': 50.827557,
      'longitude': 4.336697,
      'zoom': 16
    },
    'id': 61
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/17.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg'
    ],
    'title': 'Wood and stone place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 282,
    'goods': [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 50.852557,
      'longitude': 4.3376969999999995,
      'zoom': 16
    },
    'id': 62
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg'
    ],
    'title': 'The house among olive ',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.3,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 288,
    'goods': [
      'Baby seat',
      'Fridge',
      'Towels',
      'Breakfast',
      'Dishwasher',
      'Air conditioning',
      'Washer',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 50.918461,
      'longitude': 6.969974,
      'zoom': 16
    },
    'id': 63
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6,
    'type': 'apartment',
    'bedrooms': 3,
    'maxAdults': 4,
    'price': 320,
    'goods': [
      'Coffee machine',
      'Fridge',
      'Baby seat',
      'Dishwasher',
      'Laptop friendly workspace',
      'Air conditioning',
      'Towels',
      'Breakfast',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 50.945361,
      'longitude': 6.962974,
      'zoom': 16
    },
    'id': 64
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/8.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg'
    ],
    'title': 'The Pondhouse - A Magical Place',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.4,
    'type': 'apartment',
    'bedrooms': 1,
    'maxAdults': 9,
    'price': 123,
    'goods': [
      'Baby seat',
      'Laptop friendly workspace',
      'Fridge',
      'Towels',
      'Air conditioning',
      'Breakfast',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 48.877610000000004,
      'longitude': 2.333499,
      'zoom': 16
    },
    'id': 65
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/5.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg'
    ],
    'title': 'Amazing and Extremely Central Flat',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 246,
    'goods': [
      'Air conditioning',
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 53.550341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'id': 66
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/6.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg'
    ],
    'title': 'The house among olive ',
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.5,
    'type': 'apartment',
    'bedrooms': 2,
    'maxAdults': 9,
    'price': 222,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 50.917361,
      'longitude': 6.977974,
      'zoom': 16
    },
    'id': 67
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/7.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg'
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.6,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 1,
    'price': 177,
    'goods': [
      'Fridge',
      'Baby seat',
      'Towels',
      'Air conditioning',
      'Laptop friendly workspace',
      'Breakfast',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'id': 68
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/17.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg'
    ],
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 229,
    'goods': [
      'Washer',
      'Laptop friendly workspace',
      'Towels',
      'Baby seat',
      'Breakfast',
      'Washing machine',
      'Dishwasher',
      'Fridge',
      'Coffee machine',
      'Air conditioning'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 48.84461,
      'longitude': 2.374499,
      'zoom': 16
    },
    'id': 69
  },
  {
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/9.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg'
    ],
    'title': 'Perfectly located Castro',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9,
    'type': 'hotel',
    'bedrooms': 2,
    'maxAdults': 8,
    'price': 168,
    'goods': [
      'Fridge',
      'Breakfast',
      'Laptop friendly workspace',
      'Baby seat',
      'Coffee machine',
      'Air conditioning',
      'Towels',
      'Washing machine',
      'Washer',
      'Dishwasher'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 9.999654000000001,
      'zoom': 16
    },
    'id': 70
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/14.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg'
    ],
    'title': 'Wood and stone place',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.3,
    'type': 'house',
    'bedrooms': 4,
    'maxAdults': 7,
    'price': 125,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 51.205402,
      'longitude': 6.7613140000000005,
      'zoom': 16
    },
    'id': 71
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/10.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg'
    ],
    'title': 'Canal View Prinsengracht',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'type': 'apartment',
    'bedrooms': 2,
    'maxAdults': 7,
    'price': 313,
    'goods': [
      'Fridge',
      'Air conditioning',
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Baby seat',
      'Towels',
      'Dishwasher'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      'latitude': 52.36354,
      'longitude': 4.911976,
      'zoom': 16
    },
    'id': 72
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/12.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg'
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.2,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 222,
    'goods': [
      'Washer',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'id': 73
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/18.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg'
    ],
    'title': 'House in countryside',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7,
    'type': 'hotel',
    'bedrooms': 5,
    'maxAdults': 6,
    'price': 143,
    'goods': [
      'Air conditioning',
      'Baby seat',
      'Towels',
      'Laptop friendly workspace',
      'Washer',
      'Breakfast'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 50.945361,
      'longitude': 6.935974,
      'zoom': 16
    },
    'id': 74
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/16.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg'
    ],
    'title': 'Waterfront with extraordinary view',
    'isFavorite': false,
    'isPremium': false,
    'rating': 5,
    'type': 'house',
    'bedrooms': 3,
    'maxAdults': 5,
    'price': 337,
    'goods': [
      'Air conditioning',
      'Laptop friendly workspace',
      'Baby seat',
      'Dishwasher',
      'Towels',
      'Coffee machine',
      'Fridge',
      'Washer',
      'Breakfast',
      'Washing machine'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 50.839557,
      'longitude': 4.346697,
      'zoom': 16
    },
    'id': 75
  },
  {
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/17.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 214,
    'goods': [
      'Towels',
      'Air conditioning',
      'Breakfast',
      'Baby seat',
      'Washer',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    'location': {
      'latitude': 51.228402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'id': 76
  },
  {
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/2.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    'title': 'Loft Studio in the Central Area',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 248,
    'goods': [
      'Washer',
      'Air conditioning',
      'Laptop friendly workspace',
      'Breakfast',
      'Towels',
      'Baby seat'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'id': 77
  },
  {
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/8.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg'
    ],
    'title': 'The Joshua Tree House',
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4,
    'type': 'hotel',
    'bedrooms': 4,
    'maxAdults': 6,
    'price': 251,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.886976,
      'zoom': 16
    },
    'id': 78
  },
  {
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/11.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg'
    ],
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.2,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 154,
    'goods': [
      'Air conditioning',
      'Baby seat',
      'Washer',
      'Breakfast',
      'Laptop friendly workspace'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'id': 79
  },
  {
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'previewImage': 'https://14.react.pages.academy/static/offer/6.jpg',
    'images': [
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg'
    ],
    'title': 'Canal View Prinsengracht',
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4,
    'type': 'room',
    'bedrooms': 1,
    'maxAdults': 2,
    'price': 120,
    'goods': [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer'
    ],
    'host': {
      'id': 25,
      'name': 'Angelina',
      'isPro': true,
      'avatarUrl': 'img/avatar-angelina.jpg'
    },
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'id': 80
  }
];

export default offers;
