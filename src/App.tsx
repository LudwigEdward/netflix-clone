import React, { useEffect,useState } from 'react';
import Lottie from 'react-lottie';
import  animationData from './loading-animation.json'
import './App.css'
import  Tmdb from './Tmdb'
import MovieRow from './Components/MovieRow'
import FeaturedMovie from './Components/FeaturedMovie'
import Header from './Components/Header'


type ResponseMovieListsProps = {
  poster_path?:string
  results:Array<Record<string,any>>;
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
  const [blackHeader,setBlackHeader] = useState(false);
  const [animationState,setAnimationState] = useState({
    isStopped:false,
    isPaused:false
  });
  const lootieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const loadAll = async () =>{
    await new Promise(resolve => setTimeout(resolve, 3000));
    const responseLists = await Tmdb.getHomeList()
    setMovieList(responseLists);

    const original = responseLists.filter(i => i.slug === "originals");
    const movieChosen = original[0].items.results[Math.floor(Math.random() * (original[0].items.results.length - 1))]
    const responseInfo = await Tmdb.getMovieInfo(movieChosen.id,"tv");
    setFeaturedData(responseInfo);
    setAnimationState({isPaused:true,isStopped:true});
  }

  useEffect(()=>{
    loadAll();
  },[]);

  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 150){
        setBlackHeader(true)
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener("scroll",scrollListener);
    return () =>{
      window.removeEventListener("scroll",scrollListener);
    }
  },[]);

  return (
    <>
    {animationState.isStopped ? (
      <div className="page" >
      <Header black={blackHeader} />
      {featuredData!== undefined && <FeaturedMovie item={featuredData}/> }
      <div className="lists">
        {movieList?.map((item,key) =>(
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </div>
        <footer>
         <span>Feito com <span role="img" aria-label="coração">❤️</span> por <a href="https://github.com/LudwigEdward">Luís Eduardo</a></span>
         <span>Direitos de imagem <a href="https://netflix.com">Netflix©</a></span>
         <span>Dados por <a href="https://www.themoviedb.org/?language=pt-BR">TMDB©</a></span>
        </footer>
        </div>
    ):(
      <div className="loading-animation">
   <Lottie  options={lootieDefaultOptions}
      height={700}
      width={700}
      isStopped={animationState.isStopped}
      isPaused={animationState.isPaused}/>
      </div>
    )}
    </>
  )
}
