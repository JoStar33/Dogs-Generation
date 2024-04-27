import styled from 'styled-components';

interface IUser {
  handleSignOut: () => void;
}

export default function User({ handleSignOut }: IUser) {
  return (
    <S.User>
      <div className="user__button-wrapper">
        <button onClick={handleSignOut} className="sign-out-button" type="submit">
          LOGOUT
        </button>
      </div>
    </S.User>
  );
}

const S = {
  User: styled.div`
    .user__button-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .sign-out-button {
      width: 30%;
      border: none;
      border-radius: 8px;
      font-size: 0.7rem;
      height: 40px;
      font-weight: 700;
      margin-top: 50px;
      background-color: ${(props) => props.theme.colors.red};
    }
  `,
};
