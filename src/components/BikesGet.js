/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingBikes } from './Loading';
import { MainContainer, BackBtn, ListAllBikes, ListParagraph, ListH3 } from './Style'

export const AllBikes = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://project-express-api-malqs4r4oa-lz.a.run.app/bikes')
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.bikesAll);
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

      {list.map((bikesAll) => (
        <ListAllBikes key={bikesAll._id}>
          <ListH3>{bikesAll.name}</ListH3>
          <ListParagraph>{bikesAll.type}</ListParagraph>
        </ListAllBikes>
      ))}

      <Link to="/">
        <BackBtn>
            Back to bikes
        </BackBtn>
      </Link>
    </MainContainer>
  );
}