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
  
  export const apiKey = import.meta.env.VITE_REACT_APP_NewsApi;

  export const APIus = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  export const APIin = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`

