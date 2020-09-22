import React from 'react';

import { Container,
  Featured,
  FeaturedFadeVertial,
  FeaturedFadeHorizontal,
  FeaturedSeasons,
  FeaturedInfo,
  FeaturedPoints,
  FeaturedName,
  FeaturedYear,
  FeaturedDescription,
  FeaturedButtons,
  FeaturedGenres,
 } from './styles';


interface FeatureMovieProps{
  item:Record<string,any>;
}

const FeaturedMovie: React.FC<FeatureMovieProps> = ({item}) => {
  console.log(item);

  const MovieDate =  new Date(item.first_air_date);
  return (
    <Container>
      <Featured backdrop_path={item.backdrop_path}>
        <FeaturedFadeVertial>
          <FeaturedFadeHorizontal>
            <FeaturedName>{item.original_name}</FeaturedName>
            <FeaturedInfo>
                <FeaturedPoints>{item.vote_average * 10} %</FeaturedPoints>
  <FeaturedYear>{MovieDate.getFullYear()}</FeaturedYear>
                <FeaturedSeasons>{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? "s":  ""}</FeaturedSeasons>
            </FeaturedInfo>
            <FeaturedDescription>{item.overview}</FeaturedDescription>
              <FeaturedButtons>

              </FeaturedButtons>
  <FeaturedGenres><strong>Generos:</strong> {item.genres.map((genre:Record<string,any>)=>(<span>{genre.name}</span>))}</FeaturedGenres>
          </FeaturedFadeHorizontal>
        </FeaturedFadeVertial>
      </Featured>
    </Container>
  );
};

export default FeaturedMovie;
