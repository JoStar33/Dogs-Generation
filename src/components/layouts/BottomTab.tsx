import router from '@/constants/router';
import { flexCenter } from '@/styles/Common';
import styled from 'styled-components';

export default function BottomTab() {
  return <S.BottomTab>{router.map((bottomTab) => bottomTab.icon)}</S.BottomTab>;
}

const S = {
  BottomTab: styled.div`
    ${flexCenter}
    width: 100%;
    height: 80px;
    background-color: ${(props) => props.theme.colors.subMain};
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
