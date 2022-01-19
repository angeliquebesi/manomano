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
import fusta from "../assets/images/Carrelage/fusta.jpg";
import alboran from "../assets/images/Carrelage/alboran.jpg";
import florentine from "../assets/images/Carrelage/florentine.jpg";
import terrazzo from "../assets/images/Carrelage/terrazzo.jpg";
import bac from "../assets/images/AccessoireC/bac.jpg";
import carelette from "../assets/images/AccessoireC/carelette.jpg";
import croisillon from "../assets/images/AccessoireC/croisillon.jpg";
import joint from "../assets/images/AccessoireC/joint.jpg";
import mortier from "../assets/images/AccessoireC/mortier.jpg";
import peigne from "../assets/images/AccessoireC/peigne.jpg";
import tige from "../assets/images/AccessoireC/tige.jpg";
import truelle from "../assets/images/AccessoireC/truelle.jpg";

export const categories = [
  "Meuble de salle de bain",
  "Douche et accessoires",
  "Baignoire et accessoires",
  "Lavabos et vasque",
  "Carrelage, béton ciré, et revêtement décoratif",
];

export const baignoires = [
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

export const accessoiresB = [
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

export const carrelage = [
  {
    id: 0,
    nom: "Série Florentine centro blue",
    dimension: "20 x 20",
    prix: "30,35 €/m²",
    image: florentine,
  },
  {
    id: 1,
    nom: "Terrazzo beige Miel",
    dimension: "60 x 60",
    prix: "46,16 €/m²",
    image: terrazzo,
  },
  {
    id: 2,
    nom: "Alboran",
    dimension: "15 x 15",
    prix: "37 €/m²",
    image: alboran,
  },
  {
    id: 3,
    nom: "Fusta",
    dimension: "15 x 90",
    prix: "22,67 €/m²",
    image: fusta,
  },
];

export const accessoiresC = [
  {
    id: 0,
    nom: "Mortier",
    description: "Sac de 15kg environ 6m²",
    prix: "33,51 €",
    image: mortier,
  },
  {
    id: 1,
    nom: "joint",
    description: "Joint fin (1 à 6 mm) blanc environ 3m²",
    prix: "7,17 €",
    image: joint,
  },
  {
    id: 2,
    nom: "100 croisillons auto-nivelant",
    description:
      "pour joint de 2mm d'épaisseur et carreaux de 2 à 12,5 mm d'épaisseur",
    prix: "9,01 €",
    image: croisillon,
  },
  {
    id: 3,
    nom: "Peigne",
    description: "Peigne denté 280x130mm 8x 8mm",
    prix: "7,88 €",
    image: peigne,
  },
  {
    id: 4,
    nom: "Truelle",
    description: "Truelle italienne inox 220 mm",
    prix: "17,06 €",
    image: truelle,
  },
  {
    id: 5,
    nom: "Coupe carrelage",
    description:
      "Longueur de coupe 600mm et de 30 à 80mm de diamètre pour les coupes circulaires",
    prix: "69,89 €",
    image: carelette,
  },
  {
    id: 6,
    nom: "Bac à mortier",
    description: "Rectangulaire, contenu 65L",
    prix: "11,89 €",
    image: bac,
  },
  {
    id: 7,
    nom: "Mélangeur",
    description: "Tige mélangeur L. 600 x D. 100 mm x Q. SDS+ en acier zingué ",
    prix: "8,90 €",
    image: tige,
  },
];
