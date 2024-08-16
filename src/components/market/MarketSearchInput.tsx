import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MarketSearchInput() {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const urlSearchParams = new URLSearchParams(location.search);
  const currentInputState = urlSearchParams.get('searchKeyword');
  const [isFocusedOn, setIsFocusedOn] = React.useState(() => !currentInputState);

  const handleSearchMarket = () => {
    if (!inputRef.current) return;
    if (!inputRef.current?.value) {
      urlSearchParams.delete('searchKeyword');
    } else {
      urlSearchParams.set('searchKeyword', inputRef.current?.value);
    }
    setIsFocusedOn(false);
    navigate({ pathname: location.pathname, search: urlSearchParams.has('searchKeyword') ? `?${urlSearchParams}` : '' }, { replace: true });
  };

  const handleClearSearchMarket = () => {
    if (!inputRef.current) return;
    setIsFocusedOn(true);
    inputRef.current.value = '';
    navigate({ pathname: location.pathname, search: '' }, { replace: true });
  };

  const handleKeyUpMarketEvent = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearchMarket();
    }
  };

  const handleFocusEvent = () => {
    setIsFocusedOn(true);
  };

  const handleBlurEvent = () => {
    setIsFocusedOn(!currentInputState);
  };

  React.useEffect(function initializeInputValue() {
    if (!inputRef.current) return;
    inputRef.current.value = currentInputState as string;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.MarketSearchInput onBlur={handleBlurEvent}>
      <input ref={inputRef} onKeyDown={handleKeyUpMarketEvent} onFocus={handleFocusEvent} />
      {isFocusedOn ? (
        <FaSearch cursor="pointer" size={25} onClick={handleSearchMarket} />
      ) : (
        <TfiClose size={25} onClick={handleClearSearchMarket} />
      )}
    </S.MarketSearchInput>
  );
}

const S = {
  MarketSearchInput: styled.div`
    position: sticky;
    z-index: 3;
    height: 50px;
    top: -10px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.theme.colors.white};
    input {
      width: 100%;
      height: 30px;
      border: 1px solid ${(props) => props.theme.colors.black};
      padding-left: 10px;
    }
  `,
};
