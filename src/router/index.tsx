import type { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../pages/register';
import SignIn from '../pages/signin';
import ForgotPassword from '../pages/forgotPassword';
import Dashboard from '../pages/dashboard';
import Activities from '../pages/activities';
import Calendar from '../pages/calendar';
import PrivateRoute from './PrivateRoute';
import PrivateLayout from '../components/privateLayout';

function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route element={<PrivateLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/calendar" element={<Calendar />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
