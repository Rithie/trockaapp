import styled from 'styled-components'

export const Container = styled.div`
    width: 550px;
    height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background-color: #fdd964;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`

export const CurrencyInputContainer = styled.div`
    max-width: 450px;
    width: 450px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: #fff;
    margin: 10px;

`

export const From = styled.div`
    background: #fff;
    max-width: 300px;
    width: 250px;
    height: 80px;
    display: flex;
    align-items: flex-start;
    justisfy-content: center;
    flex-direction: column;
    border-radius: 4px;


    span {
      margin-top: 10px;
      margin-left: 10px;
      color: #636363;
      font-size: 16px;
      font-weight: 400;
    }
`

export const DropDownButton = styled.span`
    background: #f6535b;
    width: 150px;
    height: 80px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #fff;
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      font-weight: bold;
    }
`


export const Form = styled.div`

    input:not([type="checkbox"]) {
        width: 200px;
        height: 50px;
        font-size: 23px;
        font-weight: bold;
        border: none;
        margin-bottom: 10px;
        margin-left: 10px;
        font-size: 22px;
        line-height: 32px;
        color: #636363;
        text-align: left;
    }

    input:not([type="checkbox"]):focus {
        border-color: #e88686;
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
