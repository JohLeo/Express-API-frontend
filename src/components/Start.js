import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StartPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

export const Start = () => {
  return (
    <div className="main-container">
      <StartPage>

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
      </StartPage>
    </div>
  )
}