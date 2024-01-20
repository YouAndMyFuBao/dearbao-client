import { useState, useEffect } from 'react';

const AdjectiveList = ['귀여운', '예쁜', '멋진'];
const NounList = ['판다', '팬더'];
const getRandomItem = (list: string[]) => list[Math.floor(Math.random() * list.length)];

const NickName = () => {
  const [combinedText, setCombinedText] = useState<string>('');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    generateRandomText();
  }, []);

  // 자동 생성 닉네임
  const generateRandomText = () => {
    const randomAdjective = getRandomItem(AdjectiveList);
    const randomNoun = getRandomItem(NounList);
    const newCombinedText = `${randomAdjective}${randomNoun}`;

    setCombinedText(newCombinedText);
    validateInput(newCombinedText);
  };

  // 닉네임 입력
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim().slice(0, 8);
    setCombinedText(inputValue);
    validateInput(inputValue);
  };

  // 닉네임 유효성 검사
  const validateInput = (inputValue: string) => {
    const isLengthValid = inputValue.length >= 2 && inputValue.length <= 8;
    const isFormatValid = /^\S+$/.test(inputValue);

    setIsInputValid(isLengthValid && isFormatValid);

    if (!isLengthValid || inputValue.length === 0) {
      setErrorMessage('닉네임을 2~8자로 입력해주세요.');
    } else {
      setErrorMessage('');
    }
  };

  // 닉네임 전체 삭제
  const handleDeleteClick = () => {
    setCombinedText('');
    setIsInputValid(false);
    setErrorMessage('닉네임을 2~8자로 입력해주세요.');
  };

  // '다음으로' 버튼 클릭
  const handleNextClick = () => {
    if (isInputValid) {
      alert('닉네임 생성 성공!');
    }
  };

  return (
    <>
      <div>
        <input
          value={combinedText}
          onChange={handleInputChange}
          placeholder="국문/영/숫자 조합 공백없이 10자 이하"
          maxLength={8}
          style={{ borderColor: isInputValid ? 'initial' : 'red' }}
        />
        {combinedText && <button onClick={handleDeleteClick}>전체 삭제</button>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
      <button
        disabled={!isInputValid}
        onClick={handleNextClick}
        style={{ color: isInputValid ? 'blue' : 'red' }}
      >
        다음으로
      </button>
    </>
  );
};

export default NickName;
