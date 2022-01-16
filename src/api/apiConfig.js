const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "6884e05b4e2918c0aad7b44f240263c6",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
