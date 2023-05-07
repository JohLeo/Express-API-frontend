import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { MainContainer, StartBtn } from './Style';

const StartPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

export const Start = () => {
  return (
    <MainContainer>
      <Player
        src="https://assets4.lottiefiles.com/packages/lf20_uejpuuxi.json"
        className="player"
        loop
        autoplay
        speed={1}
        style={{ height: '150px', width: '150px' }} />
      <StartPage>

        <Link to="/singlebike">
          <StartBtn
            type="button"> Most used bike
          </StartBtn>
        </Link>

        <Link to="/alivebikes">
          <StartBtn
            type="button">
            Alive and still rolling
          </StartBtn>
        </Link>

        <Link to="/bikes">
          <StartBtn
            type="button">
            All bikes
          </StartBtn>
        </Link>

      </StartPage>
    </MainContainer>
  )
}