import { flexCenter } from '@/styles/Common';
import { IUserDetailResponse } from '@/types/auth';
import { FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import Button from '@/components/common/Button';
import Line from '@/components/common/Line';

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
        <div className="user__info--wrapper">
          <p className="user__info--text">
            <strong>이메일:</strong> {data.value.email}
          </p>
          <p className="user__info--text">
            <strong>이름:</strong> {data.value.name}
          </p>
        </div>
      </div>
      <Line margin="25px 0" isVertical={false} />
      <div className="user__info--wrapper">
        <p className="user__info--text">
          <strong>전화번호:</strong> {data.value.phoneNumber}
        </p>
      </div>
      <Line margin="25px 0" isVertical={false} />
      <Button onClick={handleSignOut} borderRadius="5px" backgroundColor="red" color="white" buttonType="custom" type="submit">
        LOGOUT
      </Button>
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
        align-items: center;
        gap: 10px;
        &--wrapper {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        &--text {
          strong {
            font-weight: 600;
          }
        }
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
