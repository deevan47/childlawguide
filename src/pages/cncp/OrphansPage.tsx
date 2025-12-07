import React from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";
import ConstImg from "../../assets/images/const.png"; 


const OrphansPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const data = {
    ...TOPIC_CONTENT["cncp-orphans"],
    subtitle: "Children in Need of Care and Protection",
    characterImage: ConstImg,
  };

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        Content Coming Soon
      </h1>
    </ContentView>
  );
};
export default OrphansPage;
