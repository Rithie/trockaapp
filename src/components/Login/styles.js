import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 30px 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    button {
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-weight: bold;
        font-size: 14px;
        border: 0;
        color: #fff;
        background: #4caf50;
        margin-top: 5px;
    }

    button:hover {
        background: #449e48;
    }

    input:not([type="checkbox"]) {
        height: 40px;
        padding: 0 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #444;
    }

    input:not([type="checkbox"]):focus {
        border-color: #e88686;
    }

    img {
        margin-bottom: 20px;
    }

    a {
        margin-top: 15px;
        display: block;
        text-align: center;
        color: #999;
        text-decoration: none;
    }

    a:hover {
        color: #666;
    }

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
