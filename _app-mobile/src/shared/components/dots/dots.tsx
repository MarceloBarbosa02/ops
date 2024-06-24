import * as S from './dots.style';

const Dots = () => {
  return (
    <S.Wrapper>
      {Array(6)
        .fill('')
        .map((_, index) => (
          <S.WrapperDots key={`${index}`} />
        ))}
    </S.Wrapper>
  );
};

export default Dots;
