import React from 'react';

import { MovieRowContainer,MovieRowListArea,MovieRowList,MovieRowItem,MovieRowTitle,MovieRowTab,MovieRowTabContainer } from './styles';

type MovieRowProps = {
  title:string;
  poster_path:string;
}

interface MovieRow{
  title:string;
  items:Record<string,any>;
}

const MovieRow: React.FC<MovieRow> = ({title,items}:MovieRow) => {
  const totalTabs = (Math.round(items.results.length / 12));
  const currentTab = 1;

  return (
    <MovieRowContainer>
      <MovieRowTitle>
      <h2>{title}</h2>
      <MovieRowTabContainer>
        {totalTabs && Array.from(Array(totalTabs),(v,k)=>{
          return (<MovieRowTab active={k===currentTab ? false : true} key={k}/>)
        })
        }
      </MovieRowTabContainer>
      </MovieRowTitle>
      <MovieRowListArea>
        <MovieRowList>
        {items.results.length > 0 && items.results.map((item:MovieRowProps,key:string)=>(
          <MovieRowItem key={key}>
          <img alt="movie-poster" src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} key={key}/>
          </MovieRowItem>

        ))}
        </MovieRowList>
      </MovieRowListArea>
    </MovieRowContainer>
  );
};

export default MovieRow;
