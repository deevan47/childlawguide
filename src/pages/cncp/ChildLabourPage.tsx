import React from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";
import ConstImg from "../../assets/images/const.png"; 

type Props = { onBack: () => void; onHome: () => void };

const ChildLabourPage: React.FC<Props> = ({ onBack, onHome }) => {
  const baseData = TOPIC_CONTENT["cncp-labour"] || TOPIC_CONTENT["default"];

  const pageData = {
    ...baseData,
    title: "CHILD LABOUR",
    subtitle: "Children in Need of Care and Protection",
    characterImage: ConstImg,
  };

  return (
    <ContentView data={pageData} onBack={onBack} onHome={onHome}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Content Coming Soon
      </h1>

    </ContentView>
  );
};

export default ChildLabourPage;
