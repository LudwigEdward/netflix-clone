import styled from 'styled-components';

type FeaturedImageProps = {
  backdrop_path:string;
}

export const Container = styled.div`

`;

export const Featured = styled.div`
  height:90vh;
  background-size: cover;
  background-position: center;
  background-image:url(https://image.tmdb.org/t/p/original${(props:FeaturedImageProps)=> props.backdrop_path});
`;

export const FeaturedFadeVertial = styled.div`
 width:inherit;
 height:inherit;
 background:linear-gradient(to top, rgba(17, 17, 17,0.95) 10%, transparent 90%);
`;

export const FeaturedFadeHorizontal = styled.div`
 width:inherit;
 height:inherit;
 background:linear-gradient(to right, rgba(17, 17, 17,0.95) 30%, transparent 70%);
`;
