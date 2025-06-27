export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string' },
    { name: 'reponse', title: 'Réponse', type: 'text' },
    { name: 'categorie', title: 'Catégorie', type: 'string' }, // ex: manucure, pédicure
  ],
}