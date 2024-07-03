import { parseISO, format, formatRelative, differenceInHours, differenceInDays, compareAsc, compareDesc } from 'date-fns';

export function relativeTime(timestamp) {
    const date = parseISO(timestamp);
    const now = new Date();
  
    const hoursDifference = differenceInHours(now, date);
    const daysDifference = differenceInDays(now, date);
  
    if (hoursDifference < 24) {
      if (hoursDifference < 1) {
        return 'less than an hour ago'
      }
      return `${hoursDifference} hours ago`
    } else if (daysDifference === 1) {
      return `Last updated yesterday`//at ${format(date, 'HH:mm')}`
    } else {
      const rel = formatRelative(timestamp, now)
      return _removeAfterAt(rel.replace('last', 'Last updated'))
    }
  }
  
  const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ];
  dates.sort(compareAsc);

  function _removeAfterAt(inputString) {
    // Define the regex pattern to match 'at' and everything that follows
    const regex = /\sat.*/;
    
    // Replace the matched part with an empty string
    const result = inputString.replace(regex, '');
    
    return result;
  }