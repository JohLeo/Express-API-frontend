import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingBikes } from './Loading';

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
    <div className="main-container">
      <Link to="/">
        <button
          className="btn-start"
          type="button">
            Back to bikes
        </button>
      </Link>
      {list.map((bike) => (
        <div
          key={bike.id}
          className="alive-container">
            🏔️  {bike.name}
        </div>
      ))}
    </div>

  );
};

