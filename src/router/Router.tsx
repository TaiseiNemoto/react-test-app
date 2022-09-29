import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Clock } from '../components/pages/Clock';
import { Home } from '../components/pages/Home';

export const Router = memo(() => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='clock' element={<Clock />} />
    </Routes>
  );
});
