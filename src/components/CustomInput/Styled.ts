import styled from "styled-components";

export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid #e1e1ec;
  background: #ffffff;
  border-radius: 10px;

  padding: 24px;

  min-width: max-content;
  width: 600px;

  height: 650px;
  max-height: max-content;

  white-space: normal;

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  --moz-scrollbar-width: none;
`;
