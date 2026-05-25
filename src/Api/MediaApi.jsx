import axios from 'axios';

const unsplash_key = import.meta.env.VITE_UNSPLASH_KEY;

export const fetchPhotos = (query) => {
  return axios.get('https://api.unsplash.com/search/photos', {  // ✅ add return here
    params: {
      query: query,
      page: 1,
      per_page: 30,
    },
    headers: {
      Authorization: `Client-ID ${unsplash_key}`,
    },
  })
    .then(response => {
     
      return response.data.results;
    })
    .catch(error => { 
      console.error('Error fetching from Unsplash:', error);
    });
};

export const fetchVideos = (query) => {
  return axios.get('https://api.pexels.com/videos/search', {  // ✅ add return here
    params: {query: query, per_page: 30, page: 1},
    headers: {Authorization: import.meta.env.VITE_PEXELS_KEY},
  })
    .then(response => {
     
      return response.data.videos;
    }
    )
    .catch(error => {
      console.error('Error fetching from Pexels:', error);
    });
};

export const fetchGifs = (query) => {
  return axios.get('https://api.giphy.com/v1/gifs/search', {  // ✅ add return here
    params: {
      q: query,
      limit: 30,
      offset: 0,
      api_key: import.meta.env.VITE_GIPHY_KEY,
    },
  
  })
    .then(response => {
   
      return response.data.data;
    })
    .catch(error => {
      console.error('Error fetching from Giphy:', error);
    });
};
