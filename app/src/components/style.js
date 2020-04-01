import styled from 'styled-components'

const StyledFullContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FA8BFF;
    background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
`

const StyledGameStatusContainer = styled.div`
    display: flex;
    font-family: 'Baloo 2', cursive;
    margin-top: 20px;
    width: 1100px;
    height: 15vh;
    background:  #3333ff;
    border-radius: 10px;

    div {
        display: flex;
        align-items: center;
        background-color: white;
        height:45px;
        border-radius: 30px;
        margin:10px;
        width:auto;
    }

    p {
        :nth-child(1) {
            height: 26px;
            margin: 15px;
            padding: 5px;
            color: black;
            border-radius: 15px 0 0 15px;
            background-color: white;
        }

        :nth-child(2) {
            height: 26px;
            margin: 15px;
            padding: 5px;
            color: black;
            border-radius: 0 15px 15px 0 ;
            background-color: #b3b3ff;
            margin-left: -10px;
        }
    }
`

const StyledPlayersContainer = styled.div`
    margin-top: -70px;
    display: flex;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const StyledPlayerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    width: 300px;

    :nth-child(1) {
        margin-left: 150px;
    }
    :nth-child(3) {
        margin-right: 150px;
    }
    img {
        margin-left: 83px;
        width: 90%;
    }
    `

const StyledPlayerTitle = styled.div`
`

const StyledVersusCenterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    width: 300px;


    img {
        width: 100%;
    }
`

const StyledHitPan = styled.button`
    padding: 15px 25px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color:red;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;

    :hover {
            background-color: #E10000;

        }

    :active {
        background-color: #AF0000;
        box-shadow: 0 5px #666;
    }
`

const StyledHits = styled.div`
    margin-top: 30px;
    font-family: 'Frijole', cursive;
    margin-right: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    

    p {
        transform: rotate(-20deg);
        margin-bottom: -10px;
        font-size: 30px;

        :nth-child(2) {
            color:white;
            font-size: 60px;
            margin-top: -10px;
        }
    }


`

export {
    StyledHits,
    StyledFullContainer,
    StyledPlayerContainer,
    StyledPlayerTitle,
    StyledVersusCenterContainer,
    StyledHitPan,
    StyledPlayersContainer,
    StyledGameStatusContainer
}