import styled from "styled-components";

export const ButtonComponent = styled.button`
  display: inline-flex;
  width: ${({ block }) => block ? '100%' : 'auto' };
  align-items: center;
  justify-content: center;
  height: ${({ small }) => small ? "3rem" : "4rem"};
  background-color: white;
  border: 1px solid var(--secondary);
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.4rem;
  white-space: nowrap;
  color: var(--secondary);
  padding: 0 10px;
  box-shadow: ${({ flat }) => flat ? "0 0 0 rgba(0,0,0,0)" : "0 1px 6px rgba(0,0,0,0.16)"};
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 5px 12px rgba(0,0,0,0.2);
  }
`;