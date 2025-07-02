

// schemas/partenaire.ts

export default {
  name: "partenaire",
  title: "Partenaires",
  type: "document",
  fields: [
    { name: "entreprise", title: "Nom de l'entreprise", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "telephone", title: "Téléphone", type: "string" },
    { name: "siteWeb", title: "Site Web", type: "url" },
    { name: "message", title: "Message", type: "text" },
    { name: "dateSoumission", title: "Date de soumission", type: "datetime" },

    // ✅ Champs pour affichage public
    { name: "logo", title: "Logo", type: "image", options: { hotspot: true } },
    { name: "estApprouve", title: "Est approuvé ?", type: "boolean", initialValue: false }
  ],
}