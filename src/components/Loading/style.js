import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid var(--secondary);
  border-left: 0;
  border-top: 0;
  animation: ${rotate} 1s linear infinite;
`;