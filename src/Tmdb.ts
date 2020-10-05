

const basicFetch = async(endpoint:string) =>{
  const req = await fetch(`${process.env.REACT_APP_API_BASE}${endpoint}${endpoint.includes("?") ? `&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}` : `?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`}`)
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () =>  {
    return  await[
      {
        slug:"originals",
        title:"Originais do Netflix",
        items:await basicFetch(`/discover/tv?with_network=213?`)
      },
      {
        slug:"trending",
        title:"Recomendados para Você",
        items:await basicFetch("/trending/all/week")
      },
      {
        slug:"toprated",
        title:"Em Alta",
        items:await basicFetch("/movie/top_rated")
      },
      {
        slug:"action",
        title:"Ação",
        items:await basicFetch("/discover/movie?with_genres=28")
      },
      {
        slug:"comedy",
        title:"Comédia",
        items:await basicFetch("/discover/movie?with_genres=35")
      },
      {
        slug:"horror",
        title:"Terror",
        items:await basicFetch("/discover/movie?with_genres=27")
      },
      {
        slug:"romance",
        title:"Romance",
        items:await basicFetch("/discover/movie?with_genres=10749")
      },
      {
        slug:"documentary",
        title:"Documentário",
        items:await basicFetch("/discover/movie?with_genres=99")
      },
    ]
  },
  getMovieInfo:async (movieId:number,type:string) =>{
      switch(type){
        case "movie":
            return await basicFetch(`/movie/${movieId}`);
          case 'tv':
            return await basicFetch(`/tv/${movieId}`);
            default:
              break;
      }
  },
  getMovieTrailer :async (movieId:number) =>{
    return await basicFetch(`/movie/${movieId}/videos?append_to_response=videos`);
  }
}
