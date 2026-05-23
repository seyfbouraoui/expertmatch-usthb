import { useState } from "react";

// --- Real Teachers Data (USTHB - Faculté des Sciences de la Terre) ---
const newTeachers = [
  {
    "id": 10,
    "nom": "Dalila Abba",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "dalila.abba@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 1
  },
  {
    "id": 11,
    "nom": "Fatima Aboub",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "fatima.aboub@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 2
  },
  {
    "id": 12,
    "nom": "Isma Abssi",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "isma.abssi@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 3
  },
  {
    "id": 13,
    "nom": "Abdelhafid Afalfiz",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "abdelhafid.afalfiz@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 4
  },
  {
    "id": 14,
    "nom": "Souheila Aib",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "souheila.aib@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 5
  },
  {
    "id": 15,
    "nom": "Saida Ait Djafer",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "saida.aitdjafer@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Hydrogéochimie",
      "Ressources en Eau",
      "Milieu Karstique",
      "Modélisation Hydrogéologique"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Hydrogéologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 6
  },
  {
    "id": 16,
    "nom": "Assia Ait Menguellet",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "assia.aitmenguellet@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 7
  },
  {
    "id": 17,
    "nom": "Amel Aklouf",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "amel.aklouf@usthb.dz",
    "competences": [
      "Télédétection",
      "Géographie Physique",
      "Planification Locale",
      "Cartographie",
      "SIG"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à Télédétection. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 8
  },
  {
    "id": 18,
    "nom": "Djamal Akziz",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "djamal.akziz@usthb.dz",
    "competences": [
      "Géographie Physique",
      "Risques Naturels",
      "Télédétection",
      "Cartographie",
      "Milieu Naturel"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Géographie Physique. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 9
  },
  {
    "id": 19,
    "nom": "Salah Eddine Ali Rahmani",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "salah.alirahmani@usthb.dz",
    "competences": [
      "Sédimentologie",
      "Stratigraphie",
      "Paléontologie",
      "Milieux Sédimentaires",
      "Bassin Sédimentaire"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Sédimentologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 10
  },
  {
    "id": 20,
    "nom": "Slimane Allal",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "slimane.allal@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement Sismique",
      "Prospection Géophysique",
      "Modélisation"
    ],
    "bio": "Maître assistant A en géophysique à l'USTHB. Travaille sur Géophysique dans le cadre de ses activités de recherche et d'enseignement.",
    "projets": 11
  },
  {
    "id": 21,
    "nom": "Malika Amara",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "malika.amara@usthb.dz",
    "competences": [
      "Télédétection",
      "Géographie Physique",
      "Planification Locale",
      "Cartographie",
      "SIG"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à Télédétection. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 12
  },
  {
    "id": 22,
    "nom": "Ismahane Amarni",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "ismahane.amarni@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 1
  },
  {
    "id": 23,
    "nom": "Lubna Amal Amir",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "lubna.amir@usthb.dz",
    "competences": [
      "Géophysique Pétrolière",
      "Sismique Réflexion",
      "Interprétation Sismique",
      "Géophysique Interne",
      "Gravimétrie"
    ],
    "bio": "Professeur au département de géophysique de l'USTHB. Expert reconnu en Géophysique Pétrolière, avec une contribution majeure à la recherche géophysique en Algérie et au Maghreb. Encadre des doctorants et collabore avec des institutions internationales.",
    "projets": 2
  },
  {
    "id": 24,
    "nom": "Saliha Amoura",
    "departement": "Géophysique",
    "grade": "Maître de Conférences B",
    "email": "saliha.amoura@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement du Signal",
      "Prospection",
      "Modélisation Géophysique"
    ],
    "bio": "Maître de conférences B au département de géophysique de l'USTHB. Spécialisé(e) en Géophysique, mène des travaux de recherche et contribue à la formation des étudiants en géophysique appliquée.",
    "projets": 3
  },
  {
    "id": 25,
    "nom": "Kamel Amri",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "kamel.amri@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 4
  },
  {
    "id": 26,
    "nom": "Yasmine Atmane",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "yasmine.atmane@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 5
  },
  {
    "id": 27,
    "nom": "Farid Atroune",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "farid.atroune@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Géologie Appliquée",
      "Ressources en Eau",
      "Karst",
      "Géologie Environnementale"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Hydrogéologie. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 6
  },
  {
    "id": 28,
    "nom": "Brahim Ayad",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "brahim.ayad@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 7
  },
  {
    "id": 29,
    "nom": "Chahnaz Azil",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "chahnaz.azil@usthb.dz",
    "competences": [
      "Aménagement Rural",
      "Gestion de l'Environnement",
      "Télédétection",
      "Développement Durable",
      "SIG"
    ],
    "bio": "Maître de conférences B spécialisée en Aménagement Rural au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 8
  },
  {
    "id": 30,
    "nom": "Ratiba Baouali",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "ratiba.baouali@usthb.dz",
    "competences": [
      "Géographie Physique",
      "Risques Naturels",
      "Télédétection",
      "Cartographie",
      "Milieu Naturel"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Géographie Physique. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 9
  },
  {
    "id": 31,
    "nom": "Amel Baziz",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "amel.baziz@usthb.dz",
    "competences": [
      "Aménagement du Territoire",
      "SIG",
      "Télédétection",
      "Planification Urbaine",
      "Développement Durable"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en Aménagement du Territoire, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 10
  },
  {
    "id": 32,
    "nom": "Mohamed Amine Bechkit",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "mohamed.bechkit@usthb.dz",
    "competences": [
      "Géophysique Pétrolière",
      "Sismique Réflexion",
      "Interprétation Sismique",
      "Géophysique Interne",
      "Gravimétrie"
    ],
    "bio": "Professeur au département de géophysique de l'USTHB. Expert reconnu en Géophysique Pétrolière, avec une contribution majeure à la recherche géophysique en Algérie et au Maghreb. Encadre des doctorants et collabore avec des institutions internationales.",
    "projets": 11
  },
  {
    "id": 33,
    "nom": "Mohamed Noureddine Beghoul",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "mohamed.beghoul@usthb.dz",
    "competences": [
      "Magnétisme",
      "Électromagnétisme",
      "Prospection Géophysique",
      "Géophysique de Subsurface",
      "Modélisation Géophysique"
    ],
    "bio": "Professeur au département de géophysique de l'USTHB. Expert reconnu en Magnétisme, avec une contribution majeure à la recherche géophysique en Algérie et au Maghreb. Encadre des doctorants et collabore avec des institutions internationales.",
    "projets": 12
  },
  {
    "id": 34,
    "nom": "Aboulyakdane Bekelli",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "aboulyakdane.bekelli@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 1
  },
  {
    "id": 35,
    "nom": "Lyes Belaid",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "lyes.belaid@usthb.dz",
    "competences": [
      "Planification Régionale",
      "Analyse Spatiale",
      "Géographie Sociale",
      "Développement Local",
      "SIG"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Planification Régionale. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 2
  },
  {
    "id": 36,
    "nom": "Abdelhakim Belaroui",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "abdelhakim.belaroui@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Hydrogéochimie",
      "Ressources en Eau",
      "Milieu Karstique",
      "Modélisation Hydrogéologique"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Hydrogéologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 3
  },
  {
    "id": 37,
    "nom": "Ilyes Belayadi",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "ilyes.belayadi@usthb.dz",
    "competences": [
      "Minéralogie",
      "Pétrographie",
      "Géochimie",
      "Ressources Minérales",
      "Géologie Appliquée"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Minéralogie, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 4
  },
  {
    "id": 38,
    "nom": "Djelloul Belhai",
    "departement": "Géologie",
    "grade": "Professeur Émérite",
    "email": "djelloul.belhai@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Pétrologie",
      "Magmatologie",
      "Géologie Alpine"
    ],
    "bio": "Professeur émérite de renom à l'USTHB, figure majeure de la géologie algérienne. Ses travaux sur Géologie Structurale ont profondément marqué la recherche géologique en Algérie. Auteur d'une œuvre scientifique considérable.",
    "projets": 5
  },
  {
    "id": 39,
    "nom": "Mohamed Belhai",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "mohamed.belhai@usthb.dz",
    "competences": [
      "Minéralogie",
      "Pétrographie",
      "Géochimie",
      "Ressources Minérales",
      "Géologie Appliquée"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Minéralogie, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 6
  },
  {
    "id": 40,
    "nom": "Nadia Beloucif",
    "departement": "Géologie",
    "grade": "Maître Assistant B",
    "email": "nadia.beloucif@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie",
      "Stratigraphie",
      "Pétrographie",
      "Géologie Régionale"
    ],
    "bio": "Maître assistant B au département de géologie de l'USTHB. Développe ses recherches sur Géologie tout en assurant des missions pédagogiques.",
    "projets": 7
  },
  {
    "id": 41,
    "nom": "Riad Ben El Khaznadji",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "riad.benelkhaznadji@usthb.dz",
    "competences": [
      "Minéralogie",
      "Pétrographie",
      "Géochimie",
      "Ressources Minérales",
      "Géologie Appliquée"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Minéralogie, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 8
  },
  {
    "id": 42,
    "nom": "Nadjet Benaissa",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "nadjet.benaissa@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 9
  },
  {
    "id": 43,
    "nom": "Hanafi Benali",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "hanafi.benali@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 10
  },
  {
    "id": 44,
    "nom": "Fateh Benalia",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "fateh.benalia@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 11
  },
  {
    "id": 45,
    "nom": "Imane Meriem Benbakhti",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "imane.benbakhti@usthb.dz",
    "competences": [
      "Minéralogie",
      "Pétrographie",
      "Géochimie",
      "Ressources Minérales",
      "Géologie Appliquée"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Minéralogie, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 12
  },
  {
    "id": 46,
    "nom": "Abderrahmane Bendaoud",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "abderrahmane.bendaoud@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 1
  },
  {
    "id": 47,
    "nom": "Fathi Bendiab",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "fathi.bendiab@usthb.dz",
    "competences": [
      "Géophysique Appliquée",
      "Méthodes Électriques",
      "Sismique",
      "Interprétation Géophysique",
      "SIG"
    ],
    "bio": "Maître assistant A en géophysique à l'USTHB. Travaille sur Géophysique Appliquée dans le cadre de ses activités de recherche et d'enseignement.",
    "projets": 2
  },
  {
    "id": 48,
    "nom": "Wassila Benguedah",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "wassila.benguedah@usthb.dz",
    "competences": [
      "Géographie Physique",
      "Risques Naturels",
      "Télédétection",
      "Cartographie",
      "Milieu Naturel"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Géographie Physique. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 3
  },
  {
    "id": 49,
    "nom": "Lynda Bensaadi",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "lynda.bensaadi@usthb.dz",
    "competences": [
      "Géophysique Appliquée",
      "Méthodes Électriques",
      "Sismique",
      "Interprétation Géophysique",
      "SIG"
    ],
    "bio": "Maître assistant A en géophysique à l'USTHB. Travaille sur Géophysique Appliquée dans le cadre de ses activités de recherche et d'enseignement.",
    "projets": 4
  },
  {
    "id": 50,
    "nom": "Leila Bensmain",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "leila.bensmain@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 5
  },
  {
    "id": 51,
    "nom": "Mohamed Cherif Berguig",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "mohamed.berguig@usthb.dz",
    "competences": [
      "Magnétisme",
      "Électromagnétisme",
      "Prospection Géophysique",
      "Géophysique de Subsurface",
      "Modélisation Géophysique"
    ],
    "bio": "Professeur au département de géophysique de l'USTHB. Expert reconnu en Magnétisme, avec une contribution majeure à la recherche géophysique en Algérie et au Maghreb. Encadre des doctorants et collabore avec des institutions internationales.",
    "projets": 6
  },
  {
    "id": 52,
    "nom": "Hanane Berkoune",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "hanane.berkoune@usthb.dz",
    "competences": [
      "SIG",
      "Cartographie",
      "Géographie Humaine",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à SIG. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 7
  },
  {
    "id": 53,
    "nom": "Naremane Berrahmane",
    "departement": "Géophysique",
    "grade": "Maître Assistant B",
    "email": "naremane.berrahmane@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement du Signal Sismique",
      "Prospection",
      "Modélisation"
    ],
    "bio": "Maître assistant B au département de géophysique. S'intéresse à Géophysique et contribue aux activités de recherche du laboratoire.",
    "projets": 8
  },
  {
    "id": 54,
    "nom": "Narimene Berrahmane",
    "departement": "Géophysique",
    "grade": "Maître Assistant B",
    "email": "narimene.berrahmane@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement du Signal Sismique",
      "Prospection",
      "Modélisation"
    ],
    "bio": "Maître assistant B au département de géophysique. S'intéresse à Géophysique et contribue aux activités de recherche du laboratoire.",
    "projets": 9
  },
  {
    "id": 55,
    "nom": "Mohand Bersi",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "mohand.bersi@usthb.dz",
    "competences": [
      "Sédimentologie",
      "Stratigraphie",
      "Paléontologie",
      "Milieux Sédimentaires",
      "Bassin Sédimentaire"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Sédimentologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 10
  },
  {
    "id": 56,
    "nom": "Salim Bouakline",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "salim.bouakline@usthb.dz",
    "competences": [
      "SIG",
      "Cartographie",
      "Géographie Humaine",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à SIG. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 11
  },
  {
    "id": 57,
    "nom": "Leila Bouchama",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "leila.bouchama@usthb.dz",
    "competences": [
      "Aménagement Rural",
      "Gestion de l'Environnement",
      "Télédétection",
      "Développement Durable",
      "SIG"
    ],
    "bio": "Maître de conférences B spécialisée en Aménagement Rural au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 12
  },
  {
    "id": 58,
    "nom": "Essia Boudjebieur",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "essia.boudjebieur@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 1
  },
  {
    "id": 59,
    "nom": "Amina Feriel Boudries",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "amina.boudries@usthb.dz",
    "competences": [
      "Télédétection",
      "Géographie Physique",
      "Planification Locale",
      "Cartographie",
      "SIG"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à Télédétection. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 2
  },
  {
    "id": 60,
    "nom": "Abdelmadjid Boufekane",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "abdelmadjid.boufekane@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Géologie Appliquée",
      "Ressources en Eau",
      "Karst",
      "Géologie Environnementale"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Hydrogéologie. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 3
  },
  {
    "id": 61,
    "nom": "Mebarka Bouguechtouli",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "mebarka.bouguechtouli@usthb.dz",
    "competences": [
      "Minéralogie",
      "Pétrographie",
      "Géochimie",
      "Ressources Minérales",
      "Géologie Appliquée"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Minéralogie, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 4
  },
  {
    "id": 62,
    "nom": "Abdelghafour Boukar",
    "departement": "Géophysique",
    "grade": "Maître de Conférences B",
    "email": "abdelghafour.boukar@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement du Signal",
      "Prospection",
      "Modélisation Géophysique"
    ],
    "bio": "Maître de conférences B au département de géophysique de l'USTHB. Spécialisé(e) en Géophysique, mène des travaux de recherche et contribue à la formation des étudiants en géophysique appliquée.",
    "projets": 5
  },
  {
    "id": 63,
    "nom": "Sabrina Boulhila",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant B",
    "email": "sabrina.boulhila@usthb.dz",
    "competences": [
      "SIG",
      "Géographie",
      "Cartographie",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant B en géographie et aménagement du territoire. S'intéresse à SIG dans le cadre de ses activités d'enseignement et de recherche à l'USTHB.",
    "projets": 6
  },
  {
    "id": 64,
    "nom": "Seyfallah Bouraoui",
    "departement": "Géophysique",
    "grade": "Maître de Conférences A",
    "email": "seyfallah.bouraoui@usthb.dz",
    "competences": [
      "Sismologie",
      "Traitement Sismique",
      "Sismotectonique",
      "Géophysique Interne",
      "Modélisation"
    ],
    "bio": "Maître de conférences A en géophysique. Ses travaux de recherche portent sur Sismologie. Participe à des projets nationaux de surveillance et d'évaluation des risques géophysiques.",
    "projets": 7
  },
  {
    "id": 65,
    "nom": "Rabea Bouras",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "rabea.bouras@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 8
  },
  {
    "id": 66,
    "nom": "Wassila Souad Bourouiba",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "wassila.bourouiba@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 9
  },
  {
    "id": 67,
    "nom": "Abdelhak Boutaleb",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "abdelhak.boutaleb@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 10
  },
  {
    "id": 68,
    "nom": "Makhlouf Boutiba",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "makhlouf.boutiba@usthb.dz",
    "competences": [
      "Urbanisme",
      "Cartographie",
      "Gestion des Risques Naturels",
      "Politique Territoriale",
      "Géographie Humaine"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en Urbanisme, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 11
  },
  {
    "id": 69,
    "nom": "Rabah Boutrika",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "rabah.boutrika@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Hydrogéochimie",
      "Ressources en Eau",
      "Milieu Karstique",
      "Modélisation Hydrogéologique"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Hydrogéologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 12
  },
  {
    "id": 70,
    "nom": "Djamel Bouzid",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant B",
    "email": "djamel.bouzid@usthb.dz",
    "competences": [
      "SIG",
      "Géographie",
      "Cartographie",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant B en géographie et aménagement du territoire. S'intéresse à SIG dans le cadre de ses activités d'enseignement et de recherche à l'USTHB.",
    "projets": 1
  },
  {
    "id": 71,
    "nom": "Serhane Brahmi",
    "departement": "Géophysique",
    "grade": "Maître de Conférences B",
    "email": "serhane.brahmi@usthb.dz",
    "competences": [
      "Électromagnétisme",
      "Géophysique Appliquée",
      "Méthodes Géophysiques",
      "Interprétation",
      "Sismique"
    ],
    "bio": "Maître de conférences B au département de géophysique de l'USTHB. Spécialisé(e) en Électromagnétisme, mène des travaux de recherche et contribue à la formation des étudiants en géophysique appliquée.",
    "projets": 2
  },
  {
    "id": 72,
    "nom": "Sarah Chabane",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "sarah.chabane@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 3
  },
  {
    "id": 73,
    "nom": "Ismahane Chaouche",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "ismahane.chaouche@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 4
  },
  {
    "id": 74,
    "nom": "Ghani Cheikh Lounis",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "ghani.cheikhlounis@usthb.dz",
    "competences": [
      "Pétrologie",
      "Géochimie",
      "Volcanologie",
      "Magmatologie",
      "Métallogénie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Pétrologie. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 5
  },
  {
    "id": 75,
    "nom": "Ouahiba Chelabi",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "ouahiba.chelabi@usthb.dz",
    "competences": [
      "Télédétection",
      "Géographie Physique",
      "Planification Locale",
      "Cartographie",
      "SIG"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à Télédétection. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 6
  },
  {
    "id": 76,
    "nom": "Karim Cheniki",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "karim.cheniki@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 7
  },
  {
    "id": 77,
    "nom": "Malika Chentout",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "malika.chentout@usthb.dz",
    "competences": [
      "Pétrographie",
      "Minéralogie",
      "Géochimie",
      "Roches Cristallines",
      "Géologie Régionale"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Pétrographie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 8
  },
  {
    "id": 78,
    "nom": "Malika Chibane",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "malika.chibane@usthb.dz",
    "competences": [
      "Géographie Physique",
      "Risques Naturels",
      "Télédétection",
      "Cartographie",
      "Milieu Naturel"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Géographie Physique. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 9
  },
  {
    "id": 79,
    "nom": "Brahim Chibane",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "brahim.chibane@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 10
  },
  {
    "id": 80,
    "nom": "Souad Chikh",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "souad.chikh@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 11
  },
  {
    "id": 81,
    "nom": "Mohammed Chikh Baelhadj",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "mohammed.chikhbaelhadj@usthb.dz",
    "competences": [
      "Géophysique Appliquée",
      "Méthodes Électriques",
      "Sismique",
      "Interprétation Géophysique",
      "SIG"
    ],
    "bio": "Maître assistant A en géophysique à l'USTHB. Travaille sur Géophysique Appliquée dans le cadre de ses activités de recherche et d'enseignement.",
    "projets": 12
  },
  {
    "id": 82,
    "nom": "Sofiane Dahmani",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "sofiane.dahmani@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 1
  },
  {
    "id": 83,
    "nom": "Khadidja Dahmani",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "khadidja.dahmani@usthb.dz",
    "competences": [
      "Minéralogie",
      "Pétrographie",
      "Géochimie",
      "Ressources Minérales",
      "Géologie Appliquée"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Minéralogie, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 2
  },
  {
    "id": 84,
    "nom": "Anissa Dahoumane",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "anissa.dahoumane@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 3
  },
  {
    "id": 85,
    "nom": "Assia Djebbar",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "assia.djebbar@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 4
  },
  {
    "id": 86,
    "nom": "Farida Djeda",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "farida.djeda@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 5
  },
  {
    "id": 87,
    "nom": "Djafar Djeffal",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "djafar.djeffal@usthb.dz",
    "competences": [
      "Géographie Physique",
      "Risques Naturels",
      "Télédétection",
      "Cartographie",
      "Milieu Naturel"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Géographie Physique. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 6
  },
  {
    "id": 88,
    "nom": "Abdelhadi Djeldjeli",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "abdelhadi.djeldjeli@usthb.dz",
    "competences": [
      "SIG",
      "Cartographie",
      "Aménagement Urbain",
      "Télédétection",
      "Géographie Appliquée"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur SIG. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 7
  },
  {
    "id": 89,
    "nom": "Safouane Djemai",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "safouane.djemai@usthb.dz",
    "competences": [
      "Pétrologie",
      "Géochimie",
      "Volcanologie",
      "Magmatologie",
      "Métallogénie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Pétrologie. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 8
  },
  {
    "id": 90,
    "nom": "Fetta Djender",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "fetta.djender@usthb.dz",
    "competences": [
      "SIG",
      "Cartographie",
      "Géographie Humaine",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à SIG. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 9
  },
  {
    "id": 91,
    "nom": "Faiza Djouadi",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "faiza.djouadi@usthb.dz",
    "competences": [
      "SIG",
      "Cartographie",
      "Aménagement Urbain",
      "Télédétection",
      "Géographie Appliquée"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur SIG. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 10
  },
  {
    "id": 92,
    "nom": "Sid Ali Doukkari",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "sid.doukkari@usthb.dz",
    "competences": [
      "Pétrographie",
      "Minéralogie",
      "Géochimie",
      "Roches Cristallines",
      "Géologie Régionale"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Pétrographie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 11
  },
  {
    "id": 93,
    "nom": "Ammar Drias",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "ammar.drias@usthb.dz",
    "competences": [
      "SIG",
      "Géographie Physique",
      "Climatologie",
      "Gestion des Ressources Naturelles",
      "Développement Régional"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en SIG, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 12
  },
  {
    "id": 94,
    "nom": "Hanane El Manai",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "hanane.elmanai@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 1
  },
  {
    "id": 95,
    "nom": "Nadia Fernane",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "nadia.fernane@usthb.dz",
    "competences": [
      "Aménagement Rural",
      "Gestion de l'Environnement",
      "Télédétection",
      "Développement Durable",
      "SIG"
    ],
    "bio": "Maître de conférences B spécialisée en Aménagement Rural au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 2
  },
  {
    "id": 96,
    "nom": "El-Hocine Fettous",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "el-hocine.fettous@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Hydrogéochimie",
      "Ressources en Eau",
      "Milieu Karstique",
      "Modélisation Hydrogéologique"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Hydrogéologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 3
  },
  {
    "id": 97,
    "nom": "Ali Eddine Foudil Bouras",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "ali.foudilbouras@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 4
  },
  {
    "id": 98,
    "nom": "Nabila Gaci",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "nabila.gaci@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 5
  },
  {
    "id": 99,
    "nom": "Zoubir Gaci",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "zoubir.gaci@usthb.dz",
    "competences": [
      "Géophysique Appliquée",
      "Méthodes Électriques",
      "Sismique",
      "Interprétation Géophysique",
      "SIG"
    ],
    "bio": "Maître assistant A en géophysique à l'USTHB. Travaille sur Géophysique Appliquée dans le cadre de ses activités de recherche et d'enseignement.",
    "projets": 6
  },
  {
    "id": 100,
    "nom": "Saida Gana",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "saida.gana@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 7
  },
  {
    "id": 101,
    "nom": "Abdeldjalil Goumrasa",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "abdeldjalil.goumrasa@usthb.dz",
    "competences": [
      "Aménagement Rural",
      "Gestion de l'Environnement",
      "Télédétection",
      "Développement Durable",
      "SIG"
    ],
    "bio": "Maître de conférences B spécialisée en Aménagement Rural au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 8
  },
  {
    "id": 102,
    "nom": "Mokhtar Guerfi",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "mokhtar.guerfi@usthb.dz",
    "competences": [
      "SIG",
      "Géographie Physique",
      "Climatologie",
      "Gestion des Ressources Naturelles",
      "Développement Régional"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en SIG, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 9
  },
  {
    "id": 103,
    "nom": "Mohamed Said Guettouche",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "mohamed.guettouche@usthb.dz",
    "competences": [
      "Aménagement du Territoire",
      "SIG",
      "Télédétection",
      "Planification Urbaine",
      "Développement Durable"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en Aménagement du Territoire, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 10
  },
  {
    "id": 104,
    "nom": "Celia Hadj Ali",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "celia.hadjali@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 11
  },
  {
    "id": 105,
    "nom": "Faiza Hallouz",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "faiza.hallouz@usthb.dz",
    "competences": [
      "SIG",
      "Géographie Physique",
      "Climatologie",
      "Gestion des Ressources Naturelles",
      "Développement Régional"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en SIG, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 12
  },
  {
    "id": 106,
    "nom": "Lynda Hamadane",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "lynda.hamadane@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 1
  },
  {
    "id": 107,
    "nom": "Rachid Hamdidouche",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "rachid.hamdidouche@usthb.dz",
    "competences": [
      "Pétrologie",
      "Géochimie",
      "Volcanologie",
      "Magmatologie",
      "Métallogénie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Pétrologie. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 2
  },
  {
    "id": 108,
    "nom": "Fatiha Hamouche",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "fatiha.hamouche@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Hydrogéochimie",
      "Ressources en Eau",
      "Milieu Karstique",
      "Modélisation Hydrogéologique"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Hydrogéologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 3
  },
  {
    "id": 109,
    "nom": "Abdelhamid Haouchine",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "abdelhamid.haouchine@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 4
  },
  {
    "id": 110,
    "nom": "Fatima Zohra Haouchine",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "fatima.haouchine@usthb.dz",
    "competences": [
      "Pétrologie",
      "Géochimie",
      "Volcanologie",
      "Magmatologie",
      "Métallogénie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Pétrologie. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 5
  },
  {
    "id": 111,
    "nom": "Mohamed Hassani",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "mohamed.hassani@usthb.dz",
    "competences": [
      "Géographie Physique",
      "Risques Naturels",
      "Télédétection",
      "Cartographie",
      "Milieu Naturel"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Géographie Physique. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 6
  },
  {
    "id": 112,
    "nom": "Soufiane Hattab",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "soufiane.hattab@usthb.dz",
    "competences": [
      "Aménagement du Territoire",
      "SIG",
      "Télédétection",
      "Planification Urbaine",
      "Développement Durable"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en Aménagement du Territoire, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 7
  },
  {
    "id": 113,
    "nom": "Mustapha Hellel",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "mustapha.hellel@usthb.dz",
    "competences": [
      "Pétrologie",
      "Géochimie",
      "Volcanologie",
      "Magmatologie",
      "Métallogénie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Pétrologie. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 8
  },
  {
    "id": 114,
    "nom": "Yacine Hemdane",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "yacine.hemdane@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Géologie Appliquée",
      "Ressources en Eau",
      "Karst",
      "Géologie Environnementale"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Hydrogéologie. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 9
  },
  {
    "id": 115,
    "nom": "Tiziri Idir",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "tiziri.idir@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 10
  },
  {
    "id": 116,
    "nom": "Mouloud Idres",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "mouloud.idres@usthb.dz",
    "competences": [
      "Géophysique Pétrolière",
      "Sismique Réflexion",
      "Interprétation Sismique",
      "Géophysique Interne",
      "Gravimétrie"
    ],
    "bio": "Professeur au département de géophysique de l'USTHB. Expert reconnu en Géophysique Pétrolière, avec une contribution majeure à la recherche géophysique en Algérie et au Maghreb. Encadre des doctorants et collabore avec des institutions internationales.",
    "projets": 11
  },
  {
    "id": 117,
    "nom": "Karim Ikhlefhoum",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "karim.ikhlefhoum@usthb.dz",
    "competences": [
      "Géographie Physique",
      "Risques Naturels",
      "Télédétection",
      "Cartographie",
      "Milieu Naturel"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Géographie Physique. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 12
  },
  {
    "id": 118,
    "nom": "Mouloud Issaad",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "mouloud.issaad@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 1
  },
  {
    "id": 119,
    "nom": "Souhila Issaad",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "souhila.issaad@usthb.dz",
    "competences": [
      "Pétrographie",
      "Minéralogie",
      "Géochimie",
      "Roches Cristallines",
      "Géologie Régionale"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Pétrographie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 2
  },
  {
    "id": 120,
    "nom": "Ourdia Kaben",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "ourdia.kaben@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 3
  },
  {
    "id": 121,
    "nom": "Jugurtha Kariche",
    "departement": "Géophysique",
    "grade": "Maître de Conférences A",
    "email": "jugurtha.kariche@usthb.dz",
    "competences": [
      "Prospection Géophysique",
      "Gravimétrie",
      "Magnétométrie",
      "Géophysique Appliquée",
      "Inversion Géophysique"
    ],
    "bio": "Maître de conférences A en géophysique. Ses travaux de recherche portent sur Prospection Géophysique. Participe à des projets nationaux de surveillance et d'évaluation des risques géophysiques.",
    "projets": 4
  },
  {
    "id": 122,
    "nom": "Touria Kentri",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "touria.kentri@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 5
  },
  {
    "id": 123,
    "nom": "Saci Kermani",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "saci.kermani@usthb.dz",
    "competences": [
      "Géographie Physique",
      "Risques Naturels",
      "Télédétection",
      "Cartographie",
      "Milieu Naturel"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Géographie Physique. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 6
  },
  {
    "id": 124,
    "nom": "Rachid Ketteb",
    "departement": "Géophysique",
    "grade": "Maître de Conférences B",
    "email": "rachid.ketteb@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement du Signal",
      "Prospection",
      "Modélisation Géophysique"
    ],
    "bio": "Maître de conférences B au département de géophysique de l'USTHB. Spécialisé(e) en Géophysique, mène des travaux de recherche et contribue à la formation des étudiants en géophysique appliquée.",
    "projets": 7
  },
  {
    "id": 125,
    "nom": "Fatma Khaldaoui",
    "departement": "Géophysique",
    "grade": "Maître de Conférences A",
    "email": "fatma.khaldaoui@usthb.dz",
    "competences": [
      "Prospection Géophysique",
      "Gravimétrie",
      "Magnétométrie",
      "Géophysique Appliquée",
      "Inversion Géophysique"
    ],
    "bio": "Maître de conférences A en géophysique. Ses travaux de recherche portent sur Prospection Géophysique. Participe à des projets nationaux de surveillance et d'évaluation des risques géophysiques.",
    "projets": 8
  },
  {
    "id": 126,
    "nom": "Radia Kherchouche",
    "departement": "Géophysique",
    "grade": "Maître Assistant B",
    "email": "radia.kherchouche@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement du Signal Sismique",
      "Prospection",
      "Modélisation"
    ],
    "bio": "Maître assistant B au département de géophysique. S'intéresse à Géophysique et contribue aux activités de recherche du laboratoire.",
    "projets": 9
  },
  {
    "id": 127,
    "nom": "Louardi Kherrour",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "louardi.kherrour@usthb.dz",
    "competences": [
      "Aménagement du Territoire",
      "SIG",
      "Télédétection",
      "Planification Urbaine",
      "Développement Durable"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en Aménagement du Territoire, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 10
  },
  {
    "id": 128,
    "nom": "Yamina Khichane",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "yamina.khichane@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement Sismique",
      "Prospection Géophysique",
      "Modélisation"
    ],
    "bio": "Maître assistant A en géophysique à l'USTHB. Travaille sur Géophysique dans le cadre de ses activités de recherche et d'enseignement.",
    "projets": 11
  },
  {
    "id": 129,
    "nom": "Sofiane Labar",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "sofiane.labar@usthb.dz",
    "competences": [
      "SIG",
      "Géographie Physique",
      "Climatologie",
      "Gestion des Ressources Naturelles",
      "Développement Régional"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en SIG, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 12
  },
  {
    "id": 130,
    "nom": "Aziz Laleg",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "aziz.laleg@usthb.dz",
    "competences": [
      "SIG",
      "Cartographie",
      "Géographie Humaine",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à SIG. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 1
  },
  {
    "id": 131,
    "nom": "Abdelhakim Lazouni",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "abdelhakim.lazouni@usthb.dz",
    "competences": [
      "Minéralogie",
      "Pétrographie",
      "Géochimie",
      "Ressources Minérales",
      "Géologie Appliquée"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Minéralogie, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 2
  },
  {
    "id": 132,
    "nom": "Radhia Legrioui",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "radhia.legrioui@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 3
  },
  {
    "id": 133,
    "nom": "Nadir Louchahi",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant B",
    "email": "nadir.louchahi@usthb.dz",
    "competences": [
      "SIG",
      "Géographie",
      "Cartographie",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant B en géographie et aménagement du territoire. S'intéresse à SIG dans le cadre de ses activités d'enseignement et de recherche à l'USTHB.",
    "projets": 4
  },
  {
    "id": 134,
    "nom": "Soraya Louerguioui",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "soraya.louerguioui@usthb.dz",
    "competences": [
      "Géophysique Pétrolière",
      "Sismique Réflexion",
      "Interprétation Sismique",
      "Géophysique Interne",
      "Gravimétrie"
    ],
    "bio": "Professeur au département de géophysique de l'USTHB. Expert reconnu en Géophysique Pétrolière, avec une contribution majeure à la recherche géophysique en Algérie et au Maghreb. Encadre des doctorants et collabore avec des institutions internationales.",
    "projets": 5
  },
  {
    "id": 135,
    "nom": "Nabila Maandi",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "nabila.maandi@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 6
  },
  {
    "id": 136,
    "nom": "Hind Madani",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "hind.madani@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 7
  },
  {
    "id": 137,
    "nom": "Djamel Maizi",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "djamel.maizi@usthb.dz",
    "competences": [
      "Pétrographie",
      "Minéralogie",
      "Géochimie",
      "Roches Cristallines",
      "Géologie Régionale"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Pétrographie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 8
  },
  {
    "id": 138,
    "nom": "Leila Mansour",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "leila.mansour@usthb.dz",
    "competences": [
      "SIG",
      "Géographie Physique",
      "Climatologie",
      "Gestion des Ressources Naturelles",
      "Développement Régional"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en SIG, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 9
  },
  {
    "id": 139,
    "nom": "Yassamina Meddi",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "yassamina.meddi@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 10
  },
  {
    "id": 140,
    "nom": "Samira Mendir",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "samira.mendir@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 11
  },
  {
    "id": 141,
    "nom": "Bouabdellah Menzoul",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "bouabdellah.menzoul@usthb.dz",
    "competences": [
      "Hydrogéologie",
      "Hydrogéochimie",
      "Ressources en Eau",
      "Milieu Karstique",
      "Modélisation Hydrogéologique"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Hydrogéologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 12
  },
  {
    "id": 142,
    "nom": "Fadila Mermoul",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "fadila.mermoul@usthb.dz",
    "competences": [
      "Sédimentologie",
      "Stratigraphie",
      "Paléontologie",
      "Milieux Sédimentaires",
      "Bassin Sédimentaire"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Sédimentologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 1
  },
  {
    "id": 143,
    "nom": "Aida Mesli",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "aida.mesli@usthb.dz",
    "competences": [
      "Télédétection",
      "Géographie Physique",
      "Planification Locale",
      "Cartographie",
      "SIG"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à Télédétection. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 2
  },
  {
    "id": 144,
    "nom": "Imene Metatla",
    "departement": "Géologie",
    "grade": "Maître Assistant B",
    "email": "imene.metatla@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie",
      "Stratigraphie",
      "Pétrographie",
      "Géologie Régionale"
    ],
    "bio": "Maître assistant B au département de géologie de l'USTHB. Développe ses recherches sur Géologie tout en assurant des missions pédagogiques.",
    "projets": 3
  },
  {
    "id": 145,
    "nom": "Abdenaceur Metouchi",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "abdenaceur.metouchi@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 4
  },
  {
    "id": 146,
    "nom": "Fariza Metsana",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "fariza.metsana@usthb.dz",
    "competences": [
      "Pétrographie",
      "Minéralogie",
      "Géochimie",
      "Roches Cristallines",
      "Géologie Régionale"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Pétrographie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 5
  },
  {
    "id": 147,
    "nom": "Malika Mokri",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "malika.mokri@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 6
  },
  {
    "id": 148,
    "nom": "Mohammad Nadir Naimi",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "mohammad.naimi@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 7
  },
  {
    "id": 149,
    "nom": "Abdelkrim Nemra",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "abdelkrim.nemra@usthb.dz",
    "competences": [
      "Pétrographie",
      "Minéralogie",
      "Géochimie",
      "Roches Cristallines",
      "Géologie Régionale"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Pétrographie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 8
  },
  {
    "id": 150,
    "nom": "Walid Rehal",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "walid.rehal@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 9
  },
  {
    "id": 151,
    "nom": "Mohamed Abdessamed Rezzaz",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "mohamed.rezzaz@usthb.dz",
    "competences": [
      "Aménagement du Territoire",
      "SIG",
      "Télédétection",
      "Planification Urbaine",
      "Développement Durable"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en Aménagement du Territoire, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 10
  },
  {
    "id": 152,
    "nom": "Djaber Riene",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant B",
    "email": "djaber.riene@usthb.dz",
    "competences": [
      "SIG",
      "Géographie",
      "Cartographie",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant B en géographie et aménagement du territoire. S'intéresse à SIG dans le cadre de ses activités d'enseignement et de recherche à l'USTHB.",
    "projets": 11
  },
  {
    "id": 153,
    "nom": "Hasna Saadi",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "hasna.saadi@usthb.dz",
    "competences": [
      "Télédétection",
      "Géographie Physique",
      "Planification Locale",
      "Cartographie",
      "SIG"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à Télédétection. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 12
  },
  {
    "id": 154,
    "nom": "Madjid Sadat",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant B",
    "email": "madjid.sadat@usthb.dz",
    "competences": [
      "SIG",
      "Géographie",
      "Cartographie",
      "Aménagement du Territoire",
      "Analyse Spatiale"
    ],
    "bio": "Maître assistant B en géographie et aménagement du territoire. S'intéresse à SIG dans le cadre de ses activités d'enseignement et de recherche à l'USTHB.",
    "projets": 1
  },
  {
    "id": 155,
    "nom": "Ratiba Sahoui",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "ratiba.sahoui@usthb.dz",
    "competences": [
      "Pétrographie",
      "Minéralogie",
      "Géochimie",
      "Roches Cristallines",
      "Géologie Régionale"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Pétrographie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 2
  },
  {
    "id": 156,
    "nom": "Amira Saich",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "amira.saich@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement Sismique",
      "Prospection Géophysique",
      "Modélisation"
    ],
    "bio": "Maître assistant A en géophysique à l'USTHB. Travaille sur Géophysique dans le cadre de ses activités de recherche et d'enseignement.",
    "projets": 3
  },
  {
    "id": 157,
    "nom": "Saddek Samai",
    "departement": "Géophysique",
    "grade": "Maître de Conférences B",
    "email": "saddek.samai@usthb.dz",
    "competences": [
      "Électromagnétisme",
      "Géophysique Appliquée",
      "Méthodes Géophysiques",
      "Interprétation",
      "Sismique"
    ],
    "bio": "Maître de conférences B au département de géophysique de l'USTHB. Spécialisé(e) en Électromagnétisme, mène des travaux de recherche et contribue à la formation des étudiants en géophysique appliquée.",
    "projets": 4
  },
  {
    "id": 158,
    "nom": "Leila Samai",
    "departement": "Géophysique",
    "grade": "Maître de Conférences B",
    "email": "leila.samai@usthb.dz",
    "competences": [
      "Géophysique",
      "Sismologie",
      "Traitement du Signal",
      "Prospection",
      "Modélisation Géophysique"
    ],
    "bio": "Maître de conférences B au département de géophysique de l'USTHB. Spécialisé(e) en Géophysique, mène des travaux de recherche et contribue à la formation des étudiants en géophysique appliquée.",
    "projets": 5
  },
  {
    "id": 159,
    "nom": "M'Hammed Setti",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "m'hammed.setti@usthb.dz",
    "competences": [
      "SIG",
      "Géographie Physique",
      "Climatologie",
      "Gestion des Ressources Naturelles",
      "Développement Régional"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en SIG, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 6
  },
  {
    "id": 160,
    "nom": "Khalil Souiher",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "khalil.souiher@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 7
  },
  {
    "id": 161,
    "nom": "Youcef Taibi",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "youcef.taibi@usthb.dz",
    "competences": [
      "Aménagement Rural",
      "Gestion de l'Environnement",
      "Télédétection",
      "Développement Durable",
      "SIG"
    ],
    "bio": "Maître de conférences B spécialisée en Aménagement Rural au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 8
  },
  {
    "id": 162,
    "nom": "Mohamed Tas",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "mohamed.tas@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 9
  },
  {
    "id": 163,
    "nom": "Mohamed Yacine Tebbouche",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "mohamed.tebbouche@usthb.dz",
    "competences": [
      "Sédimentologie",
      "Stratigraphie",
      "Paléontologie",
      "Milieux Sédimentaires",
      "Bassin Sédimentaire"
    ],
    "bio": "Maître de conférences A en géologie à l'USTHB. Ses recherches sont axées sur Sédimentologie. Participe à des projets de terrain et publie régulièrement dans des revues scientifiques indexées.",
    "projets": 10
  },
  {
    "id": 164,
    "nom": "Fella Teboub",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "fella.teboub@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie Géologique",
      "Stratigraphie",
      "Sédimentologie",
      "Pétrographie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Géologie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 11
  },
  {
    "id": 165,
    "nom": "Nouzha Tekkouk",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "nouzha.tekkouk@usthb.dz",
    "competences": [
      "Télédétection",
      "Géographie Physique",
      "Planification Locale",
      "Cartographie",
      "SIG"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à Télédétection. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 12
  },
  {
    "id": 166,
    "nom": "Katia Terni",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "katia.terni@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 1
  },
  {
    "id": 167,
    "nom": "Zahera Tfyeche",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître Assistant A",
    "email": "zahera.tfyeche@usthb.dz",
    "competences": [
      "Télédétection",
      "Géographie Physique",
      "Planification Locale",
      "Cartographie",
      "SIG"
    ],
    "bio": "Maître assistant A au département de géographie de l'USTHB. Travaille sur des thématiques liées à Télédétection. Participe aux activités pédagogiques et de recherche du laboratoire.",
    "projets": 2
  },
  {
    "id": 168,
    "nom": "Chahira Dounia Amal Tigrine",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "chahira.tigrine@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 3
  },
  {
    "id": 169,
    "nom": "Hayet Yagouni",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "hayet.yagouni@usthb.dz",
    "competences": [
      "Aménagement Rural",
      "Gestion de l'Environnement",
      "Télédétection",
      "Développement Durable",
      "SIG"
    ],
    "bio": "Maître de conférences B spécialisée en Aménagement Rural au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 4
  },
  {
    "id": 170,
    "nom": "Samira Wissem Yahia Cherif",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences A",
    "email": "samira.yahiacherif@usthb.dz",
    "competences": [
      "Planification Régionale",
      "Analyse Spatiale",
      "Géographie Sociale",
      "Développement Local",
      "SIG"
    ],
    "bio": "Maître de conférences A au département de géographie de l'USTHB. Ses travaux portent sur Planification Régionale. Encadre des mémoires de master et contribue activement à des projets de recherche en partenariat.",
    "projets": 5
  },
  {
    "id": 171,
    "nom": "Yasmina Yahiat",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "yasmina.yahiat@usthb.dz",
    "competences": [
      "Magnétisme",
      "Électromagnétisme",
      "Prospection Géophysique",
      "Géophysique de Subsurface",
      "Modélisation Géophysique"
    ],
    "bio": "Professeur au département de géophysique de l'USTHB. Expert reconnu en Magnétisme, avec une contribution majeure à la recherche géophysique en Algérie et au Maghreb. Encadre des doctorants et collabore avec des institutions internationales.",
    "projets": 6
  },
  {
    "id": 172,
    "nom": "Imane Yaiche Temam",
    "departement": "Géologie",
    "grade": "Maître Assistant B",
    "email": "imane.yaichetemam@usthb.dz",
    "competences": [
      "Géologie",
      "Cartographie",
      "Stratigraphie",
      "Pétrographie",
      "Géologie Régionale"
    ],
    "bio": "Maître assistant B au département de géologie de l'USTHB. Développe ses recherches sur Géologie tout en assurant des missions pédagogiques.",
    "projets": 7
  },
  {
    "id": 173,
    "nom": "Nacima Youdjou",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "nacima.youdjou@usthb.dz",
    "competences": [
      "Minéralogie",
      "Géologie Structurale",
      "Géochimie",
      "Terrain Géologique",
      "Paléontologie"
    ],
    "bio": "Maître assistant A en géologie à l'USTHB. Ses activités de recherche portent sur Minéralogie. Impliqué(e) dans les sorties de terrain et les analyses de laboratoire.",
    "projets": 8
  },
  {
    "id": 174,
    "nom": "Lyes Zazi",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Maître de Conférences B",
    "email": "lyes.zazi@usthb.dz",
    "competences": [
      "SIG",
      "Urbanisme",
      "Analyse Spatiale",
      "Cartographie",
      "Géographie Urbaine"
    ],
    "bio": "Maître de conférences B spécialisée en SIG au sein du département de géographie et aménagement du territoire. Impliquée dans plusieurs projets de recherche sur le territoire algérien.",
    "projets": 9
  },
  {
    "id": 175,
    "nom": "Dalila Zekiri",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "dalila.zekiri@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Sédimentologie",
      "Minéralogie"
    ],
    "bio": "Professeur au département de géologie de l'USTHB, reconnu pour ses travaux sur Géologie Structurale. Dirige des projets de recherche nationaux et internationaux, et encadre de nombreux doctorants.",
    "projets": 10
  },
  {
    "id": 176,
    "nom": "Chawki Zerrouki",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "chawki.zerrouki@usthb.dz",
    "competences": [
      "Géologie Structurale",
      "Tectonique",
      "Stratigraphie",
      "Cartographie Géologique",
      "Sédimentologie"
    ],
    "bio": "Maître de conférences B au département de géologie. Spécialisé(e) en Géologie Structurale, contribue aux travaux de recherche du laboratoire et à l'encadrement des étudiants.",
    "projets": 11
  },
  {
    "id": 177,
    "nom": "Mahfoud Ziane",
    "departement": "Géographie et Aménagement du Territoire",
    "grade": "Professeur",
    "email": "mahfoud.ziane@usthb.dz",
    "competences": [
      "SIG",
      "Géographie Physique",
      "Climatologie",
      "Gestion des Ressources Naturelles",
      "Développement Régional"
    ],
    "bio": "Professeur en géographie et aménagement du territoire à l'USTHB. Spécialiste en SIG, avec une longue expérience dans la recherche et l'encadrement doctoral. Auteur de nombreuses publications nationales et internationales.",
    "projets": 12
  },
  {
    "id": 178,
    "nom": "Mohamed Hamoudi",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "hamoudi@usthb.dz",
    "competences": ["Sismologie", "Géophysique Interne", "Risques Majeurs", "Physique du Globe", "Modélisation"],
    "bio": "Professeur au département de géophysique de l'USTHB, directeur du laboratoire de géophysique (LGEOPH). Expert reconnu en sismologie et en risques majeurs. Encadre de nombreux doctorants et collabore avec des institutions internationales.",
    "projets": 14
  },
  {
    "id": 179,
    "nom": "Amira Saiche",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "amira_gp@yahoo.fr",
    "competences": ["Sismologie", "Risques Sismiques", "Géophysique Interne", "Traitement du Signal", "Modélisation"],
    "bio": "Maître assistant A en géophysique à l'USTHB. Travaille sur la sismologie dans le cadre de ses activités de recherche et d'enseignement au sein de l'équipe Sismologie et Risques Majeurs du LGEOPH.",
    "projets": 3
  },
  {
    "id": 180,
    "nom": "Leila Benhenni",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "lbenhenni@usthb.dz",
    "competences": ["Méthodes Potentielles", "Gravimétrie", "Magnétisme", "Géophysique de Subsurface", "Modélisation"],
    "bio": "Maître assistant A en géophysique à l'USTHB. Membre de l'équipe Méthodes Potentielles et Planétologie du LGEOPH. Travaille sur les méthodes potentielles appliquées à l'exploration géophysique.",
    "projets": 2
  },
  {
    "id": 181,
    "nom": "Walid Farhi",
    "departement": "Géophysique",
    "grade": "Maître de Conférences A",
    "email": "wfarhi86@gmail.com",
    "competences": ["Méthodes Potentielles", "Gravimétrie", "Magnétométrie", "Interprétation Géophysique", "Géophysique Pétrolière"],
    "bio": "Maître de conférences A en géophysique à l'USTHB. Membre de l'équipe Méthodes Potentielles et Planétologie. Ses recherches portent sur les méthodes potentielles appliquées à l'exploration en Algérie.",
    "projets": 5
  },
  {
    "id": 182,
    "nom": "Amar Boudella",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "boudellaamar@yahoo.com",
    "competences": ["Géophysique Pétrolière", "Diagraphies", "Sismique Réflexion", "Géophysique de Subsurface", "Modélisation"],
    "bio": "Professeur au département de géophysique de l'USTHB. Expert en géophysique de subsurface et diagraphies. Contribue significativement à la formation des ingénieurs en géophysique appliquée au secteur pétrolier.",
    "projets": 10
  },
  {
    "id": 183,
    "nom": "Yamina Aoumer",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "y.aoumer@gmail.com",
    "competences": ["Géophysique de Subsurface", "Sismique", "Traitement des Données", "Interprétation Géophysique", "Modélisation"],
    "bio": "Maître assistant A en géophysique à l'USTHB, membre de l'équipe Géophysique de Subsurface du LGEOPH. Travaille sur le traitement et l'interprétation des données géophysiques en subsurface.",
    "projets": 2
  },
  {
    "id": 184,
    "nom": "Zinealabidine Boumelit",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "boumelit-zinou@hotmail.fr",
    "competences": ["Géophysique de Subsurface", "Méthodes Électriques", "Sismique", "Prospection", "Modélisation"],
    "bio": "Maître assistant A en géophysique à l'USTHB, membre de l'équipe Géophysique de Subsurface. Mène des recherches sur les méthodes géophysiques appliquées à la prospection de subsurface.",
    "projets": 2
  },
  {
    "id": 185,
    "nom": "Naima Zaourar",
    "departement": "Géophysique",
    "grade": "Professeur",
    "email": "naimaboulasba@gmail.com",
    "competences": ["Géophysique Externe", "Électromagnétisme", "Ionosphère", "Géomagnétisme", "Modélisation"],
    "bio": "Professeur au département de géophysique de l'USTHB. Spécialiste en géophysique externe, ses travaux portent sur les phénomènes ionosphériques et géomagnétiques. Membre de l'équipe Géophysique Externe du LGEOPH.",
    "projets": 8
  },
  {
    "id": 186,
    "nom": "Abdelabasset Boulassel",
    "departement": "Géophysique",
    "grade": "Maître de Conférences B",
    "email": "boulasselsaabdelbasset@gmail.com",
    "competences": ["Géophysique Externe", "Électromagnétisme", "Géomagnétisme", "Traitement du Signal", "Modélisation"],
    "bio": "Maître de conférences B en géophysique à l'USTHB. Membre de l'équipe Géophysique Externe du LGEOPH. Travaille sur les méthodes électromagnétiques et l'étude du champ géomagnétique.",
    "projets": 3
  },
  {
    "id": 187,
    "nom": "Khadidja Moussaoui",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "khadidja.moussaoui@usthb.dz",
    "competences": ["Minéralogie", "Pétrographie", "Métallogénie", "Volcanisme", "Géochimie"],
    "bio": "Maître de conférences B au département de géologie de l'USTHB. Membre du laboratoire LMMA, équipe des minéralisations liées au volcanisme. Spécialisée en minéralogie et métallogénie.",
    "projets": 4
  },
  {
    "id": 188,
    "nom": "Fella Tebboub",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "fella.tebboub@usthb.dz",
    "competences": ["Géologie Structurale", "Métallogénie", "Géochimie", "Cartographie Géologique", "Terrain Géologique"],
    "bio": "Maître assistant A en géologie à l'USTHB. Membre du laboratoire LMMA, équipe des minéralisations de l'Est et du SW algérien. Participe aux travaux de terrain et aux analyses géochimiques.",
    "projets": 3
  },
  {
    "id": 189,
    "nom": "Abdelhak Talbi",
    "departement": "Géologie",
    "grade": "Professeur",
    "email": "abdelhak.talbi@usthb.dz",
    "competences": ["Pétrologie Magmatique", "Minéralogie", "Géochimie", "Métaux Rares", "Granites"],
    "bio": "Professeur au département de géologie de l'USTHB, membre du laboratoire LMMA. Expert en pétrologie des roches magmatiques et des granites à métaux rares en Algérie. Encadre des doctorants.",
    "projets": 9
  },
  {
    "id": 190,
    "nom": "Fadela Alligui",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "Fadila.alligui@gmail.com",
    "competences": ["Pétrologie Magmatique", "Roches Ignées", "Géochimie", "Minéralogie", "Magmatisme Algérien"],
    "bio": "Maître de conférences A en géologie à l'USTHB. Chef d'équipe Pétrologie des roches magmatiques au laboratoire LMMA. Spécialisée dans l'étude du magmatisme algérien et des roches ignées.",
    "projets": 6
  },
  {
    "id": 191,
    "nom": "Yacine Djediat",
    "departement": "Géologie",
    "grade": "Maître de Conférences A",
    "email": "yacine.djediat@usthb.dz",
    "competences": ["Géologie du Tell", "Marge Algérienne", "Géologie Structurale", "Stratigraphie", "Tectonique"],
    "bio": "Maître de conférences A en géologie à l'USTHB, chef d'équipe Tell et Marge Algérienne au laboratoire LGBSO. Ses travaux portent sur la géologie du Tell algérien et de la marge continentale.",
    "projets": 5
  },
  {
    "id": 192,
    "nom": "Souhila Bagdi Issad",
    "departement": "Géologie",
    "grade": "Maître de Conférences B",
    "email": "souhila.bagdiissad@usthb.dz",
    "competences": ["Géologie du Tell", "Stratigraphie", "Sédimentologie", "Cartographie Géologique", "Marge Continentale"],
    "bio": "Maître de conférences B en géologie à l'USTHB, membre de l'équipe Tell et Marge Algérienne du laboratoire LGBSO. Travaille sur la stratigraphie et la sédimentologie du Tell algérien.",
    "projets": 3
  },
  {
    "id": 193,
    "nom": "Naima Ouldhamouda",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "naima.ouldhamouda@usthb.dz",
    "competences": ["Géologie du Tell", "Stratigraphie", "Sédimentologie", "Paléontologie", "Terrain Géologique"],
    "bio": "Maître assistant A en géologie à l'USTHB, membre de l'équipe Tell et Marge Algérienne du laboratoire LGBSO. Participe aux travaux de terrain et aux analyses stratigraphiques.",
    "projets": 2
  },
  {
    "id": 194,
    "nom": "Wassila Bouruoiba",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "wassila.bouruoiba@usthb.dz",
    "competences": ["Macro-Paléontologie", "Paléoenvironnements", "Stratigraphie", "Terrain Géologique", "Sédimentologie"],
    "bio": "Maître assistant A en géologie à l'USTHB. Membre de l'équipe Macro-Paléontologie et Environnements de Dépôt du laboratoire LGBSO. Travaille sur les faunes fossiles et les paléoenvironnements.",
    "projets": 2
  },
  {
    "id": 195,
    "nom": "Hanane Elmanai",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "hanane.elmanai@usthb.dz",
    "competences": ["Micro-Paléontologie", "Stratigraphie", "Foraminifères", "Biostratigraphie", "Sédimentologie"],
    "bio": "Maître assistant A en géologie à l'USTHB. Membre de l'équipe Micro-Paléontologie et Stratigraphie du laboratoire LGBSO. Spécialisée dans l'étude des microfossiles et la biostratigraphie.",
    "projets": 2
  },
  {
    "id": 196,
    "nom": "Assia Khallas",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "assia.khallas@usthb.dz",
    "competences": ["Micro-Paléontologie", "Stratigraphie", "Biostratigraphie", "Paléoenvironnements", "Sédimentologie"],
    "bio": "Maître assistant A en géologie à l'USTHB. Membre de l'équipe Micro-Paléontologie et Stratigraphie du laboratoire LGBSO. Travaille sur la biostratigraphie et les paléoenvironnements sédimentaires.",
    "projets": 2
  },
  {
    "id": 197,
    "nom": "Asma Mofredj",
    "departement": "Géologie",
    "grade": "Maître Assistant A",
    "email": "asma.mofredj@usthb.dz",
    "competences": ["Micro-Paléontologie", "Stratigraphie", "Foraminifères", "Sédimentologie", "Analyse de Bassin"],
    "bio": "Maître assistant A en géologie à l'USTHB. Membre de l'équipe Micro-Paléontologie et Stratigraphie du laboratoire LGBSO. Ses recherches portent sur la micropaléontologie et la stratigraphie des séries algériennes.",
    "projets": 2
  },
  {
    "id": 198,
    "nom": "Lynda Ouahyoune",
    "departement": "Géophysique",
    "grade": "Maître Assistant A",
    "email": "ouahiuonelynda@gmail.com",
    "competences": ["Méthodes Potentielles", "Gravimétrie", "Magnétisme", "Traitement des Données Géophysiques", "Modélisation"],
    "bio": "Maître assistant A en géophysique à l'USTHB. Membre de l'équipe Méthodes Potentielles et Planétologie du LGEOPH. Ses travaux portent sur les méthodes potentielles appliquées à la géophysique régionale.",
    "projets": 2
  }
];

// --- Sample initial teachers (examples from other depts) ---
const initialTeachers = [
  {
    id: 1, nom: "Dr. Amina Belouizdad", departement: "Informatique", grade: "Maître de Conférences A",
    email: "a.belouizdad@usthb.dz",
    competences: ["Intelligence Artificielle", "Machine Learning", "Python", "Data Science", "Deep Learning"],
    bio: "Spécialiste en IA avec 12 ans d expérience. Auteure de 30+ publications dans des revues indexées.", projets: 8,
  },
  {
    id: 2, nom: "Pr. Karim Meziane", departement: "Génie Civil", grade: "Professeur",
    email: "k.meziane@usthb.dz",
    competences: ["BTP", "Structures", "Calcul Parasismique", "BIM", "Matériaux de Construction"],
    bio: "Expert en structures parasismiques. Consultant pour plusieurs projets d infrastructures en Algérie.", projets: 15,
  },
];

const allTeachers = [...initialTeachers, ...newTeachers];

// --- Utility ---
function initials(name) {
  return name.split(" ").filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}
function getGradeColor(grade) {
  if (grade.includes("Professeur")) return "#e8c15a";
  if (grade.includes("A")) return "#a78bfa";
  return "#6ee7b7";
}

function Avatar({ name, size = 56 }) {
  const colors = ["#1e3a5f", "#1a4731", "#4a1942", "#3d2b00", "#1a3548", "#2a1a3d", "#003d2b"];
  const idx = name.charCodeAt(0) % colors.length;
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: colors[idx], display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.32, fontWeight: 700, color: "#fff", border: "2px solid rgba(255,255,255,0.12)", flexShrink: 0, fontFamily: "DM Sans, sans-serif", letterSpacing: 1 }}>
      {initials(name)}
    </div>
  );
}

function Badge({ label, accent }) {
  return (
    <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, background: accent ? "rgba(99,220,180,0.15)" : "rgba(255,255,255,0.07)", color: accent ? "#63dcb4" : "#aab4c2", border: `1px solid ${accent ? "rgba(99,220,180,0.3)" : "rgba(255,255,255,0.1)"}`, letterSpacing: 0.3 }}>{label}</span>
  );
}

function ScoreMeter({ score }) {
  const pct = Math.round(score);
  const color = pct >= 75 ? "#63dcb4" : pct >= 50 ? "#f5c842" : "#f8816e";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 3, transition: "width 0.8s ease" }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 700, color, minWidth: 36, textAlign: "right" }}>{pct}%</span>
    </div>
  );
}

function HomePage({ onNav }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", textAlign: "center" }}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ fontSize: 13, letterSpacing: 4, color: "#63dcb4", textTransform: "uppercase", fontWeight: 600 }}>Plateforme de Valorisation</span>
      </div>
      <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", fontFamily: "Playfair Display, serif" }}>
        <span style={{ color: "#fff" }}>ExpertMatch</span><br />
        <span style={{ background: "linear-gradient(90deg, #63dcb4, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>USTHB</span>
      </h1>
      <p style={{ maxWidth: 540, color: "#8a96a8", fontSize: 17, lineHeight: 1.7, marginBottom: 48 }}>
        Connectez les compétences académiques de l'USTHB aux besoins des entreprises partenaires via l'intelligence artificielle.
      </p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        <button onClick={() => onNav("enseignants")} style={{ padding: "14px 36px", borderRadius: 12, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #1e6b52, #63dcb4)", color: "#0a1628", fontWeight: 700, fontSize: 15, boxShadow: "0 8px 32px rgba(99,220,180,0.25)" }}>
          👨‍🏫 Espace Enseignants
        </button>
        <button onClick={() => onNav("spa")} style={{ padding: "14px 36px", borderRadius: 12, border: "2px solid rgba(167,139,250,0.4)", cursor: "pointer", background: "rgba(167,139,250,0.08)", color: "#a78bfa", fontWeight: 700, fontSize: 15 }}>
          🏢 Espace SPA / Entreprise
        </button>
      </div>
      <div style={{ marginTop: 80, display: "flex", gap: 48, flexWrap: "wrap", justifyContent: "center" }}>
        {[["👩‍🔬", allTeachers.length, "Enseignants inscrits"], ["🧠", "IA", "Matching intelligent"], ["🏆", "Top 5", "Profils recommandés"]].map(([icon, val, lbl]) => (
          <div key={lbl} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>{icon}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#63dcb4" }}>{val}</div>
            <div style={{ fontSize: 12, color: "#5a6370", letterSpacing: 1, textTransform: "uppercase" }}>{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeachersPage({ teachers, onAdd, onSelect }) {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("Tous");
  const [page, setPage] = useState(1);
  const PER_PAGE = 24;
  const depts = ["Tous", ...Array.from(new Set(teachers.map(t => t.departement))).sort()];

  const filtered = teachers.filter(t => {
    const q = search.toLowerCase();
    const matchSearch = t.nom.toLowerCase().includes(q) || t.competences.some(c => c.toLowerCase().includes(q));
    const matchDept = dept === "Tous" || t.departement === dept;
    return matchSearch && matchDept;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleSearch(v) { setSearch(v); setPage(1); }
  function handleDept(v) { setDept(v); setPage(1); }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, fontFamily: "Playfair Display, serif" }}>Annuaire des Enseignants</h2>
          <p style={{ margin: "6px 0 0", color: "#5a6370", fontSize: 13 }}>{filtered.length} profil(s) — page {page}/{Math.max(1,totalPages)}</p>
        </div>
        <button onClick={onAdd} style={{ padding: "11px 24px", borderRadius: 10, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #1e6b52, #63dcb4)", color: "#0a1628", fontWeight: 700, fontSize: 14 }}>+ Ajouter</button>
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        <input value={search} onChange={e => handleSearch(e.target.value)} placeholder="Rechercher par nom ou compétence…"
          style={{ flex: 1, minWidth: 220, padding: "10px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#e8edf3", fontSize: 14, outline: "none" }} />
        <select value={dept} onChange={e => handleDept(e.target.value)} style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "#0f2540", color: "#e8edf3", fontSize: 13, cursor: "pointer" }}>
          {depts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {paginated.map(t => (
          <div key={t.id} onClick={() => onSelect(t)}
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 20, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,220,180,0.06)"; e.currentTarget.style.borderColor = "rgba(99,220,180,0.22)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
              <Avatar name={t.nom} size={48} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#e8edf3", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.nom}</div>
                <div style={{ fontSize: 11, color: "#5a6370", marginBottom: 3 }}>{t.departement}</div>
                <span style={{ fontSize: 10, fontWeight: 600, color: getGradeColor(t.grade), background: "rgba(255,255,255,0.05)", padding: "2px 7px", borderRadius: 5 }}>{t.grade}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {t.competences.slice(0, 3).map(c => <Badge key={c} label={c} />)}
              {t.competences.length > 3 && <Badge label={`+${t.competences.length - 3}`} />}
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
          <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page===1}
            style={{ padding: "8px 18px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: page===1?"#3a4455":"#e8edf3", cursor: page===1?"default":"pointer", fontWeight: 600 }}>← Précédent</button>
          {Array.from({length: totalPages}, (_, i) => i+1).filter(p => p===1||p===totalPages||Math.abs(p-page)<=2).map((p,i,arr) => (
            <span key={p}>
              {i>0 && arr[i-1]!==p-1 && <span style={{color:"#3a4455",padding:"0 4px"}}>…</span>}
              <button onClick={() => setPage(p)}
                style={{ padding: "8px 14px", borderRadius: 8, border: `1px solid ${p===page?"rgba(99,220,180,0.4)":"rgba(255,255,255,0.1)"}`, background: p===page?"rgba(99,220,180,0.1)":"transparent", color: p===page?"#63dcb4":"#aab4c2", cursor: "pointer", fontWeight: p===page?700:400 }}>{p}</button>
            </span>
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page===totalPages}
            style={{ padding: "8px 18px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: page===totalPages?"#3a4455":"#e8edf3", cursor: page===totalPages?"default":"pointer", fontWeight: 600 }}>Suivant →</button>
        </div>
      )}
    </div>
  );
}

function AddTeacherModal({ onClose, onSave }) {
  const [form, setForm] = useState({ nom: "", departement: "", grade: "Maître Assistant A", email: "", bio: "", competences: "" });
  const grades = ["Maître Assistant B","Maître Assistant A","Maître de Conférences B","Maître de Conférences A","Professeur","Professeur Émérite"];
  function handleSave() {
    if (!form.nom || !form.departement || !form.email) return;
    onSave({ ...form, id: Date.now(), projets: 0, competences: form.competences.split(",").map(c=>c.trim()).filter(Boolean) });
  }
  const inp = (label, key, type="text", opts=null) => (
    <div style={{marginBottom:14}}>
      <label style={{display:"block",fontSize:11,color:"#8a96a8",marginBottom:5,letterSpacing:0.5}}>{label}</label>
      {opts ? <select value={form[key]} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"#0f2540",color:"#e8edf3",fontSize:14}}>{opts.map(o=><option key={o}>{o}</option>)}</select>
      : type==="textarea" ? <textarea value={form[key]} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} rows={3} style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#e8edf3",fontSize:14,resize:"vertical",boxSizing:"border-box"}} />
      : <input value={form[key]} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} type={type} style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#e8edf3",fontSize:14,boxSizing:"border-box"}} />}
    </div>
  );
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:"#0d1f38",border:"1px solid rgba(255,255,255,0.1)",borderRadius:20,padding:28,width:"100%",maxWidth:500,maxHeight:"90vh",overflowY:"auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <h3 style={{margin:0,fontFamily:"Playfair Display,serif",fontSize:18}}>Nouveau Profil</h3>
          <button onClick={onClose} style={{background:"none",border:"none",color:"#8a96a8",fontSize:20,cursor:"pointer"}}>✕</button>
        </div>
        {inp("Nom complet","nom")}
        {inp("Département","departement")}
        {inp("Grade","grade","text",grades)}
        {inp("Email","email","email")}
        {inp("Biographie","bio","textarea")}
        {inp("Compétences (virgules)","competences","textarea")}
        <div style={{display:"flex",gap:10,marginTop:8}}>
          <button onClick={onClose} style={{flex:1,padding:"11px",borderRadius:9,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#8a96a8",cursor:"pointer",fontWeight:600}}>Annuler</button>
          <button onClick={handleSave} style={{flex:2,padding:"11px",borderRadius:9,border:"none",background:"linear-gradient(135deg,#1e6b52,#63dcb4)",color:"#0a1628",cursor:"pointer",fontWeight:700}}>Enregistrer</button>
        </div>
      </div>
    </div>
  );
}

function EditTeacherModal({ teacher, onClose, onSave }) {
  const grades = ["Maître Assistant B","Maître Assistant A","Maître de Conférences B","Maître de Conférences A","Professeur","Professeur Émérite"];
  const [form, setForm] = useState({
    nom: teacher.nom,
    departement: teacher.departement,
    grade: teacher.grade,
    email: teacher.email,
    bio: teacher.bio || "",
    competences: Array.isArray(teacher.competences) ? teacher.competences.join(", ") : teacher.competences,
    projets: teacher.projets || 0,
  });
  const [saved, setSaved] = useState(false);

  function handleSave() {
    if (!form.nom || !form.departement || !form.email) return;
    const updated = {
      ...teacher,
      ...form,
      projets: parseInt(form.projets) || 0,
      competences: form.competences.split(",").map(c => c.trim()).filter(Boolean),
    };
    onSave(updated);
    setSaved(true);
    setTimeout(() => { setSaved(false); onClose(); }, 900);
  }

  const inp = (label, key, type = "text", opts = null) => (
    <div style={{marginBottom:14}}>
      <label style={{display:"block",fontSize:11,color:"#8a96a8",marginBottom:5,letterSpacing:0.5}}>{label}</label>
      {opts
        ? <select value={form[key]} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"#0f2540",color:"#e8edf3",fontSize:14}}>{opts.map(o=><option key={o}>{o}</option>)}</select>
        : type==="textarea"
          ? <textarea value={form[key]} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} rows={3} style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#e8edf3",fontSize:14,resize:"vertical",boxSizing:"border-box"}} />
          : <input value={form[key]} onChange={e=>setForm(f=>({...f,[key]:e.target.value}))} type={type} style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#e8edf3",fontSize:14,boxSizing:"border-box"}} />
      }
    </div>
  );

  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.75)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:"#0d1f38",border:"1px solid rgba(167,139,250,0.25)",borderRadius:20,padding:28,width:"100%",maxWidth:520,maxHeight:"90vh",overflowY:"auto",boxShadow:"0 24px 60px rgba(0,0,0,0.5)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
          <div>
            <span style={{fontSize:11,letterSpacing:2,color:"#a78bfa",textTransform:"uppercase",fontWeight:600}}>Modifier le profil</span>
            <h3 style={{margin:"4px 0 0",fontFamily:"Playfair Display,serif",fontSize:17}}>{teacher.nom}</h3>
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",color:"#8a96a8",fontSize:20,cursor:"pointer"}}>✕</button>
        </div>
        {inp("Nom complet *", "nom")}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          <div>{inp("Département *", "departement")}</div>
          <div>{inp("Grade", "grade", "text", grades)}</div>
        </div>
        {inp("Email *", "email", "email")}
        {inp("Biographie", "bio", "textarea")}
        {inp("Compétences (séparées par virgules)", "competences", "textarea")}
        {inp("Nombre de projets", "projets", "number")}
        <div style={{display:"flex",gap:10,marginTop:8}}>
          <button onClick={onClose} style={{flex:1,padding:"11px",borderRadius:9,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"#8a96a8",cursor:"pointer",fontWeight:600}}>Annuler</button>
          <button onClick={handleSave} style={{flex:2,padding:"11px",borderRadius:9,border:"none",background:saved?"rgba(99,220,180,0.2)":"linear-gradient(135deg,#4c1d95,#a78bfa)",color:saved?"#63dcb4":"#fff",cursor:"pointer",fontWeight:700,transition:"all 0.3s"}}>
            {saved ? "✓ Enregistré !" : "💾 Enregistrer les modifications"}
          </button>
        </div>
      </div>
    </div>
  );
}

function TeacherProfile({ teacher, onBack, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [current, setCurrent] = useState(teacher);

  function handleSave(updated) {
    setCurrent(updated);
    if (onUpdate) onUpdate(updated);
  }

  return (
    <div style={{maxWidth:700,margin:"0 auto",padding:"32px 20px"}}>
      {editing && <EditTeacherModal teacher={current} onClose={()=>setEditing(false)} onSave={handleSave} />}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:"#63dcb4",cursor:"pointer",fontSize:14,display:"flex",alignItems:"center",gap:6}}>← Retour</button>
        <button onClick={()=>setEditing(true)}
          style={{padding:"8px 18px",borderRadius:9,border:"1px solid rgba(167,139,250,0.35)",background:"rgba(167,139,250,0.08)",color:"#a78bfa",cursor:"pointer",fontWeight:600,fontSize:13,display:"flex",alignItems:"center",gap:6}}>
          ✏️ Modifier le profil
        </button>
      </div>
      <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:20,padding:28}}>
        <div style={{display:"flex",gap:18,alignItems:"flex-start",marginBottom:22}}>
          <Avatar name={current.nom} size={68} />
          <div>
            <h2 style={{margin:"0 0 4px",fontSize:20,fontFamily:"Playfair Display,serif"}}>{current.nom}</h2>
            <p style={{margin:"0 0 6px",color:"#5a6370",fontSize:13}}>{current.departement} — USTHB</p>
            <span style={{fontSize:11,fontWeight:700,color:getGradeColor(current.grade),background:"rgba(255,255,255,0.06)",padding:"3px 10px",borderRadius:6}}>{current.grade}</span>
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:18,marginBottom:18}}>
          <h4 style={{margin:"0 0 8px",fontSize:11,letterSpacing:2,color:"#5a6370",textTransform:"uppercase"}}>Biographie</h4>
          <p style={{color:"#aab4c2",lineHeight:1.7,margin:0}}>{current.bio}</p>
        </div>
        <div style={{marginBottom:18}}>
          <h4 style={{margin:"0 0 10px",fontSize:11,letterSpacing:2,color:"#5a6370",textTransform:"uppercase"}}>Compétences</h4>
          <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
            {current.competences.map(c=><Badge key={c} label={c} accent />)}
          </div>
        </div>
        <div style={{display:"flex",gap:20,paddingTop:18,borderTop:"1px solid rgba(255,255,255,0.07)"}}>
          <div><span style={{fontSize:20,fontWeight:800,color:"#63dcb4"}}>{current.projets}</span><br /><span style={{fontSize:10,color:"#5a6370",letterSpacing:1}}>PROJETS</span></div>
          <div style={{display:"flex",alignItems:"center"}}><span style={{fontSize:13,color:"#aab4c2"}}>✉ {current.email}</span></div>
        </div>
      </div>
    </div>
  );
}

function SPAPage({ teachers }) {
  const [projet, setProjet] = useState({ titre: "", description: "", domaine: "", competencesRequises: "" });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleMatch() {
    if (!projet.description || !projet.competencesRequises) { setError("Veuillez remplir la description et les compétences requises."); return; }
    setError(""); setLoading(true); setResults(null);
    const teacherList = teachers.map(t => ({ id:t.id, nom:t.nom, departement:t.departement, grade:t.grade, competences:t.competences, bio:t.bio, projets:t.projets }));
    const prompt = `Tu es un expert en matching académique pour la SPA partenaire de l'USTHB.

Projet soumis :
- Titre : ${projet.titre || "Non précisé"}
- Domaine : ${projet.domaine || "Non précisé"}
- Description : ${projet.description}
- Compétences requises : ${projet.competencesRequises}

Enseignants disponibles (JSON) :
${JSON.stringify(teacherList, null, 2)}

Sélectionne les 5 meilleurs profils. Réponds UNIQUEMENT en JSON sans balises markdown :
{
  "top5": [
    { "id": <number>, "score": <0-100>, "raisons": "<2-3 phrases>", "competencesMatchees": [<string>] }
  ],
  "synthese": "<2-3 phrases>"
}`;
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY || "",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, messages: [{ role: "user", content: prompt }] }),
      });
      const data = await response.json();
      const text = data.content?.map(b => b.text||"").join("") || "";
      const clean = text.replace(/```json|```/g,"").trim();
      const parsed = JSON.parse(clean);
      const enriched = parsed.top5.map(r => ({ ...r, teacher: teachers.find(t => t.id === r.id) })).filter(r => r.teacher);
      setResults({ top5: enriched, synthese: parsed.synthese });
    } catch(e) { setError("Erreur lors de l'analyse IA. Vérifiez votre clé API dans .env (VITE_ANTHROPIC_KEY)."); }
    setLoading(false);
  }

  return (
    <div style={{maxWidth:860,margin:"0 auto",padding:"32px 20px"}}>
      <div style={{marginBottom:28}}>
        <span style={{fontSize:12,letterSpacing:3,color:"#a78bfa",textTransform:"uppercase",fontWeight:600}}>Espace Entreprise</span>
        <h2 style={{margin:"8px 0 6px",fontSize:26,fontWeight:800,fontFamily:"Playfair Display,serif"}}>Matching Intelligent de Projets</h2>
        <p style={{color:"#5a6370",fontSize:13}}>Décrivez votre projet et notre IA identifiera les 5 enseignants-chercheurs les plus qualifiés parmi {teachers.length} profils.</p>
      </div>
      <div style={{background:"rgba(167,139,250,0.05)",border:"1px solid rgba(167,139,250,0.15)",borderRadius:18,padding:24,marginBottom:24}}>
        <h3 style={{margin:"0 0 18px",fontSize:15,color:"#a78bfa",fontWeight:700}}>📋 Description du Projet</h3>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          <div>
            <label style={{display:"block",fontSize:11,color:"#8a96a8",marginBottom:5,letterSpacing:0.5}}>Titre du projet</label>
            <input value={projet.titre} onChange={e=>setProjet(p=>({...p,titre:e.target.value}))} placeholder="ex: Étude sismique de la région d'Alger"
              style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#e8edf3",fontSize:14,boxSizing:"border-box"}} />
          </div>
          <div>
            <label style={{display:"block",fontSize:11,color:"#8a96a8",marginBottom:5,letterSpacing:0.5}}>Domaine principal</label>
            <input value={projet.domaine} onChange={e=>setProjet(p=>({...p,domaine:e.target.value}))} placeholder="ex: Géophysique, Géologie, SIG…"
              style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#e8edf3",fontSize:14,boxSizing:"border-box"}} />
          </div>
        </div>
        <div style={{marginTop:14}}>
          <label style={{display:"block",fontSize:11,color:"#8a96a8",marginBottom:5,letterSpacing:0.5}}>Description détaillée *</label>
          <textarea value={projet.description} onChange={e=>setProjet(p=>({...p,description:e.target.value}))} rows={4}
            placeholder="Décrivez les objectifs, la problématique, le contexte et les livrables attendus…"
            style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#e8edf3",fontSize:14,resize:"vertical",boxSizing:"border-box"}} />
        </div>
        <div style={{marginTop:14}}>
          <label style={{display:"block",fontSize:11,color:"#8a96a8",marginBottom:5,letterSpacing:0.5}}>Compétences requises * (séparées par virgules)</label>
          <input value={projet.competencesRequises} onChange={e=>setProjet(p=>({...p,competencesRequises:e.target.value}))}
            placeholder="ex: Sismologie, SIG, Géologie Structurale, Télédétection…"
            style={{width:"100%",padding:"9px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.04)",color:"#e8edf3",fontSize:14,boxSizing:"border-box"}} />
        </div>
        {error && <p style={{color:"#f8816e",fontSize:13,marginTop:10}}>{error}</p>}
        <button onClick={handleMatch} disabled={loading} style={{marginTop:18,padding:"12px 28px",borderRadius:11,border:"none",cursor:loading?"default":"pointer",background:loading?"rgba(167,139,250,0.3)":"linear-gradient(135deg,#4c1d95,#a78bfa)",color:"#fff",fontWeight:700,fontSize:14,boxShadow:loading?"none":"0 8px 32px rgba(167,139,250,0.25)"}}>
          {loading ? "⏳ Analyse en cours…" : "🔍 Lancer l'analyse IA"}
        </button>
      </div>
      {results && (
        <div>
          {results.synthese && (
            <div style={{background:"rgba(99,220,180,0.06)",border:"1px solid rgba(99,220,180,0.2)",borderRadius:13,padding:18,marginBottom:22}}>
              <span style={{fontSize:11,letterSpacing:2,color:"#63dcb4",textTransform:"uppercase",fontWeight:700}}>🧠 Synthèse IA</span>
              <p style={{margin:"8px 0 0",color:"#aab4c2",lineHeight:1.7}}>{results.synthese}</p>
            </div>
          )}
          <h3 style={{margin:"0 0 18px",fontSize:17,fontWeight:700}}>🏆 Top 5 Profils Recommandés</h3>
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {results.top5.map((r,i) => (
              <div key={r.id} style={{background:i===0?"rgba(99,220,180,0.07)":"rgba(255,255,255,0.03)",border:`1px solid ${i===0?"rgba(99,220,180,0.25)":"rgba(255,255,255,0.08)"}`,borderRadius:14,padding:"18px 22px"}}>
                <div style={{display:"flex",gap:14,alignItems:"center",marginBottom:12}}>
                  <div style={{fontSize:24,minWidth:32,textAlign:"center"}}>{["🥇","🥈","🥉","4️⃣","5️⃣"][i]}</div>
                  <Avatar name={r.teacher.nom} size={44} />
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:15}}>{r.teacher.nom}</div>
                    <div style={{fontSize:11,color:"#5a6370"}}>{r.teacher.departement} — {r.teacher.grade}</div>
                  </div>
                  <div style={{width:150}}>
                    <div style={{fontSize:11,color:"#8a96a8",marginBottom:4}}>Score</div>
                    <ScoreMeter score={r.score} />
                  </div>
                </div>
                <p style={{margin:"0 0 10px",color:"#aab4c2",fontSize:13,lineHeight:1.6,paddingLeft:46}}>{r.raisons}</p>
                {r.competencesMatchees?.length>0 && (
                  <div style={{paddingLeft:46,display:"flex",flexWrap:"wrap",gap:5}}>
                    {r.competencesMatchees.map(c=><Badge key={c} label={"✓ "+c} accent />)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [teachers, setTeachers] = useState(allTeachers);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  function addTeacher(t) { setTeachers(ts=>[...ts,t]); setShowAddModal(false); }
  function updateTeacher(updated) { setTeachers(ts=>ts.map(t=>t.id===updated.id?updated:t)); setSelectedTeacher(updated); }
  function navTo(p) { setPage(p); setSelectedTeacher(null); }

  return (
    <div style={{ minHeight:"100vh", background:"#070f1d", color:"#e8edf3", fontFamily:"DM Sans, Segoe UI, sans-serif",
      backgroundImage:"radial-gradient(ellipse at 20% 20%, rgba(99,220,180,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(167,139,250,0.05) 0%, transparent 50%)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing:border-box; }
        ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:3px}
        input::placeholder,textarea::placeholder{color:#3a4455 !important}
        select option{background:#0d1f38}
      `}</style>
      <nav style={{position:"sticky",top:0,zIndex:50,background:"rgba(7,15,29,0.88)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255,255,255,0.07)",padding:"0 20px",display:"flex",alignItems:"center",gap:6,height:56}}>
        <button onClick={()=>navTo("home")} style={{background:"none",border:"none",color:"#63dcb4",fontWeight:800,fontSize:16,cursor:"pointer",marginRight:14,fontFamily:"Playfair Display,serif"}}>ExpertMatch</button>
        <span style={{color:"rgba(255,255,255,0.12)"}}>|</span>
        {[["enseignants","👨‍🏫 Enseignants"],["spa","🏢 Espace SPA"]].map(([id,label])=>(
          <button key={id} onClick={()=>navTo(id)} style={{background:page===id?"rgba(255,255,255,0.06)":"none",border:"none",color:page===id?"#e8edf3":"#5a6370",fontWeight:page===id?700:500,fontSize:13,padding:"5px 12px",borderRadius:7,cursor:"pointer"}}>{label}</button>
        ))}
        <div style={{marginLeft:"auto",fontSize:11,color:"#3a4455"}}>USTHB — Faculté des Sciences de la Terre</div>
      </nav>
      {page==="home" && <HomePage onNav={navTo} />}
      {page==="enseignants" && !selectedTeacher && <TeachersPage teachers={teachers} onAdd={()=>setShowAddModal(true)} onSelect={t=>setSelectedTeacher(t)} />}
      {page==="enseignants" && selectedTeacher && <TeacherProfile teacher={selectedTeacher} onBack={()=>setSelectedTeacher(null)} onUpdate={updateTeacher} />}
      {page==="spa" && <SPAPage teachers={teachers} />}
      {showAddModal && <AddTeacherModal onClose={()=>setShowAddModal(false)} onSave={addTeacher} />}
    </div>
  );
}
