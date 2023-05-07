import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AliveBikes } from 'components/AliveBike';
import { AllBikes } from 'components/BikesGet';
import { SingleBike } from 'components/Single';
import { Start } from 'components/Start';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/bikes" element={<AllBikes />} />
          <Route path="/singlebike" element={<SingleBike />} />
          <Route path="/alivebikes" element={<AliveBikes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
