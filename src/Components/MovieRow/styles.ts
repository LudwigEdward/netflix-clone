import styled from 'styled-components';

interface MovieRowCurrentTabProps {
  active: boolean
}


export const MovieRowContainer = styled.div`
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
`


