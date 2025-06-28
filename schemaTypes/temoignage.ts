export default {
  name: 'temoignage',
  title: 'Témoignage',
  type: 'document',
  fields: [
    { name: 'auteur', title: 'Auteur', type: 'string' },
    { name: 'contenu', title: 'Contenu', type: 'text' },
    {
  name: 'categorie',
  title: 'Catégorie',
  type: 'string',
  options: {
    list: [
      { title: 'Manucure', value: 'manucure' },
      { title: 'Pédicure', value: 'pedicure' },
      { title: 'Soins visage', value: 'soins-visage' },
    ],
  },
}, // ex: manucure, pédicure
  ],
}