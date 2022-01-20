/* eslint-disable import/prefer-default-export */
import corvette from "../assets/images/Baignoires/corvette.jpg";
import diva from "../assets/images/Baignoires/diva.jpg";
import bastia from "../assets/images/Baignoires/bastia.jpg";
import Intro from "../assets/images/Baignoires/Intro.jpg";
import parebaignoire from "../assets/images/Accessoires/parebaignoire.jpg";
import vidage from "../assets/images/Accessoires/vidage.jpg";
import mitigeur from "../assets/images/Accessoires/mitigeur.jpg";
import pommeau from "../assets/images/Accessoires/pommeau.jpg";
import tablier from "../assets/images/Accessoires/tablier.jpg";
import flexibles from "../assets/images/Accessoires/flexibles.jpg";
import robinet from "../assets/images/Accessoires/robinet.jpg";
import pieds from "../assets/images/Accessoires/pieds.jpg";
import baignoire from "../assets/images/Categories/baignoire.jpg";
import miroir from "../assets/images/Categories/miroir.jpg";
import meuble from "../assets/images/Categories/meuble.jpg";
import douche from "../assets/images/Categories/douche.jpg";
import lavabo from "../assets/images/Categories/lavabo.jpg";
import carrelage from "../assets/images/Categories/carrelage.jpg";

export const Categories = [
  {
    id: 0,
    name: "Meuble de salle de bain",
    photo: meuble,
  },
  {
    id: 1,
    name: "Douche et accessoires",
    photo: douche,
  },
  {
    id: 2,
    name: "Baignoire et accessoires",
    photo: baignoire,
  },
  {
    id: 3,
    name: "Lavabos et vasque",
    photo: lavabo,
  },
  {
    id: 4,
    name: "Carrelage, béton ciré, et revêtement décoratif",
    photo: carrelage,
  },
  {
    id: 5,
    name: "Miroir",
    photo: miroir,
  },
];

export const Baignoires = [
  {
    id: 0,
    nom: "Baignoire Corvette",
    dimension: "160 x 70",
    prix: "141,82 €",
    image: corvette,
  },
  {
    id: 1,
    nom: "Baignoire Diva",
    dimension: "160 x 70",
    prix: "177,00 €",
    image: diva,
  },
  {
    id: 2,
    nom: "Baignoire Bastia",
    dimension: "170 x 75",
    prix: "189,90 €",
    image: bastia,
  },
  {
    id: 3,
    nom: "Baignoire Intro",
    dimension: "160 x 75",
    prix: "139,00 €",
    image: Intro,
  },
];

export const AccessoiresB = [
  {
    id: 0,
    nom: "Pare baignoire",
    description: "Pare baignoire 90x140cm pivotant 180degré",
    prix: "101,36 €",
    image: parebaignoire,
  },
  {
    id: 1,
    nom: "Vidage de baignoire",
    description:
      "Vidage de baignoire EASYBAIN avec siphon à joint intégré et câble 650mm",
    prix: "29,07 €",
    image: vidage,
  },
  {
    id: 2,
    nom: "Mitigeur thermostatique de bain-douche",
    description: "entraxe 150 mm",
    prix: "179,90 €",
    image: mitigeur,
  },
  {
    id: 3,
    nom: "pommeau de douche",
    description:
      "Set de douche avec support mural, Douchette 100 Vario 2 jets EcoSmart, Flexible 160cm",
    prix: "39,80 €",
    image: pommeau,
  },
  {
    id: 4,
    nom: "Tablier de baignoire",
    description: "170 x 51 cm",
    prix: "100,00 €",
    image: tablier,
  },
  {
    id: 5,
    nom: "Flexibles mâle - femelle",
    description: "inox mâle 10x100 - femelle 12x17 longueur 30 cm",
    prix: "3,90 €",
    image: flexibles,
  },
  {
    id: 6,
    nom: "Robinet boisseau",
    description: "sphérique laiton mâle-femelle 12x17",
    prix: "4,68 €",
    image: robinet,
  },
  {
    id: 7,
    nom: "Pieds de baignoire",
    description: "Réglables entre 130 et 180 mm, en plastique",
    prix: "36,60 €",
    image: pieds,
  },
];
