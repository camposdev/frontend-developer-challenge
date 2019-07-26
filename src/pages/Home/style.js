import styled from "styled-components";
import Button from "../../components/Button";

export const Section = styled.section`
  margin-bottom: 150px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const LargeButton = styled(Button)`
  display: flex;
  width: 26rem;
  margin: 0 auto;
`;

export const TextCenter = styled.p`
  text-align: center;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 992px) {
    width: auto;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const FieldGroup = styled.div`
  flex: 1;
  margin: 0 0 20px;

  @media (min-width: 768px) {
    margin: 0 20px;
  }
  @media (min-width: 992px) {
    flex: 0;
  }
`;

export const Field = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  border: 1px solid ${({ error }) => error ? 'var(--danger)' : 'var(--secondary)'};
  padding: 10px;
  outline: none;
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 0 0 2px ${({ error }) => error ? 'rgba(255,64,30,.1)' : 'rgba(0,0,0,.1)'};
  }

  @media (min-width: 992px) {
    width: 340px;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 1.2rem;
  color: var(--danger);
  margin-top: 5px;
`;