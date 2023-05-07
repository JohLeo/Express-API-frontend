import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { MainContainer } from './Style';

export const LoadingBikes = () => {
  return (
    <MainContainer>
      <Player
        src="https://assets1.lottiefiles.com/packages/lf20_c80tsa9t.json"
        className="player"
        loop
        autoplay
        speed={4}
        style={{ height: '300px', width: '300px' }} />
    </MainContainer>
  );
}

