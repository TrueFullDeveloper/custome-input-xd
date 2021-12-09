import CustomInput from "components/CustomInput";
import { EditorContainer, TitleSection } from "pages/Editor/Styled";
import React from "react";

import LogoIcon from "static/images/Editor/logo_icon.svg";

const Editor: React.FC = () => {
  return (
    <EditorContainer>
      <div>
        <TitleSection>
          <img src={LogoIcon} alt={""} />
          Editor
        </TitleSection>
        <CustomInput />
      </div>
    </EditorContainer>
  );
};

export default Editor;
