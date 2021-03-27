export const jobs = [
  {
    role: "Project Manager / Digital Producer",
    location: "Small Mutiples - Sydney, Australia",
    period: "Nov 2018 - Aug 2020",
    codeName: "smallMultiples",
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
    codeName: "atea",
    details: [
      {
        text: "• Client implementation",
      },
      {
        text:
          "• Setting up routines for deliveries involving transportation, pre-delivery configurations such as image installations, asset management and recycling",
      },
      {
        text: "• Running Handover meetings with responsible Account Manager",
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
        text:
          "• Responsible for an internal group more oriented towards implementing global deliveries",
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
