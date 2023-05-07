import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingBikes } from './Loading';
import { MainContainer, BackBtn, OneH3, PainImg, DivRow, OneBike, OneParagraph } from './Style'

export const SingleBike = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://project-express-api-malqs4r4oa-lz.a.run.app/bikes/9')
      .then((res) => res.json())
      .then((data) => {
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
      <OneBike>

        <DivRow>
          <PainImg src="https://i.postimg.cc/TwtSD9gt/pain.jpg" alt="The Pain" />
          <OneH3>{list.name} 🥇</OneH3>
        </DivRow>

        <OneParagraph> The {list.type} - it has lost it&apos;s fixed function due to
        age of the owner and upgraded some bodyparts but still going.
        <br />
        <br />
        Keep up the spirit little one!
        </OneParagraph>
      </OneBike>

      <Link to="/">
        <BackBtn>
            Back to bikes
        </BackBtn>
      </Link>
    </MainContainer>
  );
}