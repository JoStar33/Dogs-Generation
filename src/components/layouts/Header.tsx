import styled from 'styled-components';

export default function Header() {
  return <S.Header>Header</S.Header>;
}

const S = {
  Header: styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.subMain};
    height: 80px;
  `,
};
