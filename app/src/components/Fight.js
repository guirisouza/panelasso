import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
import {
    StyledFullContainer,
    StyledPlayerContainer,
    StyledPlayerTitle,
    StyledVersusCenterContainer,
    StyledHitPan,
    StyledHits,
    StyledPlayersContainer,
    StyledGameStatusContainer
} from './style'

const socket = io('http://localhost:5000')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been stablished'))

const Fight = () => {
    const [shakePanPo, setShakePanPo] = useState(false)
    const [shakePanPt, setShakePanPt] = useState(false)

    const [totalHits, setTotalHits] = useState(0)

    const [hitPo, setHitPlayerOne] = useState(0)
    const [hitPt, setHitPlayerTwo] = useState(0)

    useEffect(()=>{
        socket.on('totalPaneleiroHits',)
    },[])

    const handleHitClickPlayerOne = event => {
        setHitPlayerOne(hitPo + 1)
        socket.emit('totalPaneleiroHits',{
            hitPo
        })
    }

    const handleHitClickPlayerTwo = event => {
        setHitPlayerTwo(hitPt + 1)
    }

    return(
        <>
            <StyledFullContainer>
            <StyledGameStatusContainer>
                <div >
                    <p>paneleiros pelo mundo: </p> <p> 3000000000 </p>
                </div>
                <div >
                    <p>Contagem total de paneladas: </p> <p> 3000000000 </p>
                </div>
            </StyledGameStatusContainer>
                <StyledPlayersContainer>
                <StyledPlayerContainer>
                    <StyledPlayerTitle>

                    </StyledPlayerTitle>
                    <img src={process.env.PUBLIC_URL+"/img/panelasso.png"}/>
                    <StyledHitPan onClick={handleHitClickPlayerOne}>Bata!</StyledHitPan>
                    <StyledHits>
                        <p>hit's</p>
                        <p>{hitPo}</p>
                    </StyledHits>
                </StyledPlayerContainer>
                <StyledVersusCenterContainer>
                    <p>{totalHits}</p>
                    <img src={process.env.PUBLIC_URL+"/img/vs.png"}/>
                </StyledVersusCenterContainer>
                <StyledPlayerContainer>
                    <StyledPlayerTitle>
                        
                    </StyledPlayerTitle>
                    <img src={process.env.PUBLIC_URL+"/img/panelasso.png"}/>
                    <StyledHitPan onClick={handleHitClickPlayerTwo}>Bata!</StyledHitPan>
                    <StyledHits >
                        <p>hit's</p>
                        <p>{hitPt}</p>
                    </StyledHits>
                </StyledPlayerContainer>
                </StyledPlayersContainer>
            </StyledFullContainer>
        </>
    )
}

export default Fight