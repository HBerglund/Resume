export const jobs = [
  {
    role: "Project Manager / Digital Producer",
    location: "Small Mutiples - Sydney, Australia",
    period: "Nov 2018 - Aug 2020",
  },
  {
    role: "Project Manager",
    location: "Atea Sweden Ab - Vaxjo, Sweden",
    period: "May 2017 – Okt 2018",
  },
];

export function formatDate(dateString) {
  if (dateString.length > 10) {
    dateString = dateString.substring(0, 10);
  }
  return dateString;
}
