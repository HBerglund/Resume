import ateaImg from "./assets/atea.jpeg";
import smallMultiplesImg from "./assets/small-multiples.png";

export const jobs = [
  {
    role: "Project Manager / Digital Producer",
    location: "Small Mutiples - Sydney, Australia",
    period: "Nov 2018 - Aug 2020",
    codeName: "smallMultiples",
    image: smallMultiplesImg,
    details: [
      {
        text: "• First point of contact for clients",
      },
      {
        text: "• Organizing retrospective meetings and documenting outcome",
      },
      {
        text: "• Running Stand-up meetings",
      },
      {
        text: "• Responsible of resource scheduling",
      },
      {
        text: "• Sending weekly progress report to clients",
      },
      {
        text: "• Quality Assurance and testing of developed products",
      },
      {
        text:
          "• Responsible for timeline, budget and deliverables within projects",
      },
    ],
  },
  {
    role: "Project Manager",
    location: "Atea Sweden Ab - Vaxjo, Sweden",
    period: "May 2017 – Okt 2018",
    codeName: "ateaPm",
    image: ateaImg,
    details: [
      {
        text: "• Client implementation",
      },
      {
        text:
          "• Setting up routines including transportation, pre-delivery configurations such as image installations, asset management and recycling",
      },
      {
        text:
          "• Project groups including client representatives and internal Atea staff",
      },
      {
        text:
          "• Negotiating price and service contracts with manufacturers and distributors",
      },
      {
        text:
          "• Tender Work such as price negotiation with distributors, process documentation and making sure we delivered the tender response on time",
      },
      {
        text: "• Running Handover meetings with responsible Account Manager",
      },
      {
        text:
          "• Responsible for an internal group more oriented towards implementing global deliveries",
      },
    ],
  },
  {
    role: "Customer Service Manager",
    location: "Atea Sweden Ab - Vaxjo, Sweden",
    period: "April 2016 – May 2017",
    codeName: "ateaCsm",
    image: ateaImg,
    details: [
      {
        text:
          "• Managing a group of 16 Customer Service Representatives working primarily with incoming queries on chat, e-mail and phone",
      },
      {
        text: "• Running weekly team meetings",
      },
      {
        text: "• Recruiting new staff",
      },
      {
        text: "• Pay reviews",
      },
      {
        text: "• Staff coaching",
      },
      {
        text: "• Salary administration",
      },
    ],
  },
];

export function formatDate(dateString) {
  if (dateString.length > 10) {
    dateString = dateString.substring(0, 10);
  }
  return dateString;
}

export function formatName(nameString) {
  return (nameString = nameString.substring(10));
}
