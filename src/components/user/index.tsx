import { flexCenter } from '@/styles/Common';
import { IUserDetailResponse } from '@/types/auth';
import { FaUser } from 'react-icons/fa';
import styled from 'styled-components';

interface IUser {
  data: IUserDetailResponse;
  handleSignOut: () => void;
}

export default function User({ data, handleSignOut }: IUser) {
  return (
    <S.User>
      <div className="user-header">
        <h1>회원정보</h1>
      </div>
      <div className="user__info">
        <div className="user__icon-wrapper">
          <FaUser size={32} cursor="pointer" />
        </div>
        <div>
          <p className="user__name">{data.value.email}</p>
          <p></p>
        </div>
      </div>
      <button onClick={handleSignOut} className="sign-out-button" type="submit">
        LOGOUT
      </button>
    </S.User>
  );
}

const S = {
  User: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .user-header {
      display: flex;
      justify-content: center;
      margin: 40px;
      h1 {
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
    .user {
      &__info {
        display: flex;
      }
      &__icon-wrapper {
        border-radius: 100px;
        width: 55px;
        height: 55px;
        ${flexCenter}
        width: fit-content;
        aspect-ratio: 1;
        border: 2px solid ${(props) => props.theme.colors.black};
      }
    }

    .sign-out-button {
      width: 100%;
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
