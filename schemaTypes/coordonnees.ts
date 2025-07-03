// schemas/coordonnees.ts

export default {
  name: "coordonnees",
  title: "Coordonnées",
  type: "document",
  fields: [
    { name: "nom", type: "string", title: "Nom de l’entreprise" },
    { name: "email", type: "string", title: "E-mail" },
    { name: "telephone", type: "string", title: "Téléphone" },
    { name: "adresse", type: "text", title: "Adresse complète" },
    { name: "ville", type: "string", title: "Ville" },
    { name: "pays", type: "string", title: "Pays" },
    {
      name: "reseaux",
      title: "Réseaux sociaux",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "whatsapp", type: "string", title: "WhatsApp (numéro)" },
      ],
    },
  ],
}