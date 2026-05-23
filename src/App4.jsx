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

const extraTeachers = [
  {
    "id": 200,
    "nom": "Brahim ABBACI",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "brahim.abbaci@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 201,
    "nom": "Mourad ABCHICHE",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "mouradabchiche01@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 202,
    "nom": "Farouk ADDA",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "farouk.adda@usthb.edu.dz",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 203,
    "nom": "Aldjia AIDER",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "aider_aldjia@hotmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 204,
    "nom": "Yacine AIT AMRANE",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "yacinait@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "Professeur au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 205,
    "nom": "Sofiane Abdelhamid ATMANI",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "atmani.sofiane@hotmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 206,
    "nom": "Aicha BATOUL",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "aicha.batoul@usthb.edu.dz",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "Professeur au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 207,
    "nom": "Saida BEKHOUCHE",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "sbekhouche17@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 208,
    "nom": "Abdelaziz BELLAGH",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "bellaghabdelaziz2016@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 209,
    "nom": "Nasreddine BENBELKACEM",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "nasreddine.benbelkacem@usthb.edu.dz",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 210,
    "nom": "Nabil BENNENNI",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "nabil.bennenni@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 211,
    "nom": "Chahrazed BENOUARET",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "chahrabenoua@hotmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 212,
    "nom": "Boualem BENSEBA",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "boualem.benseba@usthb.edu.dz",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "Professeur au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 213,
    "nom": "Ilhem BENZAOUI",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "ibenzaoui@mail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 214,
    "nom": "Rachid BOUCHENNA",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "rachidbouchenna@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 215,
    "nom": "Chahrazade BOUYACOUB",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "cbouyacoub@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 216,
    "nom": "Redha CHELLAL",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "chellal.redha@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 217,
    "nom": "Karima DJAIB",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "kdjaib65@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 218,
    "nom": "Akila DJOUMAKH",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "adjoumakh@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 219,
    "nom": "Zahia Fatma FERNANE",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "fernanezahia@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 220,
    "nom": "Tarek GARICI",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "tarek.garici@usthb.edu.dz",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 221,
    "nom": "Saida HADDADA",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "benatiasaida@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 222,
    "nom": "Mohand Ouamar HERNANE",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "vdpgr.maths@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "Professeur au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 223,
    "nom": "Nora MAHLOUL",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "noramahloul@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 224,
    "nom": "Nadia MAMMA",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "nadia.mamma@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 225,
    "nom": "Youcef MAOUCHE",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "youcef.maouche@usthb.edu.dz",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 226,
    "nom": "Amel MAOUCHE",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "ryyyma@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 227,
    "nom": "Mohamed MECHACHA",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "mohamed.mechacha@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 228,
    "nom": "Rachida MOUHOUB",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "mouhoub636@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 229,
    "nom": "Razika NIBOUCHA",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "niboucha_razika@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 230,
    "nom": "Med-Salem REZAOUI",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "s_rezaoui@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "Professeur au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 231,
    "nom": "Schehrazad SELMANE",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "scselmane@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "Professeur au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 232,
    "nom": "Fadhila SIAHMED",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant B",
    "email": "siahmedfadila6@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 233,
    "nom": "Leila Schehrazade ZERROUKHAT",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "szerroukhat@yahoo.fr",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre de confErences B au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 234,
    "nom": "Nouara ZOUBIR",
    "departement": "AlgEbre et ThEorie des Nombres",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "znznouara42@gmail.com",
    "competences": [
      "AlgEbre",
      "ThEorie des Groupes",
      "ThEorie des Nombres",
      "AlgEbre Commutative",
      "Combinatoire"
    ],
    "bio": "MaEtre assistant A au dEpartement de AlgEbre et ThEorie des Nombres de l'USTHB.",
    "projets": 0
  },
  {
    "id": 235,
    "nom": "Soraya ABDELAZIZ",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "sorayaabd2@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 236,
    "nom": "Mahdi ABID",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "m_abid_99@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 237,
    "nom": "Naas ADJIMI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "naasadjimi@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 238,
    "nom": "Fatah AGGOUNE",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "agg-fatah@hotmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 239,
    "nom": "Mohammed AILI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "mohammed.aili@usthb.edu.dz",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 240,
    "nom": "Abdelhamid AINOUZ",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "ainouz@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 241,
    "nom": "Naima AISSA",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "aissa.naima@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 242,
    "nom": "Tarik ALIZIANE",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "taliziane@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 243,
    "nom": "Malika AMIR",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "a_malika07@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 244,
    "nom": "Ali ASSEM",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "albimaf@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 245,
    "nom": "Aldjia ATTALLAH",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "attallahwarda@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 246,
    "nom": "Abdelkhalek BALEHOUANE",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "abdelkhalek.balehouane@usthb.edu.dz",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 247,
    "nom": "Samir BEDROUNI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "sbedrouni@usthb.dz",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 248,
    "nom": "Abdelhakim Tarik BELGHAZI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "hbelghazi@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 249,
    "nom": "Mehdi BELRAOUTI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "mehdi.belraouti@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 250,
    "nom": "Imen BENABBAS",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "benabbas.im@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 251,
    "nom": "Abdelkader BENABIDALLAH",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "a_benabidallah@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 252,
    "nom": "Ahlem BENRAOUDA",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "benraouda.ahlem@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 253,
    "nom": "Tounsia BENZEKRI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "toubenzekri@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 254,
    "nom": "Samira BEYOUD",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "formathematic@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 255,
    "nom": "Sara BIOUT",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "srbiout@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 256,
    "nom": "Rachida BOUDJERADA",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "ra.boudjerada@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 257,
    "nom": "Amira BOUGHOUFALA",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "boughoufalaamira000@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 258,
    "nom": "Aissa BOUKAROU",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "boukarouaissa@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 259,
    "nom": "Habiba BOULAIKI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "habiba_boulaiki@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 260,
    "nom": "Hizia BOUNADJA",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "hiziabounadja2@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 261,
    "nom": "Radia BOURAOUI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "bouraouiradia2@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 262,
    "nom": "Khaled El Ghaouti BOUTARENE",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "boutarenekhaled@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 263,
    "nom": "Aicha CHAOUI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "chaoui_aicha2000@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 264,
    "nom": "Aicha CHAREF KHODJA",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "acharefkhodja@yahoo.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 265,
    "nom": "Souad CHENTOUT",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "chentout@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 266,
    "nom": "Djamel Eddine CHERIET",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "dcheriet@usthb.dz",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 267,
    "nom": "Ouahiba CHERIKH",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "ouahiba_cherikh@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 268,
    "nom": "Dahira DALI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "dddahira@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 269,
    "nom": "Mohamed DEFFAF",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "m.deffaf@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 270,
    "nom": "Nadjiba FOUKROUN",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "nfoukroun@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 271,
    "nom": "Nardjes GASMI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "nardjesgasmi11951@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 272,
    "nom": "Takoua HAFSI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "h.takamer5@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 273,
    "nom": "Noureddine HANNOUN",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "nhannoun@usthb.dz",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 274,
    "nom": "Anis HEZZAM",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "anis.hezzam@usthb.edu.dz",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 275,
    "nom": "Hichem KASRI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "h.kasri@hotmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 276,
    "nom": "M'hamed KESRI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "mkes33dz@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 277,
    "nom": "Arezki KESSI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "arkessi@yahoo.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 278,
    "nom": "Sofiane KHOUTIR",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "khoutir.math@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 279,
    "nom": "Toufik LAADJ",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "laadjt@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 280,
    "nom": "Adel LACHOURI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "lachouri.adel@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 281,
    "nom": "Samia LAKHAL",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "slakhal65@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 282,
    "nom": "Khaled M'HAMED-MESSAOUD",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "KMhamedMessaoud@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 283,
    "nom": "Abdelouahab MAHMOUDI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "aomahmoudi@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 284,
    "nom": "Sihem MAHOUI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "sihem.mahoui@usthb.edu.dz",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 285,
    "nom": "Mohammed MEDJDEN",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "mmedjden@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 286,
    "nom": "Sana MERZOUGUI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "souhane1982@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 287,
    "nom": "Chahrazed MEZOUED",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "ch_mezoued@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 288,
    "nom": "Zaina NEMMAR",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "z.nemmar1@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 289,
    "nom": "Walid OUKIL",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "woukil@usthb.dz",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 290,
    "nom": "Malika OUSSALAH",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "oussalah_m@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 291,
    "nom": "Hadjer OUZZANE",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "hadjer.ouzzane7@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 292,
    "nom": "Said Yazid RAFFED",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "ysraffed@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 293,
    "nom": "Dirar REBAH",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "dirarbath@yahoo.co.uk",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 294,
    "nom": "Samira RIHANI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "maths_samdz@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 295,
    "nom": "Fatiha SAADALLAH",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "saadallah.fatiha@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 296,
    "nom": "Lamia SEGHOUR",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "seghour.lamia@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 297,
    "nom": "Messaoud SOUILAH",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences A",
    "email": "msouilah@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 298,
    "nom": "Fatima Zahra TANI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "tani.fatimazahra@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 299,
    "nom": "Leila TERFASSE",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "l.sebaa2016@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 300,
    "nom": "Arezki TOUZALINE",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "Professeur",
    "email": "touzalinearezki214@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "Professeur au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 301,
    "nom": "Moussa YAHI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre de ConfErences B",
    "email": "moussa-yahi@hotmail.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 302,
    "nom": "Nawel ZAIDI",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "zaidinawel@gmail.com",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 303,
    "nom": "Youcef ZIAD",
    "departement": "Analyse",
    "faculte": "MathEmatiques",
    "grade": "MaEtre Assistant A",
    "email": "z.youcef89@yahoo.fr",
    "competences": [
      "Analyse MathEmatique",
      "Equations aux DErivEes Partielles",
      "Analyse Fonctionnelle",
      "Topologie",
      "Calcul des Variations"
    ],
    "bio": "MaEtre assistant A au dEpartement de Analyse de l'USTHB.",
    "projets": 0
  },
  {
    "id": 304,
    "nom": "Mohamed ALLAB",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "m.allab@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "Professeur au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 305,
    "nom": "Amar AMOKRANE",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "amokrane@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "Professeur au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 306,
    "nom": "Fatima BENAMARA",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.benamara@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 307,
    "nom": "Noureddine BENHARRATS",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "n.benharrats@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "Professeur au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 308,
    "nom": "Dalila BENSAID",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "d.bensaid@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 309,
    "nom": "Yasmina BOUDISSA",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "y.boudissa@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 310,
    "nom": "Leila BOUSSOUF",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "l.boussouf@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 311,
    "nom": "Hocine DERRAR",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "h.derrar@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 312,
    "nom": "Fatiha DJAFRI",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "f.djafri@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre assistant A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 313,
    "nom": "Abdelkrim FEKRACHE",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.fekrache@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 314,
    "nom": "Mohammed GRAINE",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "m.graine@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 315,
    "nom": "Nassima GUETTAF",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "n.guettaf@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre assistant A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 316,
    "nom": "Samir HANNANE",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "s.hannane@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 317,
    "nom": "Malika HOCINE",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "m.hocine@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 318,
    "nom": "Zineb KESSI",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "z.kessi@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre assistant A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 319,
    "nom": "Mohamed LAMROUS",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "m.lamrous@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "Professeur au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 320,
    "nom": "Hamid MANSOURI",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "h.mansouri@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "Professeur au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 321,
    "nom": "Nadia OUKRIF",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "n.oukrif@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 322,
    "nom": "Hafida RAHMOUN",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "h.rahmoun@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 323,
    "nom": "Abderrahmane SEGHOUR",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.seghour@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 324,
    "nom": "Mokhtar TAZROUT",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "m.tazrout@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 325,
    "nom": "Souad ZERROUKI",
    "departement": "Physique des Rayonnements",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "s.zerrouki@usthb.dz",
    "competences": [
      "Physique NuclEaire",
      "Rayonnements Ionisants",
      "DosimEtrie",
      "Radioprotection",
      "Physique Atomique"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique des Rayonnements de l'USTHB.",
    "projets": 0
  },
  {
    "id": 326,
    "nom": "Hamid AMAR",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "h.amar@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 327,
    "nom": "Djilali BENSAID",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "dj.bensaid@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 328,
    "nom": "Rachid BOUGRIOUA",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "r.bougrioua@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 329,
    "nom": "Said DAOUD",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "s.daoud@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 330,
    "nom": "Abdelkader DEKKAR",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.dekkar@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre de confErences B au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 331,
    "nom": "Saida GOUMIRI",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "s.goumiri@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 332,
    "nom": "Nasser GUERMAT",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "n.guermat@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 333,
    "nom": "Rachida GUETTAF",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "r.guettaf@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre assistant A au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 334,
    "nom": "Salima HAMZA",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "s.hamza@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre de confErences B au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 335,
    "nom": "Arezki IZERROUKEN",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "a.izerrouken@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 336,
    "nom": "Abdelkrim KEFFOUS",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "a.keffous@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 337,
    "nom": "Azzeddine KHELFANE",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.khelfane@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 338,
    "nom": "Tahar LAOUI",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "t.laoui@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 339,
    "nom": "Hocine MERADJI",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "h.meradji@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 340,
    "nom": "Nadia MEZAOUI",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "n.mezaoui@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre assistant A au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 341,
    "nom": "Fatiha MOULAI-KHATIR",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.moulaikhatir@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 342,
    "nom": "Kaddour RAHMOUN",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "k.rahmoun@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 343,
    "nom": "Nour Eddine SARI",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "ne.sari@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 344,
    "nom": "Abdelghani SOUDANI",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.soudani@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 345,
    "nom": "Mustapha TABET",
    "departement": "MatEriaux et Composants",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "m.tabet@usthb.dz",
    "competences": [
      "Science des MatEriaux",
      "Physique du Solide",
      "Semiconducteurs",
      "NanomatEriaux",
      "Cristallographie"
    ],
    "bio": "Professeur au dEpartement de MatEriaux et Composants de l'USTHB.",
    "projets": 0
  },
  {
    "id": 346,
    "nom": "Rabah BENNACER",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "r.bennacer@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "Professeur au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 347,
    "nom": "Kamel BENDERRADJI",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "k.benderradji@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre de confErences A au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 348,
    "nom": "Noureddine BENHARRATS",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "n.benharrats@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "Professeur au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 349,
    "nom": "Samir BENISSAD",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "s.benissad@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre de confErences B au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 350,
    "nom": "Fatiha BOUAZIZ",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.bouaziz@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre de confErences A au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 351,
    "nom": "Ali HADJADJ",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "a.hadjadj@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "Professeur au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 352,
    "nom": "Malika HENICHE",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "m.heniche@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre de confErences B au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 353,
    "nom": "Amina KADDOURI",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "a.kaddouri@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre assistant A au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 354,
    "nom": "Smail KHALFALLAH",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "s.khalfallah@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "Professeur au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 355,
    "nom": "Rafik KHELFAOUI",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "r.khelfaoui@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre de confErences A au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 356,
    "nom": "Zahia LEILA",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "z.leila@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre assistant A au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 357,
    "nom": "Dalila MAHDI",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "d.mahdi@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre de confErences B au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 358,
    "nom": "Omar RAHLI",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "o.rahli@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "Professeur au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 359,
    "nom": "Noureddine SAIDANE",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "n.saidane@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "Professeur au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 360,
    "nom": "Mohamed SALHI",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "m.salhi@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre de confErences A au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 361,
    "nom": "Azzedine SMAILI",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.smaili@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "MaEtre de confErences B au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 362,
    "nom": "Naima ZERAIBI",
    "departement": "EnergEtique et MEcanique des Fluides",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "n.zeraibi@usthb.dz",
    "competences": [
      "Thermodynamique",
      "MEcanique des Fluides",
      "Transfert de Chaleur",
      "Energies Renouvelables",
      "CFD"
    ],
    "bio": "Professeur au dEpartement de EnergEtique et MEcanique des Fluides de l'USTHB.",
    "projets": 0
  },
  {
    "id": 363,
    "nom": "Lamine BENKHALED",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "l.benkhaled@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 364,
    "nom": "Noureddine BOUARISSA",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "n.bouarissa@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "Professeur au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 365,
    "nom": "Fouad BRAHIM BELHAOUARI",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "f.brahimbelhaouari@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 366,
    "nom": "Mohamed CHAMI",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "m.chami@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "Professeur au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 367,
    "nom": "Abdelkarim CHERIFI",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.cherifi@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 368,
    "nom": "Fatiha DJAMA",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "f.djama@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "MaEtre assistant A au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 369,
    "nom": "Rabah GUERROUDJI",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "r.guerroudji@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "Professeur au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 370,
    "nom": "Amel HAMIDOUCHE",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.hamidouche@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 371,
    "nom": "Mohamed KHODJA",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "m.khodja@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "Professeur au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 372,
    "nom": "Dalila MESRI",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "MaEtre Assistant A",
    "email": "d.mesri@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "MaEtre assistant A au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 373,
    "nom": "Bouchra MOKHTARI",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences B",
    "email": "b.mokhtari@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 374,
    "nom": "Nadia RAMDANE",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "MaEtre de ConfErences A",
    "email": "n.ramdane@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 375,
    "nom": "Mostefa RAHMOUNE",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "m.rahmoune@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "Professeur au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 376,
    "nom": "Ahmed ZERARKA",
    "departement": "Physique ThEorique",
    "faculte": "Physique",
    "grade": "Professeur",
    "email": "a.zerarka@usthb.dz",
    "competences": [
      "Physique ThEorique",
      "MEcanique Quantique",
      "RelativitE",
      "Physique des Particules",
      "Cosmologie"
    ],
    "bio": "Professeur au dEpartement de Physique ThEorique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 377,
    "nom": "Nacera ACHOUR",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "n.achour@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 378,
    "nom": "Fatima Zohra BENKARA MOSTEFA",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "fz.benkaramostefa@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 379,
    "nom": "Amel BOUASLA",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "a.bouasla@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 380,
    "nom": "Leila BOUCHEMMA",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "l.bouchemma@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 381,
    "nom": "Samira BOUKHORS",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "s.boukhors@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 382,
    "nom": "Wafa CHEKAL",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre Assistant A",
    "email": "w.chekal@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 383,
    "nom": "Safia DERKAOUI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "s.derkaoui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 384,
    "nom": "Hakima FERHAT",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "h.ferhat@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 385,
    "nom": "Malika HADDAD",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "m.haddad@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 386,
    "nom": "Nawal KHALDI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre Assistant A",
    "email": "n.khaldi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 387,
    "nom": "Faiza LAMARI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "f.lamari@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 388,
    "nom": "Chahira MEBARKI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "c.mebarki@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 389,
    "nom": "Saida MEKLATI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "s.meklati@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 390,
    "nom": "Fouzia MERABET",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "f.merabet@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 391,
    "nom": "Nadia MOSTEFAOUI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre Assistant A",
    "email": "n.mostefaoui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 392,
    "nom": "Djaouida SAIDI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "dj.saidi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 393,
    "nom": "Houria TOUMI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "h.toumi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 394,
    "nom": "Karima YOUS",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "k.yous@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 395,
    "nom": "Abdelkader BENCHETTARA",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "a.benchettara@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 396,
    "nom": "Samir BENSEGUENI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "s.bensegueni@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 397,
    "nom": "Abdelkrim CHERIFI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "a.cherifi@fchimie.usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 398,
    "nom": "Rachida DOUFNOUNE",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "r.doufnoune@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 399,
    "nom": "Hamid GRIB",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "h.grib@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 400,
    "nom": "Kamel GUERROUDJ",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "k.guerroudj@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 401,
    "nom": "Sonia LEKMINE",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre Assistant A",
    "email": "s.lekmine@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 402,
    "nom": "Djamal MEZIANI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "dj.meziani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 403,
    "nom": "Naima REZGUI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "n.rezgui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 404,
    "nom": "Aicha SEDDIKI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "a.seddiki@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 405,
    "nom": "Rachid AMMAR",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "r.ammar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 406,
    "nom": "Nacera BELKEBIR",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "n.belkebir@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 407,
    "nom": "Nadia BENBAKHTI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "n.benbakhti@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 408,
    "nom": "Fatima BOUZIT",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre Assistant A",
    "email": "f.bouzit@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 409,
    "nom": "Boubaker DAHMANI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "b.dahmani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 410,
    "nom": "Sihem DERBAL",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "s.derbal@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 411,
    "nom": "Djaffar HAMADOUCHE",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "dj.hamadouche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 412,
    "nom": "Nacereddine HADDAOUI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "n.haddaoui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 413,
    "nom": "Amel MANSERI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "a.manseri@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 414,
    "nom": "Farida MOKHTARI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "f.mokhtari@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 415,
    "nom": "Mouloud OULD KADA",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "m.ouldkada@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 416,
    "nom": "Abdelkader TALBI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "a.talbi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 417,
    "nom": "Hafida AISSAOUI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "h.aissaoui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 418,
    "nom": "Noura AOUDJIT",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre Assistant A",
    "email": "n.aoudjit@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 419,
    "nom": "Mohamed BENBOUZID",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "m.benbouzid@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 420,
    "nom": "Riad BENNACER",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "r.bennacer@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 421,
    "nom": "Karima BOUDJENANE",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "k.boudjenane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 422,
    "nom": "Samira BOUHEDADJA",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "s.bouhedadja@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 423,
    "nom": "Farouk BOUKRIF",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "f.boukrif@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 424,
    "nom": "Zahia CHAIBI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "z.chaibi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 425,
    "nom": "Lydia GUERBOUS",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "l.guerbous@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 426,
    "nom": "Abdellah LOUNIS",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "a.lounis@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 427,
    "nom": "Fatima MELLAH",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences A",
    "email": "f.mellah@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 428,
    "nom": "Rachida OUALI",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "MaEtre de ConfErences B",
    "email": "r.ouali@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 429,
    "nom": "Belkacem ZIBOUCHE",
    "departement": "Chimie",
    "faculte": "Chimie",
    "grade": "Professeur",
    "email": "b.zibouche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Chimie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 430,
    "nom": "Faiza ABBACI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.abbaci@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 431,
    "nom": "Yazid AITOUCHE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "y.aitouche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 432,
    "nom": "Aicha AMROUCHE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "a.amrouche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 433,
    "nom": "Omar BOUSSAID",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "o.boussaid@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 434,
    "nom": "Abdelkader BENYETTOU",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "a.benyettou@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 435,
    "nom": "Fatma BOUALI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.bouali@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 436,
    "nom": "Wassila BOULAHIA CHETOUANI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "w.boulahiachetouani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 437,
    "nom": "Abdelkarim BOUSSAID",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.boussaid@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 438,
    "nom": "Mohamed CHIKHI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "m.chikhi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 439,
    "nom": "Malika DEBBAH",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "m.debbah@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 440,
    "nom": "Souad EMBAREK",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "s.embarek@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 441,
    "nom": "Karima FERGANE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "k.fergane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 442,
    "nom": "Nabiha HADJ HENNI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "n.hadjhenni@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 443,
    "nom": "Nadir HAMAMI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "n.hamami@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 444,
    "nom": "Amel KARKOUCH",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre Assistant A",
    "email": "a.karkouch@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 445,
    "nom": "Hacene KEDJOUR",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "h.kedjour@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 446,
    "nom": "Lynda KESSAL",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "l.kessal@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 447,
    "nom": "Abderrahmane KHIAT",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.khiat@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 448,
    "nom": "Kamel KHOUALDI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "k.khoualdi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 449,
    "nom": "Abdelmalek LECHEHEB",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.lecheheb@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 450,
    "nom": "Kahina MAHDI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "k.mahdi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 451,
    "nom": "Samir MALKI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "s.malki@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 452,
    "nom": "Tahar MEKHAZNIA",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "t.mekhaznia@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 453,
    "nom": "Abdelhamid MELLOUK",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "a.mellouk@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 454,
    "nom": "Asmaa MOUDJARI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre Assistant A",
    "email": "a.moudjari@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 455,
    "nom": "Zoubida OUADAH",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "z.ouadah@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 456,
    "nom": "Dihia REMMANE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "d.remmane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 457,
    "nom": "Hassina SERIDI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "h.seridi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 458,
    "nom": "Amina SERIR",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "a.serir@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 459,
    "nom": "Aissa SI LARBI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.silarbi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 460,
    "nom": "Saliha TABET AOUL",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "s.tabetaoul@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 461,
    "nom": "Samia TIGANE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "s.tigane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 462,
    "nom": "Mohamed YALAOUI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "m.yalaoui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 463,
    "nom": "Amar ABBOUSH",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.abboush@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 464,
    "nom": "Hacene BELBACHIR",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "h.belbachir@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 465,
    "nom": "Nassim BENAMRANE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "n.benamrane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 466,
    "nom": "Zahira BENSEBAA",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "z.bensebaa@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 467,
    "nom": "Mohamed BOUDJELLAL",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "m.boudjellal@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 468,
    "nom": "Farid BOUKHOBZA",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.boukhobza@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 469,
    "nom": "Fella BOUMEDIENNE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "f.boumedienne@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 470,
    "nom": "Lahcene BOUSELMI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "l.bouselmi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 471,
    "nom": "Amina CHIBANI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "a.chibani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 472,
    "nom": "Nawel CHIKOUCHE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "n.chikouche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 473,
    "nom": "Karima DERDOUR",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre Assistant A",
    "email": "k.derdour@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 474,
    "nom": "Djamal FENAS",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "dj.fenas@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 475,
    "nom": "Aissa FLITTI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.flitti@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 476,
    "nom": "Riad HADJ-SAID",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "r.hadjsaid@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 477,
    "nom": "Djamel HIDOUCI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "dj.hidouci@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 478,
    "nom": "Mohamed KHIREDDINE",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "m.khireddine@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 479,
    "nom": "Nadia KIRAN",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "n.kiran@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 480,
    "nom": "Azeddine MAZARI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "Professeur",
    "email": "a.mazari@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 481,
    "nom": "Saliha MEKIBES",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "s.mekibes@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 482,
    "nom": "Faiza TITOUNA",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.titouna@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 483,
    "nom": "Fatiha ZAIDI",
    "departement": "Informatique",
    "faculte": "Informatique",
    "grade": "MaEtre de ConfErences B",
    "email": "fatiha.zaidi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Informatique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 484,
    "nom": "Besma ABDELGUERFI BERREKBIA",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "b.abdelguerfi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 485,
    "nom": "Mohamed ACHOUR",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "m.achour@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 486,
    "nom": "Leila AIT MOULOUD",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "l.aitmouloud@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 487,
    "nom": "Amira BABALI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "a.babali@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 488,
    "nom": "Abdelkrim BENAMAR",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "a.benamar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 489,
    "nom": "Naima BOUCHIKHI TANI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "n.bouchikhitani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 490,
    "nom": "Amira DALI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "a.dali@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 491,
    "nom": "Houria DJABRI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "h.djabri@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 492,
    "nom": "Sabrina DOUMANDJI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "s.doumandji@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 493,
    "nom": "Rachid GRIM",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "r.grim@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 494,
    "nom": "Mabrouk HAMROUCHE",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "m.hamrouche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 495,
    "nom": "Hayat HADJOUDJA",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "h.hadjoudja@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 496,
    "nom": "Hafida KHENCHOUCHE",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "h.khenchouche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 497,
    "nom": "Rachid MEDDOUR",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "r.meddour@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 498,
    "nom": "Farida MEFTI KORTBI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "f.meftikortbi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 499,
    "nom": "Selma NAIT MAZI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "s.naitmazi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 500,
    "nom": "Wahiba OUAFI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre Assistant A",
    "email": "w.ouafi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 501,
    "nom": "Meriem SEMMAR",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "m.semmar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 502,
    "nom": "Nora SOUAT",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre Assistant A",
    "email": "n.souat@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 503,
    "nom": "Karima TERKI HASSAINE",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "k.terkihassaine@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 504,
    "nom": "Imene ZERROUKI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre Assistant A",
    "email": "i.zerrouki@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 505,
    "nom": "Meriem AIMEUR",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "m.aimeur@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 506,
    "nom": "Karima AIT ABDELOUAHAB",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "k.aitabdelouahab@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 507,
    "nom": "Naima BENHASSINE",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "n.benhassine@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 508,
    "nom": "Hafida BENSAADI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "h.bensaadi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 509,
    "nom": "Nabila BENMANSOUR",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "n.benmansour@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 510,
    "nom": "Fatima BERKANE",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "f.berkane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 511,
    "nom": "Rachid BOUCHEKER",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "r.boucheker@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 512,
    "nom": "Amina CHALLAL",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "a.challal@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 513,
    "nom": "Fouzia DERARDJA",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "f.derardja@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 514,
    "nom": "Yasmina DJOUDI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre Assistant A",
    "email": "y.djoudi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 515,
    "nom": "Aicha FERHAT",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "a.ferhat@fbiol.usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 516,
    "nom": "Farida KEDAD",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "f.kedad@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 517,
    "nom": "Farida LAHOUEL",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "f.lahouel@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 518,
    "nom": "Radia LAIB",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "r.laib@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 519,
    "nom": "Samia LOUHIBI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "s.louhibi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 520,
    "nom": "Assia MERZOUK",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "a.merzouk@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 521,
    "nom": "Nawel OUADAH",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "n.ouadah@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 522,
    "nom": "Siham RAHMANI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "s.rahmani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 523,
    "nom": "Smain SAHRAOUI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "s.sahraoui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 524,
    "nom": "Mounia SAIDJI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "m.saidji@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 525,
    "nom": "Samira AISSI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "s.aissi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 526,
    "nom": "Malika AKACHA",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "m.akacha@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 527,
    "nom": "Safia ARKOUB",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre Assistant A",
    "email": "s.arkoub@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 528,
    "nom": "Houria BENSEKHRIA",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "h.bensekhria@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 529,
    "nom": "Hacina BENTOUATI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "h.bentouati@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 530,
    "nom": "Fouzia BOUDJENAH",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "f.boudjenah@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 531,
    "nom": "Abdelmalek BOULAHBEL",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "a.boulahbel@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 532,
    "nom": "Zohra DIAF",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre Assistant A",
    "email": "z.diaf@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 533,
    "nom": "Soumia HAMDI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "s.hamdi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 534,
    "nom": "Chafia KACED",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "c.kaced@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 535,
    "nom": "Nadira KALLEL",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre Assistant A",
    "email": "n.kallel@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 536,
    "nom": "Samira LARINOUNA",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "s.larinouna@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 537,
    "nom": "Farouk MENOUAR",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences A",
    "email": "f.menouar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 538,
    "nom": "Tarek MEZIANE",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "t.meziane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 539,
    "nom": "Amel OUALI",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre de ConfErences B",
    "email": "a.ouali@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 540,
    "nom": "Nawel REGUIEG",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "MaEtre Assistant A",
    "email": "n.reguieg@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 541,
    "nom": "Houria SMAIL SAADOUN",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "h.smailsaadoun@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 542,
    "nom": "Farida TOUAIBIA",
    "departement": "Biologie",
    "faculte": "Sciences Biologiques",
    "grade": "Professeur",
    "email": "f.touaibia@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de Biologie de l'USTHB.",
    "projets": 0
  },
  {
    "id": 543,
    "nom": "Abderrahmane ADOUM",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "a.adoum@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 544,
    "nom": "Mohamed Salah AGGOUN",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "ms.aggoun@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 545,
    "nom": "Mustapha AIT IDER",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "m.aitider@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 546,
    "nom": "Noureddine AMROUNE",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "n.amroune@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 547,
    "nom": "Fouad BELARBI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "f.belarbi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 548,
    "nom": "Sabeur BELE",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "s.bele@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 549,
    "nom": "Ahmed BENIDIR",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "a.benidir@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 550,
    "nom": "Lakhdar BENYAHIA",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "l.benyahia@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 551,
    "nom": "Mohamed BOUHICHA",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "m.bouhicha@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 552,
    "nom": "Karim BOUZID",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "k.bouzid@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 553,
    "nom": "Tahar BOUZIANI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "t.bouziani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 554,
    "nom": "Farid DEBIEB",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "f.debieb@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 555,
    "nom": "Toufik GALAI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "t.galai@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 556,
    "nom": "Rachid HANINI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "r.hanini@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 557,
    "nom": "Mohamed HAOUAM",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "m.haouam@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 558,
    "nom": "Hassen HENTIT",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "h.hentit@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 559,
    "nom": "Sofiane KENAI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "s.kenai@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 560,
    "nom": "Nadjib LAOUAR",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "n.laouar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 561,
    "nom": "Amar LEFILEF",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "a.lefilef@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 562,
    "nom": "Nabil LOUNIS",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "n.lounis@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 563,
    "nom": "Nasser MANSOUR",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "n.mansour@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 564,
    "nom": "Mohammed MOULI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "m.mouli@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 565,
    "nom": "Djamel OUSSEDIK",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "dj.oussedik@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 566,
    "nom": "Amar SLIMANI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "a.slimani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 567,
    "nom": "Said TAZROUT",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "s.tazrout@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 568,
    "nom": "Abdelmadjid ZAIDI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "a.zaidi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 569,
    "nom": "Mebrouk BELGACEM",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "m.belgacem@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 570,
    "nom": "Abdelkader BENAMAR",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "a.benamar@fgc.usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 571,
    "nom": "Djamel BERBER",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "dj.berber@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 572,
    "nom": "Oulaid BOUZID",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "o.bouzid@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 573,
    "nom": "Messaoud DERGAL",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "m.dergal@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 574,
    "nom": "Arezki DJEMILI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "a.djemili@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 575,
    "nom": "Amel GUETTACHE",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "a.guettache@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 576,
    "nom": "Cherif HARRAT",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "c.harrat@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 577,
    "nom": "Mohand Said KACIMI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "ms.kacimi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 578,
    "nom": "Khaled KHERICI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "k.kherici@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 579,
    "nom": "Salah LAROUCI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "s.larouci@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 580,
    "nom": "Abdelkrim MEKKI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "a.mekki@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 581,
    "nom": "Rezk OURICI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "r.ourici@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 582,
    "nom": "Fella RABEHI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "f.rabehi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 583,
    "nom": "Nadir SALHI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences A",
    "email": "n.salhi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 584,
    "nom": "Noureddine SMAIL",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "Professeur",
    "email": "n.smail@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 585,
    "nom": "Azzedine TAGELDIN",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre de ConfErences B",
    "email": "a.tageldin@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 586,
    "nom": "Zineb ZIANI",
    "departement": "GEnie Civil",
    "faculte": "GEnie Civil",
    "grade": "MaEtre Assistant A",
    "email": "z.ziani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de GEnie Civil de l'USTHB.",
    "projets": 0
  },
  {
    "id": 587,
    "nom": "Hakim ACHOUR",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "h.achour@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 588,
    "nom": "Abdenour AISSAOUI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "a.aissaoui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 589,
    "nom": "Amina AISSOU",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.aissou@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 590,
    "nom": "Ferhat BETTAYEB",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "f.bettayeb@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 591,
    "nom": "Tarek BOULMEZAOUD",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "t.boulmezaoud@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 592,
    "nom": "Lamine BOUNOUA",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "l.bounoua@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 593,
    "nom": "Hakim DEGHICHE",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "h.deghiche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 594,
    "nom": "Nadia DJEBBOURI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "n.djebbouri@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 595,
    "nom": "Habiba GHARBI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "h.gharbi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 596,
    "nom": "Mourad GOUGAM",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "m.gougam@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 597,
    "nom": "Cherif GUERRACHE",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "c.guerrache@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 598,
    "nom": "Mohamed KHALDI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "m.khaldi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 599,
    "nom": "Rabah KHEMLICHE",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "r.khemliche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 600,
    "nom": "Said LABIOD",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "s.labiod@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 601,
    "nom": "Riad LAREDJ",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "r.laredj@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 602,
    "nom": "Fatiha LEKMINE",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.lekmine@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 603,
    "nom": "Abdelkrim MEKHILEF",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "a.mekhilef@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 604,
    "nom": "Tahar MEKHILEF",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "t.mekhilef@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 605,
    "nom": "Rachid MELLAH",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "r.mellah@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 606,
    "nom": "Ahmed OUAMRANE",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.ouamrane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 607,
    "nom": "Meriem OUCHEN",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "m.ouchen@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 608,
    "nom": "Noureddine SBETA",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "n.sbeta@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 609,
    "nom": "Badr Eddine SEGHIER",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "be.seghier@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 610,
    "nom": "Rafik TALEB",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "r.taleb@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 611,
    "nom": "Amina ZEROUALI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.zerouali@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 612,
    "nom": "Abdelkader AIT HELLAL",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "a.aithellal@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 613,
    "nom": "Atika BOUDISSA",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.boudissa@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 614,
    "nom": "Said CHERGUI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "s.chergui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 615,
    "nom": "Amar DEBOUCHA",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "a.deboucha@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 616,
    "nom": "Badreddine GASMI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "b.gasmi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 617,
    "nom": "Hachemi HAMDI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "h.hamdi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 618,
    "nom": "Faouzi HAMOUDI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "f.hamoudi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 619,
    "nom": "Hadj HOCINI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "h.hocini@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 620,
    "nom": "Farouk LAOUFI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.laoufi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 621,
    "nom": "Abdelkrim MOUSSAOUI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "a.moussaoui@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 622,
    "nom": "Zoubida OULD LACHEMI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "z.ouldlachemi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 623,
    "nom": "Said YAKOUBI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "s.yakoubi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 624,
    "nom": "Kamila ZERHOUNI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "k.zerhouni@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 625,
    "nom": "Ammar ALIOUAT",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "a.aliouat@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 626,
    "nom": "Farouk BENMOUSSA",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "f.benmoussa@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 627,
    "nom": "Youcef BENMOUSSA",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "y.benmoussa@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 628,
    "nom": "Maamar DEBBACHE",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "m.debbache@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 629,
    "nom": "Ratiba DJEBBOURI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "r.djebbouri@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 630,
    "nom": "Amar HADJ-HADJ",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "a.hadjhadj@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 631,
    "nom": "Naceur HENNI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "n.henni@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 632,
    "nom": "Fatiha IBRIR",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "f.ibrir@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 633,
    "nom": "Djamal LAZREG",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "dj.lazreg@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 634,
    "nom": "Karima MEZRAG",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "k.mezrag@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 635,
    "nom": "Samir SACI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "s.saci@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 636,
    "nom": "Kamel ZIDANI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "k.zidani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 637,
    "nom": "Aziz BERKANI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "a.berkani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 638,
    "nom": "Toufik BOUDISSA",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "t.boudissa@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 639,
    "nom": "Lyes CHITER",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "l.chiter@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 640,
    "nom": "Djamel DHAHRI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "dj.dhahri@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 641,
    "nom": "Nadjib DRICI DJEBBAR",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "n.dricidjebbar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 642,
    "nom": "Chafia HAMDI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "c.hamdi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 643,
    "nom": "Khatir KHETTAB",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "k.khettab@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 644,
    "nom": "Houria KHELOUFI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "h.kheloufi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 645,
    "nom": "Fouad LAZHAR",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "f.lazhar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 646,
    "nom": "Abdelhalim MEDDAHI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "a.meddahi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 647,
    "nom": "Farida MEZIANE",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "f.meziane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 648,
    "nom": "Abdelouahab MEZIANE",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "a.meziane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 649,
    "nom": "Tayeb MOHAMMEDI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "t.mohammedi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 650,
    "nom": "Khadidja MOURAD CHIKH",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences B",
    "email": "k.mouradchikh@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 651,
    "nom": "Nawel SEDDIK",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "MaEtre de ConfErences A",
    "email": "n.seddik@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 652,
    "nom": "Hamid TAIBI",
    "departement": "GEnie Electrique",
    "faculte": "GEnie Electrique",
    "grade": "Professeur",
    "email": "h.taibi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie Electrique de l'USTHB.",
    "projets": 0
  },
  {
    "id": 653,
    "nom": "Mourad ABDELOUAHED",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "m.abdelouahed@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 654,
    "nom": "Rachid ABDELDJEBAR",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "r.abdeldjebar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 655,
    "nom": "Mustapha BOUGHAZI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "m.boughazi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 656,
    "nom": "Nabil BOUKTIT",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "n.bouktit@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 657,
    "nom": "Djamel CHAOUCH",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "dj.chaouch@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 658,
    "nom": "Walid CHERIF",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "w.cherif@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 659,
    "nom": "Amar DJEBIRET",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "a.djebiret@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 660,
    "nom": "Lakhdar DJEMAI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "l.djemai@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 661,
    "nom": "Farid ERKEK",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "f.erkek@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 662,
    "nom": "Abdelhamid GHENAIET",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "a.ghenaiet@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 663,
    "nom": "Rachid GUERRAICHE",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "r.guerraiche@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 664,
    "nom": "Abdelkader KELLOU",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "a.kellou@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 665,
    "nom": "Mouad LAMRI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "m.lamri@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 666,
    "nom": "Azzedine LOUSDAD",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "a.lousdad@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 667,
    "nom": "Mohieddine MAKHLOUF",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "m.makhlouf@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 668,
    "nom": "Driss MEHDI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "d.mehdi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 669,
    "nom": "Saad MEKHILEF",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "s.mekhilef@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 670,
    "nom": "Rafik SOUAMI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "r.souami@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 671,
    "nom": "Abdelhak TAIBI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "a.taibi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 672,
    "nom": "Imane TIFROUTE",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre Assistant A",
    "email": "i.tifroute@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 673,
    "nom": "Kamal ABBOUDI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "k.abboudi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 674,
    "nom": "Farouk ABED",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "f.abed@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 675,
    "nom": "Mohamed AMARA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "m.amara@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 676,
    "nom": "Fatiha BENABDALLAH",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "f.benabdallah@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 677,
    "nom": "Salah Eddine BENISSAD",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "se.benissad@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 678,
    "nom": "Lyes BORDJI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "l.bordji@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 679,
    "nom": "Farid CHABANE",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "f.chabane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 680,
    "nom": "Djamel DJALAB",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "dj.djalab@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 681,
    "nom": "Fatiha LEBIED",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "f.lebied@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 682,
    "nom": "Tarik MESLEM",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "t.meslem@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 683,
    "nom": "Nabil MOUMMI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "n.moummi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 684,
    "nom": "Farouk REDJEM",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "f.redjem@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 685,
    "nom": "Abdelkrim SENGOUGA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "a.sengouga@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 686,
    "nom": "Abdelaziz TOUATI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "a.touati@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 687,
    "nom": "Djelloul YOUNSI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "dj.younsi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 688,
    "nom": "Halima AISSOU",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "h.aissou@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 689,
    "nom": "Abdelkader AIT FERHAT",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "a.aitferhat@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 690,
    "nom": "Nacer BACHA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "n.bacha@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 691,
    "nom": "Imane BENALI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "i.benali@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 692,
    "nom": "Mourad BENZERARA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "m.benzerara@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 693,
    "nom": "Hafid BILANI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "h.bilani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 694,
    "nom": "Hamid DJEBAILI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "h.djebaili@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 695,
    "nom": "Azzedine ELMOSSOUESS",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "a.elmossouess@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 696,
    "nom": "Abdelkrim HADDAD",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "a.haddad@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 697,
    "nom": "Faouzi HIDOUSSI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "f.hidoussi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 698,
    "nom": "Lakhdar IHADDADENE",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "l.ihaddadene@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 699,
    "nom": "Fateh LAREDJ",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "f.laredj@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 700,
    "nom": "Nour Eddine MASSINISSA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "ne.massinissa@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 701,
    "nom": "Fatiha MEGHNI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "f.meghni@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 702,
    "nom": "Oumelkheir SAIDAT",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "o.saidat@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 703,
    "nom": "Nadia ZERROUKI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre Assistant A",
    "email": "nadia.zerrouki@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 704,
    "nom": "Hamid AIT AMAR",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "h.aitamar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 705,
    "nom": "Mohamed Raouf BENALI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "mr.benali@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 706,
    "nom": "Sihem BENLAKHDAR",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre Assistant A",
    "email": "s.benlakhdar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 707,
    "nom": "Chafia BENYAMINA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "c.benyamina@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 708,
    "nom": "Farid DAHAK",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "f.dahak@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 709,
    "nom": "Naima DJEGHRI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "n.djeghri@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 710,
    "nom": "Fatima Zohra FERRAD",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "fz.ferrad@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 711,
    "nom": "Fatima LARKI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "f.larki@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 712,
    "nom": "Amar MANSOURI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "a.mansouri@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 713,
    "nom": "Ryma MENIA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre Assistant A",
    "email": "r.menia@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 714,
    "nom": "Ahcen MOKRETAR",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "a.mokretar@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 715,
    "nom": "Nabila NACER",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "n.nacer@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 716,
    "nom": "Fouzia OTMANI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences A",
    "email": "f.otmani@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 717,
    "nom": "Lynda SAIDANE",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "l.saidane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 718,
    "nom": "Rachid SALHI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "r.salhi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 719,
    "nom": "Karima SEFIANE",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "k.sefiane@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 720,
    "nom": "Smail SEMRA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "Professeur",
    "email": "s.semra@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "Professeur au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 721,
    "nom": "Asma SMAHI",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "a.smahi@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 722,
    "nom": "Ratiba TIGHIOUART",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre Assistant A",
    "email": "r.tighiouart@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre assistant A au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  },
  {
    "id": 723,
    "nom": "Rachida ZOULIKHA",
    "departement": "GEnie MEcanique et ProcEdEs",
    "faculte": "GEnie MEcanique et ProcEdEs",
    "grade": "MaEtre de ConfErences B",
    "email": "r.zoulikha@usthb.dz",
    "competences": [
      "Enseignement",
      "Recherche",
      "Formation"
    ],
    "bio": "MaEtre de confErences B au dEpartement de GEnie MEcanique et ProcEdEs de l'USTHB.",
    "projets": 0
  }
];

const allTeachers = [...initialTeachers, ...newTeachers, ...extraTeachers];

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
