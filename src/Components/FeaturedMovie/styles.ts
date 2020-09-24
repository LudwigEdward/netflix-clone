import styled from 'styled-components';

type FeaturedImageProps = {
  backdrop_path:string;
}

export const Container = styled.div`

`;

export const Featured = styled.div`
  height:100vh;
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
 display:flex;
 flex-direction:column;
 justify-content:center;
 padding-left:30px;
 padding-bottom:150px;
 padding-top:70px;
`;


export const FeaturedSeasons = styled.div`
  display:inline-block;
  margin-right:15px;
`;
  export const FeaturedInfo = styled.div`
    font-size:18px;
    font-weight:bold;
    margin-top:15px;
  `;
  export const FeaturedPoints = styled.div`
    display:inline-block;
    color:#46d369;
    margin-right:15px;
  `;
  export const FeaturedName = styled.div`
    font-size:60px;
    font-weight:bold;
  `;
  export const FeaturedYear = styled.div`
    display:inline-block;
    margin-right:15px;

  `;

  export const FeaturedDescription = styled.div`
    margin-top:15px;
    font-size:20px;
    color:#999;
    max-width:35%;
  `;
  export const FeaturedButtons = styled.div`
    margin: 15px 0;
  a{
     display:inline-block;
      font-size:20px;
      font-weight:bold;
      padding: 12px 25px;
      border-radius:5px;
      text-decoration:none;
      margin-right:10px;
      opacity:1;
      transition: 0.5s ease;
  }
  a:hover{
    opacity:0.8;
  }

    .featured-mylistbutton{
    background-color: #333;
    color:#FFF;
    }
   .featured-watchbutton{
    background-color: #fff;
    color:#000;
   }
  `;
  export const FeaturedGenres = styled.div`
    margin-top:15px;
    font-size:18px;
    color:#999;
  `;


