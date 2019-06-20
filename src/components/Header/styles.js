import styled from 'styled-components'

export const Container = styled.div`
height: 50px;
width: 100%;
background: #f8fafc;
color: #4a5660;

z-index: 500;
position: absolute;
top: 0;
left: 0;
padding: 10px 20px;
display: flex
flex-direction: row;
justify-content: space-between;

-webkit-box-shadow: 0px 2px 5px 0px rgba(209,201,209,1);
-moz-box-shadow: 0px 2px 5px 0px rgba(209,201,209,1);
box-shadow: 0px 2px 5px 0px rgba(209,201,209,1);
`

export const Logo = styled.div`
height: 35px;
width: 85px;
background: #999;
margin-left: 20px;
`

export const Avatar = styled.div`
height: 35px;
width: 35px;
border-radius: 35px;
background: #999;
cursor: pointer;
`
export const Hamburguer = styled.button`
height: 35px;
width: 35px;
border-radius: 35px;
border: 0;
background: transparent;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
opacity: 0.8;
transition: 0.3s;

&:hover {
    background-color: #f1f7fd;
    opacity: 1
  }

`

export const LeftItemContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
