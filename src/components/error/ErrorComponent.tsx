import styled from 'styled-components';

interface IFallbackProps {
  error?: Error;
  margin?: string;
  padding?: string;
  height?: string;
  text?: string;
  children?: React.ReactNode;
}

function Text({ margin, padding, height, text, children }: IFallbackProps) {
  return (
    <S.ErrorComponentText padding={padding} margin={margin} height={height}>
      <div>
        <StyledTitle>{text ?? '에러 발생!'}</StyledTitle>
        <div className="error-detail">
          <p>잠시 후 다시 시도해주세요.</p>
          {children}
        </div>
      </div>
    </S.ErrorComponentText>
  );
}

function Modal({ resetErrorBoundary }: { resetErrorBoundary: (...args: Array<unknown>) => void }) {
  return (
    <S.ErrorComponentModal>
      <StyledTitle>잠시 후 다시시도해주세요</StyledTitle>
      <div>
        요청사항을 처리하는데 <br />
        실패했습니다.
      </div>
      <button type="button" onClick={() => resetErrorBoundary()}>
        확인
      </button>
    </S.ErrorComponentModal>
  );
}

const StyledTitle = styled.h1`
  color: var(--171717, #171717);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const S = {
  ErrorComponentText: styled.div<{ padding?: string; margin?: string; height?: string }>`
    text-align: center;
    padding: ${(props) => (props.padding ? props.padding : '120px 0')};
    height: ${(props) => (props.height ? props.height : 'auto')};
    margin: ${(props) => props.margin};
    width: 100%;
    .error-detail {
      color: #a1a1a1;
      font-size: 16px;
      font-weight: 500;
      line-height: 28px; /* 175% */
    }
  `,
  ErrorComponentModal: styled.div``,
};

export const ErrorComponent = { Text, Modal };
