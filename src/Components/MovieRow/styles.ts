import styled from 'styled-components';

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
 width:9999px;
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

`;



