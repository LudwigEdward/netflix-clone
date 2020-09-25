import styled from 'styled-components';

export const Container = styled.div`
header{
  position:fixed;
  z-index:999;
  top:0;
  left:0;
  right:0;
  height:70px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 30px;
  background:transparent;
  transition:all ease 0.3s;
}
header.black{
  background-color:rgba(20, 20, 20,0.7);
}
`;
export const HeaderLogo =styled.div`
height:45px;
img{
  height:100%;
}
`;

export const HeaderUser = styled.div`
height:50px;
img{
  height:100%;
  border-radius:5px;
}
`;
