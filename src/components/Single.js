import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingBikes } from './Loading';

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
    <div className="main-container">
      <Link to="/">
        <button
          className="btn-start"
          type="button">
            Back to bikes
        </button>
      </Link>
      <div className="bike-container">
        <h3>🥇 {list.name}</h3>
        <p> The {list.type} - it has lost it&apos;s fixed function due to
        age of the owner and upgraded some bodyparts but still going.
        <br />
        <br />
        Keep up the spirit little one!
        </p>
      </div>

    </div>
  );
}