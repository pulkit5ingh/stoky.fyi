const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const convert__Month_Date_YYYY_to_YYYY_MM_DD = (dateStr) => {
  // Split the date string into parts
  const dateParts = dateStr.split(' ');
  const month = dateParts[0];
  const day = dateParts[1].replace(',', '');
  const year = dateParts[2];

  // Get the month index (0-based)
  const monthIndex = months.indexOf(month);

  // Format the date to YYYY-MM-DD
  const formattedDate = `${year}-${(monthIndex + 1)
    .toString()
    .padStart(2, '0')}-${day.padStart(2, '0')}`;

  return formattedDate;
};
