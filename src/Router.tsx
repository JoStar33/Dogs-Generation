import { Route, Routes } from 'react-router-dom';
import routerPath from '@/constants/routerPath';
import Home from '@/pages';
import SignInPage from '@/pages/SignInPage';
import { PublicRoute } from '@/components/routes/PublicRoute';
import { PrivateRoute } from './components/routes/PrivateRoute';
import UserPage from './pages/UserPage';

export default function Router() {
  return (
    <Routes>
      <Route path={routerPath.HOME} element={<Home />} />
      <Route element={<PublicRoute />}>
        <Route path={routerPath.SIGN_IN} element={<SignInPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={routerPath.USER} element={<UserPage />} />
      </Route>
    </Routes>
  );
}
