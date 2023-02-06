import styled, { css } from "styled-components";

const ExWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: #ccc;
`;

const ExTitle = styled.h3`
  text-transform: uppercase;
  color: red;
  ${(props) =>
    props.dark &&
    css`
      color: #7b2d2d;
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 12px;
      text-transform: lowercase;
    `}
`;

const ExParaph = styled.p`
  line-height: 1.3;
  color: blueviolet;
`;

const Example = () => {
  return (
    <ExWrap>
      <ExTitle dark size="sm">
        sdada
      </ExTitle>
      <ExParaph>Lorem, ipsum dolor.</ExParaph>
    </ExWrap>
  );
};

export default Example;
