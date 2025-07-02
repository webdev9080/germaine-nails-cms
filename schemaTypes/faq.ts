export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string' },
    { name: 'reponse', title: 'Réponse', type: 'text' },
    {
  name: 'categorie',
  title: 'Catégorie',
  type: 'string',
  options: {
    list: [
      { title: 'Manucure', value: 'manucure' },
      { title: 'Pédicure', value: 'pedicure' },
      { title: 'Soins visage', value: 'soins-visage' },
      { title: 'Partenaire', value: 'partenaire' },
    ],
  },
},
  ],
}