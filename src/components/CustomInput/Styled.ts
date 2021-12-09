import styled, { keyframes } from "styled-components";

const CursorAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }`;

export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #b99566;
  background: #c7a575;
  border-radius: 4px;

  padding: 24px;

  min-width: max-content;
  width: 600px;

  height: 450px;
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

export const TextContainer = styled.span`
  display: block;

  min-width: max-content;

  font-size: 28px;
  color: #0f0f0f;

  span {
    font-weight: 600;
    color: #0f0f0f;
  }

  label {
    font-weight: 800;

    animation: ${CursorAnimation} 1s ease-out infinite;
  }
`;

export const Link = styled.a`
  display: block;
  max-width: max-content;
  margin-left: 20px;

  padding: 11px 40px;
  background: #025c03;
  border-radius: 15px;

  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  align-content: center;
  margin-top: 25px;
`;
