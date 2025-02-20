import redKickbox from "../../public/assets/images/png/kick-box-red.png";
import blueKickbox from "../../public/assets/images/png/kick-box-blue.png";
import yellowKickbox from "../../public/assets/images/png/kick-box-yellow.png";
import family from "../../public/assets/images/webp/family.webp";
import station from "../../public/assets/images/webp/station.webp";
import tunnel from "../../public/assets/images/webp/tunnel.webp";

export const HEADER_LIST = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Stories",
    path: "/stories",
  },
  {
    name: "Community",
    path: "/community",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const KICKBOX_LIST = [
  {
    number: +155,
    name: "Ideas submitted",
  },
  {
    number: +325,
    name: "Active Platform users",
  },
  {
    number: +250,
    name: "Community Members",
  },
];

export const KICKBOX_PROCESS_LIST = [
  {
    image: redKickbox,
    imageAlt: "red-kickbox",
    subTitle: "Validate",
    title: "RedBox",
    description:
      "You’ve taken the first step -welcome to the RedBox phase! In this phase, you’ll validate your idea and test its business potential. The RedBox concludes with you pitching your idea to internal sponsors to secure funding for the BlueBox phase.",
    boxDuration: "Duration: 2 months",
    budget: "Start Budget: 700 CHF/EUR 20% of your working time",
  },
  {
    image: blueKickbox,
    imageAlt: "blue-kickbox",
    subTitle: "Pilot",
    title: "BlueBox",
    description:
      "This phase begins once you’ve secured a sponsor. Here, you’ll test your pilot with real customers, gather insights, and make improvements. Upon successful testing, you’ll receive support to secure a sponsor for the final implementation phase.",
    boxDuration: "Duration: 4-6 months",
    budget: "Budget: According to funding 20% of  your working time",
  },
  {
    image: yellowKickbox,
    imageAlt: "yellow-kickbox",
    subTitle: "Implement",
    title: "GoldBox",
    description:
      "Once you've proven that your idea has real business potential, you'll move to the GoldBox phase. Congratulations! This is your opportunity to scale and implement your idea within the organization, as a separate project, or even as a spin-off.",
    boxDuration: "Duration: ongoing",
    budget: "Budget: According to funding 20-100% of your working time",
  },
];

export const STORIES_LIST = [
  {
    image: family,
    imageAlt: "family",
    title: "Family Friendly Implenia",
  },
  {
    image: station,
    imageAlt: "station",
    title: "Mobile SOS-Station",
  },
  {
    image: tunnel,
    imageAlt: "tunnel",
    title: "HPS-EPS Tunnelelement",
  },
];
