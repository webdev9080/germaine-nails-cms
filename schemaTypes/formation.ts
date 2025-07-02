
// schemas/formation.ts

export default {
  name: "formation",
  title: "Formations",
  type: "document",
  fields: [
    { name: "nom", type: "string", title: "Nom complet" },
    { name: "telephone", type: "string", title: "Téléphone" },
    { name: "email", type: "string", title: "Email" },
    { name: "formation", type: "string", title: "Formation choisie" },
    { name: "paiement", type: "string", title: "Mode de paiement" },
    { name: "message", type: "text", title: "Message ou remarque" },
    { name: "createdAt", type: "datetime", title: "Date d’inscription", initialValue: new Date().toISOString() }
  ]
};