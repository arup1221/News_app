export function calculateHoursAgo(publishedAt) {
    const publishedDate = new Date(publishedAt); 
    const currentDate = new Date(); 
  
    const timeDifference = currentDate - publishedDate; 
  
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  
    return hoursAgo;
  }
  export function calculateDaysAgo(publishedAt) {
    const publishedDate = new Date(publishedAt); 
    const currentDate = new Date(); 
  
    const timeDifference = currentDate - publishedDate; 
  
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return hoursAgo;
  }