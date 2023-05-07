import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const LoadingBikes = () => {
  return (
    <div className="main-container">
      <Player
        src="https://assets1.lottiefiles.com/packages/lf20_c80tsa9t.json"
        className="player"
        loop
        autoplay
        speed={4}
        style={{ height: '300px', width: '300px' }} />
    </div>
  );
}