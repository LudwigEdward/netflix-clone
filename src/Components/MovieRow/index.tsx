import React, {useState} from 'react';

import {
  MovieRowContainer,
  MovieRowListArea,
  MovieRowList,
  MovieRowItem,
  MovieRowTitle,
  MovieRowTab,
  MovieRowTabContainer,
  MovieRowLeft,
  MovieRowRight,
  MovieRowArrows,
  Container,
  Modal,
  WatchButtons
 } from './styles';
 import NavigateBefore from '@material-ui/icons/NavigateBefore'
 import NavigateNext from '@material-ui/icons/NavigateNext'
 import CloseIcon from '@material-ui/icons/Close';
 import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
type MovieRowProps = {
  title:string | undefined;
  poster_path:string | undefined;
  id:number | undefined;
  items:Record<string,any> | undefined;
  name:string | undefined;
  original_title?:string | undefined;
}
interface MovieRow{
  title:string;
  items:Record<string,any>;
}


const MovieRow: React.FC<MovieRow> = ({title,items}:MovieRow) => {
  const listW = items.results.length * 150;
  const totalTabs = (Math.ceil(listW / window.innerWidth));
  const [currentTab,setCurrentTab] = useState(0);
  const [scrollX,setScrollX] = useState(0);
  const [openModal,setOpenModal] = useState(false);
  const [currentItem,setCurrentItem] = useState<MovieRowProps>({
    id:undefined,
    items:undefined,
    poster_path:undefined,
    title:undefined,
    name:undefined,
  });

  const handleLeftArrow = () =>{
    const x =  scrollX + (Math.round(window.innerWidth)/  1.05)
    console.log(x);
    if(scrollX < 0){
      if(x > 0){
        setScrollX(0);
      }else{
        setScrollX(x);
      }

      setCurrentTab(currentTab - 1)
    }
  }

  const handleRightArrow = () =>{
    if(window.innerWidth - listW > scrollX -  (Math.round(window.innerWidth)/  1.05)){
      setScrollX((window.innerWidth - listW)-60);
    }else{
      setScrollX(scrollX -  (Math.round(window.innerWidth)/  1.05));
    }
    const canChangeTab = ((-scrollX) + window.innerWidth)-60;
    if(canChangeTab !== listW)
    setCurrentTab(currentTab + 1)
  }

  const handleMovieClick = async (item:MovieRowProps) =>{
    console.log(item);
    if(item && item.id){
      const searchString = `${item.name || item.original_title} trailer legendado 1080p`
      const req = await fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${searchString}&type=video&key=${process.env.REACT_APP_API_YOUTUBE}`)
      const json = await req.json();
      if(json?.items && json?.items.length > 0){
        setCurrentItem({id:json.items[0].id?.videoId,items:item,title:item.title,poster_path:item.poster_path,name:item.name});
        setOpenModal(true);
    }
    }
  }

  return (
    <Container>
    <MovieRowContainer className="MovieRow">
      <MovieRowTitle>
      <h2>{title}</h2>
      <MovieRowTabContainer>
        {totalTabs && Array.from(Array(totalTabs),(v,k)=>{
          return (<MovieRowTab active={k===currentTab ? true : false} key={k}/>)
        })
        }
      </MovieRowTabContainer>
      </MovieRowTitle>
      <MovieRowArrows className="movie-row-arrows">
      <MovieRowLeft className="movie-row-left" onClick={handleLeftArrow}>
        <NavigateBefore style={{fontSize:50}}/>
      </MovieRowLeft>
      <MovieRowRight  className="movie-row-right" onClick={handleRightArrow}>
        <NavigateNext style={{fontSize:50}}/>
      </MovieRowRight>
      </MovieRowArrows>
      <MovieRowListArea >
        <MovieRowList className="movie-row-list" style={{
          marginLeft:scrollX,
          transition:"all ease 0.4s",
          width:items.results.length * 150
        }}>
        {items.results.length > 0 && items.results.map((item:MovieRowProps,key:string)=>(
          <MovieRowItem key={key}>
          <img alt="movie-poster" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} key={key} onClick={()=>handleMovieClick(item)}/>
          </MovieRowItem>

        ))}
        </MovieRowList>
      </MovieRowListArea>
    </MovieRowContainer>
    {openModal && (
    <Modal>
      <div className="modal-container"></div>
      <div className="modal-window">
       <div className="closeModalIconContainer">
          <div className="closeModalIcon">
             <CloseIcon onClick={()=>setOpenModal(false)} />
          </div>
        </div>
        <div>
           <div className="video-player"></div>
          <iframe title="Video Player" data-type="text/html"
          src={`http://www.youtube.com/embed/${currentItem.id}?autoplay=1&mute=1&rel=0&transparent=0`}
          />
        </div>
        <div className="title-container">
         <h1>{currentItem.items?.name ||currentItem.items?.original_title }</h1>
       </div>
        <div className="overview-container" >
            <h4>{currentItem.items?.overview}</h4>
            <WatchButtons>
                  <a href={`/watch/${items.id}`} className="watchbutton">▶ Assistir</a>
                  <a href={`/list/add/${items.id}`} className="mylistbutton">+ Minha Lista</a>
            </WatchButtons>
            <br/>
        </div>
        <div className="dates-container">
          <span className="relevant">{(currentItem.items?.vote_average * 10)}% de Relevância</span>
          <span className="date"><CalendarTodayRoundedIcon style={{fontSize:16,paddingRight:3}}/>Data de Lançamento {new Date(currentItem.items?.first_air_date).toLocaleString('pt-BR').slice(0,10)}</span>
        </div>
        </div>


    </Modal>)}
    </Container>
  );
};

export default MovieRow;
