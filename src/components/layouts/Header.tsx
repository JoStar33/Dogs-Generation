import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import Icons from '@/components/common/Icon';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import routerPath from '@/constants/routerPath';
import { checkUserLoggedIn } from '@/utils/checkUserLoggedIn';
import { FiLogIn } from 'react-icons/fi';

interface IProps {
  setIsOpenAside: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsOpenAside }: IProps) {
  const navigate = useNavigate();

  return (
    <S.Header>
      <RxHamburgerMenu size={25} onClick={() => setIsOpenAside((prev) => !prev)} cursor="pointer" />
      <Icons onClick={() => navigate(routerPath.HOME)} name="Logo" width="35px" height="35px" />
      {checkUserLoggedIn() ? (
        <FaUser size={25} cursor="pointer" onClick={() => navigate(routerPath.USER)} />
      ) : (
        <FiLogIn size={25} cursor="pointer" onClick={() => navigate(routerPath.SIGN_IN)} />
      )}
    </S.Header>
  );
}

const S = {
  Header: styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.subMain};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    .mock {
      width: 25px;
      height: 25px;
    }
  `,
};
