import styled from "styled-components";

export const EditorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  padding-top: 20px;
  width: 100vw;
  height: calc(100vh - 20px);

  overflow: hidden;
  background: #f2d09e;
`;

export const TitleSection = styled.span`
  display: flex;
  align-content: center;

  margin-bottom: 10px;

  font-size: 48px;
  line-height: 54px;
  color: rgba(0, 0, 0, 0.89);

  > img {
    display: block;

    width: 48px;
    height: 48px;

    margin-right: 8px;
  }
`;
