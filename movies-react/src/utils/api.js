async function fetchMovies(callback) {
    const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const API_HEADERS = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDllOWIwYTAwYjlkNDU1ZDdmOWMwZjEyYTRmNTY3NyIsIm5iZiI6MTczODc2ODk0Ny4xNCwic3ViIjoiNjdhMzgyMzM3MzU0MjA4MmI2OWZkYzgzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.P7CPbpaPawYiEVT0oNZsdqFf9mQvRGPrKw7Zxo5e2qg'
      }
    };
  
    try {
      const response = await fetch(API_URL, API_HEADERS);
      const data = await response.json();
    
      callback(data.results || []); 
    } catch (error) {
      console.error("Error fetching movies:", error);
      callback([]);
    }
  }
  
  async function searchMovies(movieName, callback) {
    const API_URL = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
    const API_HEADERS = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDllOWIwYTAwYjlkNDU1ZDdmOWMwZjEyYTRmNTY3NyIsIm5iZiI6MTczODc2ODk0Ny4xNCwic3ViIjoiNjdhMzgyMzM3MzU0MjA4MmI2OWZkYzgzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.P7CPbpaPawYiEVT0oNZsdqFf9mQvRGPrKw7Zxo5e2qg'
      }
    };
  
    try {
      const response = await fetch(API_URL, API_HEADERS);
      const data = await response.json();
      
      callback(data.results || []); 
    } catch (error) {
      console.error("Error fetching movies:", error);
      callback([]);
    }
  }
  
  export { fetchMovies, searchMovies };
  