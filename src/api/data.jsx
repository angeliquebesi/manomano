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
    name: "Bathroom furniture",
    photo: meuble,
  },
  {
    id: 1,
    name: "Shower and accessories",
    photo: douche,
  },
  {
    id: 2,
    name: "Bathtub and accessories",
    photo: baignoire,
  },
  {
    id: 3,
    name: "Sinks and basins",
    photo: lavabo,
  },
  {
    id: 4,
    name: "Tile, waxed concrete, and decorative coating",
    photo: carrelage,
  },
  {
    id: 5,
    name: "Mirror",
    photo: miroir,
  },
];

export const Baignoires = [
  {
    id: 0,
    nom: "Bathtub Corvette",
    dimension: "160 x 70",
    prix: "141,82 €",
    image: corvette,
  },
  {
    id: 1,
    nom: "Bathtub Diva",
    dimension: "160 x 70",
    prix: "177,00 €",
    image: diva,
  },
  {
    id: 2,
    nom: "Bathtub Bastia",
    dimension: "170 x 75",
    prix: "189,90 €",
    image: bastia,
  },
  {
    id: 3,
    nom: "Bathtub Intro",
    dimension: "160 x 75",
    prix: "139,00 €",
    image: Intro,
  },
];

export const AccessoiresB = [
  {
    id: 0,
    nom: "Bath screen",
    description: "Bath screen 90x140cm swiveling 180degree",
    prix: "101,36 €",
    image: parebaignoire,
  },
  {
    id: 1,
    nom: "Bathtub drainer",
    description:
      "EASYBAIN bathtub drain with integrated gasket trap and 650mm cable",
    prix: "29,07 €",
    image: vidage,
  },
  {
    id: 2,
    nom: "Thermostatic bath shower mixer",
    description: "center distance 150 mm",
    prix: "179,90 €",
    image: mitigeur,
  },
  {
    id: 3,
    nom: "shower head",
    description:
      "Shower set with wall bracket, Hand shower 100 Vario 2 jets EcoSmart, Flexible hose 160cm",
    prix: "39,80 €",
    image: pommeau,
  },
  {
    id: 4,
    nom: "Bathtub apron",
    description: "170 x 51 cm",
    prix: "100,00 €",
    image: tablier,
  },
  {
    id: 5,
    nom: "Hoses male - female",
    description: "stainless steel male 10x100 - female 12x17 length 30 cm",
    prix: "3,90 €",
    image: flexibles,
  },
  {
    id: 6,
    nom: "ball valve",
    description: "spherical brass male-female 12x17",
    prix: "4,68 €",
    image: robinet,
  },
  {
    id: 7,
    nom: "Bathtub feet",
    description: "Adjustable between 130 and 180 mm, plastic",
    prix: "36,60 €",
    image: pieds,
  },
];
