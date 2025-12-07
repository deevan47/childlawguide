import React from "react";
import ContentView from "../../../components/ContentView";
import { TOPIC_CONTENT } from "../../../constants";

const DcpuPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const data = {
    ...TOPIC_CONTENT["cncp-stk-dcpu"],
    subtitle: "Children in Need of Care and Protection",
  };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>
        The District Child Protection Unit (DCPU) is responsible for
        implementing the JJ Act at the district level.
      </p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Functions</h3>
      <p>
        They identify vulnerable families, support CWCs, and oversee the
        functioning of Child Care Institutions (CCIs) in the district.
      </p>
    </ContentView>
  );
};
export default DcpuPage;
