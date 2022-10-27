import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Calendar } from '../components/pages/Calendar';
import { Clock } from '../components/pages/Clock';
import { Home } from '../components/pages/Home';
import { Pokemon } from '../components/pages/Pakemon';
import { Page404 } from '../components/pages/Page404';

export const Router = memo(() => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='clock' element={<Clock />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='Pokemon' element={<Pokemon />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
});
