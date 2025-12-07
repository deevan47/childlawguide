import React from "react";
import ContentView from "../../../components/ContentView";
import { TOPIC_CONTENT } from "../../../constants";

const GovtSwPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const data = {
    ...TOPIC_CONTENT["cncp-stk-govsw"],
    subtitle: "Children in Need of Care and Protection",
  };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>
        Government social workers conduct social investigation reports (SIR) to
        understand the child's background.
      </p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Field Work</h3>
      <p>
        They visit homes, schools, and communities to gather information that
        helps the CWC make informed decisions about the child's future.
      </p>
    </ContentView>
  );
};
export default GovtSwPage;
