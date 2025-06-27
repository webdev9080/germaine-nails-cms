export default {
  name: 'temoignage',
  title: 'Témoignage',
  type: 'document',
  fields: [
    { name: 'auteur', title: 'Auteur', type: 'string' },
    { name: 'contenu', title: 'Contenu', type: 'text' },
    { name: 'categorie', title: 'Catégorie', type: 'string' }, // ex: manucure, pédicure
  ],
}