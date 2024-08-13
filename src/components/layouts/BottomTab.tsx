import router from '@/constants/bottomTab';
import { flexCenter } from '@/styles/Common';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function BottomTab() {
  return (
    <S.BottomTab>
      {router.map((bottomTab, index) => (
        <Link key={index} to={bottomTab.path}>
          <bottomTab.icon key={index} />
        </Link>
      ))}
    </S.BottomTab>
  );
}

const S = {
  BottomTab: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    background-color: ${(props) => props.theme.colors.subMain};
    & * {
      cursor: pointer;
    }
    .home-wrapper {
      ${flexCenter}
      width: 65px;
      height: 65px;
      border-radius: 100px;
      background-color: ${(props) => props.theme.colors.white};
      box-shadow:
        0 10px 10px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.12);
      &__main {
        ${flexCenter}
        width: 55px;
        height: 55px;
        border-radius: 100px;
        background-color: ${(props) => props.theme.colors.mustard};
      }
    }
  `,
};
