import { v4 as uuid } from 'uuid';
import img1 from './images/apart-5.jpg';
import img3 from './images/apart-7.jpg';
import img2 from './images/apart-6.jpg';
import img4 from './images/apart-8.jpg';
import img5 from './images/apart-9.jpg';
import img6 from './images/apart-10.jpg';

const data = [
  {
    sys: {
      id: '1',
    },
    fields: {
      propertyTitle: 'Laurel Hill Suites',
      slug: 'apartment-for-rent',
      location: 'Kilimani',
      price: 100,
      size: 200,
      rooms: 5,
      beds: 4,
      bathRooms: 6,
      featured: true,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur.',
      otheAmenities: [
        'Fully Equipped Sky View Gym',
        'Rooftop Swimming Pool & Sunbathing Area',
        'Rooftop Gaming Room',
        'Rooftop Lounge',
        'Conference Room',
        'Sauna',
        'High-Speed Lifts',
        'Access Control System',
        'Generator for All Areas',
        'Borehole',
      ],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
      ],
    },
  },

  {
    sys: {
      id: '2',
    },
    fields: {
      propertyTitle: 'Denis Gardens',
      slug: 'house-for-sale',
      location: 'Ngong Road',
      price: 100,
      size: 200,
      rooms: 5,
      beds: 4,
      bathRooms: 6,
      featured: true,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur.',
      otheAmenities: [
        'Fully Equipped Sky View Gym',
        'Rooftop Swimming Pool & Sunbathing Area',
        'Rooftop Gaming Room',
        'Rooftop Lounge',
        'Conference Room',
        'Sauna',
        'High-Speed Lifts',
        'Access Control System',
        'Generator for All Areas',
        'Borehole',
      ],
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '3',
    },
    fields: {
      propertyTitle: 'Silverstone Kilimani',
      slug: 'land-for-sale',
      location: 'Ngong Road',
      price: 100,
      size: 200,
      rooms: 5,
      beds: 4,
      bathRooms: 6,
      featured: true,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur.',
      otheAmenities: [
        'Fully Equipped Sky View Gym',
        'Rooftop Swimming Pool & Sunbathing Area',
        'Rooftop Gaming Room',
        'Rooftop Lounge',
        'Conference Room',
        'Sauna',
        'High-Speed Lifts',
        'Access Control System',
        'Generator for All Areas',
        'Borehole',
      ],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '4',
    },
    fields: {
      propertyTitle: 'The Sun Apartments',
      slug: 'apartment-for-sale',
      location: 'Ngong Road',
      price: 100,
      size: 200,
      rooms: 5,
      beds: 4,
      bathRooms: 6,
      featured: true,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur.',
      otheAmenities: [
        'Fully Equipped Sky View Gym',
        'Rooftop Swimming Pool & Sunbathing Area',
        'Rooftop Gaming Room',
        'Rooftop Lounge',
        'Conference Room',
        'Sauna',
        'High-Speed Lifts',
        'Access Control System',
        'Generator for All Areas',
        'Borehole',
      ],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '5',
    },
    fields: {
      propertyTitle: 'MagicDash Apartments',
      slug: 'office-space-for-rent',
      location: 'Ngong Road',
      price: 100,
      size: 200,
      rooms: 5,
      beds: 4,
      bathRooms: 6,
      featured: true,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur.',
      otheAmenities: [
        'Fully Equipped Sky View Gym',
        'Rooftop Swimming Pool & Sunbathing Area',
        'Rooftop Gaming Room',
        'Rooftop Lounge',
        'Conference Room',
        'Sauna',
        'High-Speed Lifts',
        'Access Control System',
        'Generator for All Areas',
        'Borehole',
      ],
      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: '6',
    },
    fields: {
      propertyTitle: 'Greenville Gardens',
      slug: 'apartment-for-sale',
      location: 'Ngong Road',
      price: 100,
      size: 200,
      rooms: 5,
      beds: 4,
      bathRooms: 6,
      featured: true,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati sint in illo enim doloribus maxime reprehenderit maiores iste explicabo, ea veniam est ut? Iste facere vel accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel vero est totam quis, obcaecati doloremque velit modi commodi labore itaque corporis! Quibusdam sapiente consequuntur repudiandae incidunt laudantium, sed doloremque consequatur.',
      otheAmenities: [
        'Fully Equipped Sky View Gym',
        'Rooftop Swimming Pool & Sunbathing Area',
        'Rooftop Gaming Room',
        'Rooftop Lounge',
        'Conference Room',
        'Sauna',
        'High-Speed Lifts',
        'Access Control System',
        'Generator for All Areas',
        'Borehole',
      ],
      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
      ],
    },
  },
];

export const serviceData = {
  services: [
    {
      id: uuid(),
      serviceIcon: 'icon-bucket',
      serviceTitle: 'Gardening',
      serviceDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      serviceIcon: 'icon-office',
      serviceTitle: 'Property management',
      serviceDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      serviceIcon: 'icon-colours',
      serviceTitle: 'Landscaping',
      serviceDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      serviceIcon: 'icon-podcast',
      serviceTitle: 'Internet Services',
      serviceDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
  ],
};

export default data;
