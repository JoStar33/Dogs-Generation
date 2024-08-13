import Auth from '@/api/auth';
import User from '@/components/user';
import queryKeys from '@/constants/queryKeys';
import routerPath from '@/constants/routerPath';
import useSimpleQuery, { IUseSimpleQuery } from '@/hooks/useSimpleQuery';
import { IUserDetailResponse } from '@/types/auth';
import { storage } from '@/utils/storage';
import { useNavigate } from 'react-router-dom';

export default function UserContainer() {
  const navigate = useNavigate();

  const request: IUseSimpleQuery = {
    queryKey: [queryKeys.USER],
    requestAPI: Auth.Get.userDetail,
    options: {},
  };

  const { data } = useSimpleQuery<IUserDetailResponse>(request);

  const handleSignOut = () => {
    storage.removeAccessToken();
    navigate(routerPath.HOME);
  };

  if (!data) return <></>;

  return <User data={data} handleSignOut={handleSignOut} />;
}
