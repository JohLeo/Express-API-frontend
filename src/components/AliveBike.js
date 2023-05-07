/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingBikes } from './Loading';
import { MainContainer, BackBtn, StillAlive } from './Style';

export const AliveBikes = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://project-express-api-malqs4r4oa-lz.a.run.app/bikes/alive/true')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data.body.bike);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingBikes />
  }

  return (
    <MainContainer>

      {list.map((bike) => (
        <StillAlive key={bike._id}>
          🚵🏽 <br />
          {bike.name}
        </StillAlive>
      ))}

      <Link to="/">
        <BackBtn>
            Back to bikes
        </BackBtn>
      </Link>
    </MainContainer>

  );
};

