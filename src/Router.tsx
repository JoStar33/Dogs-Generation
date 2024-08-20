import { Route, Routes } from 'react-router-dom';
import routerPath from '@/constants/routerPath';
import HomePage from '@/pages';
import SignInPage from '@/pages/signIn';
import { PublicRoute } from '@/components/routes/PublicRoute';
import { PrivateRoute } from '@/components/routes/PrivateRoute';
import UserPage from '@/pages/user';
import SignUpPage from '@/pages/signUp';
import MarketPage from '@/pages/market';
import ContentsWritePage from '@/pages/contents/write';
import ContentsPage from '@/pages/contents';

export default function Router() {
  return (
    <Routes>
      <Route path={routerPath.HOME} element={<HomePage />} />
      <Route path={routerPath.CONTENTS} element={<ContentsPage />} />
      <Route path={routerPath.MARKET} element={<MarketPage />} />
      <Route element={<PublicRoute />}>
        <Route path={routerPath.SIGN_UP} element={<SignUpPage />} />
        <Route path={routerPath.SIGN_IN} element={<SignInPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path={routerPath.USER} element={<UserPage />} />
        <Route path={routerPath.CONTENTS_WRITE} element={<ContentsWritePage />} />
      </Route>
    </Routes>
  );
}
