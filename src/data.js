import img1 from './images/apart-5.jpg';
import img3 from './images/apart-7.jpg';
import img2 from './images/apart-6.jpg';

export const data = [
  {
    sys: {
      id: '1',
    },
    fields: {
      propertyTitle: 'Silverware apartments',
      slug: 'apartment-for-rent',
      location: 'Kilimani',
      price: 100,
      size: 200,
      rooms: 5,
      beds: 4,
      bathRooms: 6,
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
];
