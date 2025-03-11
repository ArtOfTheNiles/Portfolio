/**
 * Calculates the difference between two dates and formats it as "X years X months X days"
 * @param startDate The start date
 * @param endDate The end date
 * @returns Formatted string with the duration
 */
export function getNiceDuration(startDate: Date, endDate: Date): string {
    // Clone dates to avoid modifying the originals
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Calculate years
    let years = end.getFullYear() - start.getFullYear();
    
    // Calculate months
    let months = end.getMonth() - start.getMonth();
    
    // If months is negative, adjust years and months
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Calculate days
    let days = end.getDate() - start.getDate();
    
    // If days is negative, adjust months and days
    if (days < 0) {
      // Get the last day of the previous month
      const lastDayOfMonth = new Date(
        end.getFullYear(), 
        end.getMonth(), 
        0
      ).getDate();
      
      months--;
      if (months < 0) {
        months += 12;
        years--;
      }
      
      days += lastDayOfMonth;
    }
    
    // Format the result
    const parts: string[] = [];
    
    if (years > 0) {
      parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    }
    
    if (months > 0) {
      parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
    }
    
    if (days > 0) {
      parts.push(`${days} ${days === 1 ? 'day' : 'days'}`);
    }
    
    // Handle edge case where difference is 0
    if (parts.length === 0) {
      return "0 days";
    }
    
    return parts.join(' ');
  }

  /**
 * Calculates the difference between two dates and formats it as "X years X months X days"
 * @param startDate The start date in "YYYY-MM-DD" format
 * @param endDate The end date in "YYYY-MM-DD" format
 * @returns Formatted string with the duration
 */
export function getNiceStringDuration(startDate: string, endDate: string): string {
    if (endDate === 'Ongoing'){
        return 'Ongoing';
    }
    // Clone dates to avoid modifying the originals
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Calculate years
    let years = end.getFullYear() - start.getFullYear();
    
    // Calculate months
    let months = end.getMonth() - start.getMonth();
    
    // If months is negative, adjust years and months
    if (months < 0) {
      years--;
      months += 12;
    }
    
    // Calculate days
    let days = end.getDate() - start.getDate();
    
    // If days is negative, adjust months and days
    if (days < 0) {
      // Get the last day of the previous month
      const lastDayOfMonth = new Date(
        end.getFullYear(), 
        end.getMonth(), 
        0
      ).getDate();
      
      months--;
      if (months < 0) {
        months += 12;
        years--;
      }
      
      days += lastDayOfMonth;
    }
    
    // Format the result
    const parts: string[] = [];
    
    if (years > 0) {
      parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    }
    
    if (months > 0) {
      parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
    }
    
    if (days > 0) {
      parts.push(`${days} ${days === 1 ? 'day' : 'days'}`);
    }
    
    // Handle edge case where difference is 0
    if (parts.length === 0) {
      return "0 days";
    }
    
    return parts.join(' ');
  }

  export const getNiceDate = (date: Date) => {
    if(date === undefined || date === null) {
      return 'N/A'; 
    }
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  export const getNiceStringDate = (stringDate: string) => {
    if (stringDate === 'Ongoing'){
        return 'Ongoing';
    }
    if(stringDate === undefined || stringDate === null) {
      return 'N/A'; 
    }
    return new Date(stringDate).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

export default { getNiceDate, getNiceDuration, getNiceStringDate };