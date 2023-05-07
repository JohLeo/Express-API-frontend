import React from 'react';
import { Link } from 'react-router-dom';
// import cloudapilogo from './cloudapi.png';

export const Start = () => {
  return (
    <div className="main-container">
      <Link to="/bikes">
        <button
          className="btn-start"
          type="button">
            All bikes
        </button>
      </Link>

      <Link to="/singlebike">
        <button
          className="btn-start"
          type="button"> Most used bike
        </button>
      </Link>

      <Link to="/alivebikes">
        <button
          className="btn-start"
          type="button">
            Alive and still rolling
        </button>
      </Link>
    </div>
  )
}