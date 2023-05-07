import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingBikes } from './Loading';

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
    <div className="main-container">
      <Link to="/">
        <button
          className="btn-start"
          type="button">
            Back to bikes
        </button>
      </Link>

      {list.map((bikesAll) => (
        <div
          key={bikesAll.id}
          className="bike-container">
          <h3>{bikesAll.name}</h3>
          <p>{bikesAll.type}</p>
        </div>
      ))}
    </div>
  );
}