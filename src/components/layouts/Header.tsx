import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import Icons from '@/components/common/Icon';

interface IHeader {
  setIsOpenAside: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsOpenAside }: IHeader) {
  return (
    <S.Header>
      <RxHamburgerMenu size={25} onClick={() => setIsOpenAside((prev) => !prev)} />
      <Icons name="Logo" width="35px" height="35px" />
      <div className="mock"></div>
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
