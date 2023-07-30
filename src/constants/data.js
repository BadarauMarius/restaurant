import images from './images';

const wines = [
  {
    title: 'Spumant Blanc de Noirs Domeniile Panciu',
    price: '99.00 lei',
    tags: 'rosu sec | sticla',
  },
  {
    title: 'Tamaioasa Roza',
    price: '44.00 lei',
    tags: 'Roze,demidulce | Sticla',
  },
  {
    title: 'Ursus',
    price: '3.89 lei',
    tags: '4,5% alccol | 330 ml',
  },
  {
    title: 'Timisoreana Bruna',
    price: '3,21 lei',
    tags: '5% alcool | 330 ml',
  },
  {
    title: 'Bergenbier',
    price: '6.00 lei',
    tags: '4,5% alcool | 500 ml',
  },
];

const cocktails = [
  {
    title: 'Bellini clasic',
    price: '30.00 lei',
    tags: 'suc de piersici |  vin spumant |',
  },
  {
    title: "Martini",
    price: '50.00 lei',
    tags: 'vodka | vernut Dry | suc de lamaie | lamaie | masline',
  },
  {
    title: 'Gin Tonic',
    price: '40.00 lei',
    tags: 'gin | apa tonica | suc de lamaie | lichior de soc',
  },
  {
    title: 'French 75',
    price: '35.00 lei',
    tags: 'gheata | gin | suc de lamaie | sirop simplu',
  },
  {
    title: 'Mai tai',
    price: '45.00 lei',
    tags: 'rom roze | suc de portocale | suc de lamaie |rom brun',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Gustul de altadata',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Cel mai bun chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Omul anului in horeca',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Cel mai bun bistro',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
