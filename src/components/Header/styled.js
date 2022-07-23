import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #CCC;
    border-radius: 4px;
    width: 100%;
    padding: 0 8px;
    height: 44px;
    margin-right: 12px;
  }

  button {
    background-color: #1da1f2;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    padding: 8px;
    transition: 200ms;

    &:hover {
      filter: brightness(1.2)
    }
  }
`;