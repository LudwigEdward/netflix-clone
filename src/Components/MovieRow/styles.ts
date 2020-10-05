import styled, {keyframes} from 'styled-components';

interface MovieRowCurrentTabProps {
  active: boolean
}


export const Container = styled.div`
 .MovieRow:hover .movie-row-right,
 .MovieRow:hover .movie-row-left {
    opacity:1;
    z-index:998;
  }
`;

export const MovieRowContainer = styled.div`
.movie-row-left,.movie-row-right {
    opacity:0;
    transition:opacity ease 0.5s;
    z-index:998;
  }
  @media (max-width:760px){
    overflow:hidden;
    .overview-container{
      opacity:0;
    }
  }


  margin-bottom:30px;
  h2{
    margin:0px 0px 0px 30px;
  }
`;
export const MovieRowListArea = styled.div`
  overflox-x:hidden;
  padding-left:30px;
`;
export const MovieRowList = styled.div`
`;
export const MovieRowItem = styled.div`
  display:inline-block;
  width:150px;
  img{
    width:100%;
    transform:scale(0.9);
    cursor:pointer;
    transition:all ease-in 0.2s;
  }
  img:hover{
    transform:scale(1);
  }
`;
export const MovieRowTitle = styled.div`

`;
export const MovieRowTabContainer = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-end;
`;

export const MovieRowTab = styled.div`
  background: ${(p:MovieRowCurrentTabProps) => p.active ? '#ffff' : '#4f4f4f'};
  width:17px;
  height:2px;
  justify-content:flex-end;
  margin-right:7px;
  transition:all ease 0.2s;
`
export const MovieRowLeft = styled.div`
  background-color:rgba(0,0,0,0.6);
  left:0;
  position:absolute;
  width:40px;
  height:225px;
  z-index:998;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  cursor:pointer;
`;

export const MovieRowRight = styled.div`
  background-color:rgba(0,0,0,0.6);
  right:0;
  position:absolute;
  width:40px;
  height:225px;
  z-index:998;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  cursor:pointer;
`;

export const MovieRowArrows = styled.div`
  @media (max-width:760px){
    .movie-row-left, .movie-row-right{
      opacity:1;
    }
  }
`;

const openModal = keyframes`
  from {
    transform: translate(0, 101vh);
    opacity:0;
  }

  to {
    transform: translate(0, 0);
    opacity:1;
  }
`;

const titleAnimation = keyframes`
  0% {
    transform:scale(0);
    opacity:0;
  }
  30% {
    transform: scale(1);
    opacity:1;
  }
  40%{
    transform: scale(1);
    opacity:1;
  }
  100%{
    transform: scale(0.8);
    transform: translate(0, 27vh);
  }

`;

export const Modal = styled.div`
  position: fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  top: 30px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 1;
  transition:scale ease-in 0.5s;


  .modal-container{
    background-color:rgba(0,0,0,0.6);
    position: fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    top: -30px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 996;
    opacity: 1;
    transition:scale ease-in 0.5s;
  }

  .closeModalIconContainer{
    position:absolute;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    width:100%;
    padding: 0 10px;
  }

    .closeModalIcon{
      background:rgb(41, 41, 41);
      bottom:10px;
      text-align:center;
      border-radius:17.5px;
      width:35px;
      height:35px;
      font-size:30px;
      cursor:pointer;
    }

  .title-container{
    max-width:1000px;
    width:100%;
    background:transparent;
    position:absolute;
    display:flex;
    align-items:center;
    top:400px;
    padding: 0 15px;
    font-size:30px;
    font-weight:600;
    animation:${titleAnimation} 2.5s ease-in-out forwards;
  }

.overview-container{
    max-width:100%;
    width:100%;
    background:transparent;
    position:absolute;
    top:750px;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 15px;
    color:#878787;
    h4{
      width:95%;
      font-size:17.1px;
      font-weight:400;
    }
}
  .dates-container{
    position:absolute;
    top:95vh;
    left:10px;
    width: 500px;
    display:flex;
    justify-content: space-between;
    padding:0 17px;
    .relevant{
      color:#1bb35a;
      font-size:16.5px;
      font-weight:600;
    }
    .date{
      display:flex;
      align-items:center;
      font-size:16.5px;
      font-weight:500;
    }
  }
  .modal-window{
    top: 30px;
    border-radius:10px;
    animation:${openModal} 0.4s ease-out forwards;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    overflow: hidden;
    z-index: 999;
    width:1000px;
    height: 100vh;
    padding:10px;
    background-color: #000;
  }
  .video-player{
   width:1000px;
   height:700px;
   position:absolute;
   top:0px;
   background-image:linear-gradient(rgba(0,0,0,0.0) 60%,rgba(0,0,0,1));
   background-repeat:no-repeat;
   background-position:center;
   left:0px;
   pointer-events: none;
     }
  iframe{
    margin-top:-80px;
    width: 1000px;
    height: 700px;
    border: none;
    z-index: 998;
  }
`;
export const WatchButtons = styled.div`
  margin: 0px 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  width:90%;
  a{
      margin:0px 10px;
      display:flex;
      align-items:center;
      justify-content:center;
      width:160px;
      height:40px;
      font-size:20px;
      font-weight:bold;
      padding: 12px 12px;
      border-radius:5px;
      text-decoration:none;
      opacity:1;
      transition: 0.5s ease;
  }
  a:hover{
    opacity:0.8;
  }

    .mylistbutton{
    background-color: #333;
    color:#FFF;
    }
   .watchbutton{
    background-color: #fff;
    color:#000;
   }
`;


