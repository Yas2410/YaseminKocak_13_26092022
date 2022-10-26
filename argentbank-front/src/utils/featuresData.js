//Import des différents médias illustrant les
//arguments de la HOMEPAGE
import chat from "../assets/icon-chat.png";
import money from "../assets/icon-money.png";
import security from "../assets/icon-security.png";

//Données concernant les 3 arguments de communication de l'entreprise
//Argent Bank.
//Affichés sur la page HOMEPAGE par le biais de la méthode MAP
export const featuresData = [
  {
    id: 1,
    icon: chat,
    alt: "chat icon",
    title: "You are our #1 priority",
    description:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    id: 2,
    icon: money,
    alt: "money icon",
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    id: 3,
    icon: security,
    alt: "security icon",
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];
