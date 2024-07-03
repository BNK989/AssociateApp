import { parseISO, format, formatRelative, differenceInHours, differenceInDays } from 'date-fns';

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
      return removeAfterAt(rel.replace('last', 'Last updated'))
    }
  }

  function removeAfterAt(inputString) {
    // Define the regex pattern to match 'at' and everything that follows
    const regex = /\sat.*/;
    
    // Replace the matched part with an empty string
    const result = inputString.replace(regex, '');
    
    return result;
  }