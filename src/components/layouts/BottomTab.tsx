import styled from 'styled-components';

export default function BottomTab() {
  return <S.BottomTab>BottomTab</S.BottomTab>;
}

const S = {
  BottomTab: styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.subMain};
    height: 80px;
  `,
};
