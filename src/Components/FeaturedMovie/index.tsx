import React from 'react';

import { Container,Featured,FeaturedFadeVertial,FeaturedFadeHorizontal } from './styles';


interface FeatureMovieProps{
  item:Record<string,any>;
}

const FeaturedMovie: React.FC<FeatureMovieProps> = ({item}) => {
  console.log(item);
  return (
    <Container>
      <Featured backdrop_path={item.backdrop_path}>
        <FeaturedFadeVertial>
          <FeaturedFadeHorizontal></FeaturedFadeHorizontal>
        </FeaturedFadeVertial>
      </Featured>
    </Container>
  );
};

export default FeaturedMovie;
