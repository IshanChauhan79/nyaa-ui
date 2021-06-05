const dateTime = (dateString) => {
  const readDate = new Date(dateString);
  const FinalDate =
    readDate.getUTCDate().toString() +
    "-" +
    readDate.getUTCMonth().toString() +
    "-" +
    readDate.getUTCFullYear().toString() +
    " " +
    readDate.getUTCHours().toString() +
    ":" +
    readDate.getUTCMinutes().toString();
  return FinalDate;
};
export default dateTime;
