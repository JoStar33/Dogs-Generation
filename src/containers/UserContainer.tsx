import User from '@/components/user';
import routerPath from '@/constants/routerPath';
import { storage } from '@/utils/storage';
import { useNavigate } from 'react-router-dom';

export default function UserContainer() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    storage.removeAccessToken();
    navigate(routerPath.HOME);
  };
  return <User handleSignOut={handleSignOut} />;
}
