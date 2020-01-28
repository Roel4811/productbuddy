export default function() {
  // this.urlPrefix = 'http://localhost:4200'
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.namespace = '/api';

  let selections = [{
    id: 1,
    type: 'selections',
    attributes: {
      name: "Selectie van Roel",
      productIds: [1, 2, 3]
    }
  }]

  let products = [{
    id: 1,
    type: 'products',
    attributes: {
      name: 'Babolat padel TS500',
      type: 'Padelrackets',
      brand: 'Babolat',
      price: 59.99,
      image: 'https://contents.mediadecathlon.com/p1250137/800x800/sq/tennisracket_volwassenen_tr_900_zwart_oranje_artengo_8488907_1250137.jpg?k=42c9d8c61ef05468427e0b4ce9548647',
      selectionIds: []
    }
  },
  {
    id: 2,
    type: 'products',
    attributes: {
      name: 'Babolat padel TX5000',
      type: 'Padelrackets',
      brand: 'Babolat',
      price: 119.99,
      image: 'https://contents.mediadecathlon.com/p1250137/800x800/sq/tennisracket_volwassenen_tr_900_zwart_oranje_artengo_8488907_1250137.jpg?k=42c9d8c61ef05468427e0b4ce9548647',
      selectionIds: []
    }
  },
  {
    id: 3,
    type: 'products',
    attributes: {
      name: 'Babolat padel TS200',
      type: 'Padelrackets',
      brand: 'Babolat',
      price: 89.99,
      image: 'https://contents.mediadecathlon.com/p1250137/800x800/sq/tennisracket_volwassenen_tr_900_zwart_oranje_artengo_8488907_1250137.jpg?k=42c9d8c61ef05468427e0b4ce9548647',
      selectionIds: []
    }
  }]

  this.get('/selections', () => {
    return { data: selections }
  })

  this.post('/selections', () => {
    return { data: null }
  })

  this.get('/selections/:id', (schema, request) => {
    let selection = selections.find(element => element.id === 1)
    return { data: selection }
  })

  this.get('/products', () => {
    return { data: products }
  })

  this.get('/products/:id', (schema, request) => {
    let product = products.find(element => element.id === 1)
    return { data: product }
  })
}
