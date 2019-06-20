import styled from 'styled-components'

export const Container = styled.aside`
height: 100%;
width: 200px;
background: #f8fafc;
color: #4a5660;
padding-top: 50px;

display: flex
flex-direction: column;
justify-content: space-between;


`

export const Nav = styled.ul`
    list-style: none;

    li {

        display: flex;
        align-items: center;
        justify-content: center;
        

        a {
            color: inherit;
            text-decoration: none;
            font-size: 11px;
            line-height: 32px;

            width: 100%;
            padding: 5px 25px;
            font-weight: ${props => (props.main ? 'bold' : 'normal')}
            opacity: 0.8;
            transition: 0.3s;

            &:hover {
                color: #434d56;
                background-color: #ebedef;
                opacity: 1;
            }
        }

        span {
            width: 100%;
            padding: 10px 25px;
            font-size: 11px;
            text-transform: uppercase;
            lin-height: 22px;
            letter-spacing: 1.11px;
            font-weight: 300;
        }

        
    }
`
