import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  margin-bottom: 50px;
  padding: 70px 0 0;
  background-color: var(--secondary);
  color: white;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 24px;
`;

export const Small = styled.small`
  display: block;
  font-size: 2rem;
  font-weight: normal;
`;

export const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: normal;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 0;

  a {
    width: 100%;
    margin: 10px 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    a {
      width: 150px;
      margin: 0 10px;
    }
  }

  @media (min-width: 992px) {
    a {
      width: 160px;
      margin: 0 20px;
    }
  }
`;