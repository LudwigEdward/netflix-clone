import React, { useEffect,useState } from 'react';
import './App.css'
import  Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow'
import FeaturedMovie from './Components/FeaturedMovie'


type ResponseMovieListsProps = {
  poster_path:string
}

type ResponseInfoProps = {
  backdrop_path:string | undefined;
}

interface ResponseMovieLists {
  slug:string;
  title:string;
  items:ResponseMovieListsProps;
}
interface ResponseInfo {
  slug:string | undefined;
  title:string | undefined;
  items:ResponseInfoProps | undefined;
}

export const App: React.FC = () =>{
  const [movieList,setMovieList] = useState<ResponseMovieLists[]>();
  const [featuredData,setFeaturedData] = useState<ResponseInfo[]>();

  useEffect(()=>{
    const loadAll = async () =>{
      const responseLists = await Tmdb.getHomeList()
      setMovieList(responseLists);

      const original = responseLists.filter(i => i.slug === "originals");
      const movieChosen = original[0].items.results[Math.floor(Math.random() * (original[0].items.results.length - 1))]
      const responseInfo = await Tmdb.getMovieInfo(movieChosen.id,"tv");
      setFeaturedData(responseInfo);
      console.log(responseInfo)

    }
    loadAll();
  },[])


  return (
    <div className="page">
      {featuredData!== undefined && <FeaturedMovie item={featuredData}/> }
      <div className="lists">
        {movieList?.map((item,key) =>(
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </div>

    </div>
  )
}
