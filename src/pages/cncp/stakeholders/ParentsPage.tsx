import React from "react";
import ContentView from "../../../components/ContentView";
import { TOPIC_CONTENT } from "../../../constants";

const ParentsPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const data = {
    ...TOPIC_CONTENT["cncp-stk-parents"],
    subtitle: "Children in Need of Care and Protection",
  };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>
        Parents are the natural guardians. The state only intervenes when
        parents are unable or unfit to care for the child.
      </p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Restoration</h3>
      <p>
        The primary goal of the CWC is always to restore the child to their
        parents, provided it is in the child's best interest.
      </p>
    </ContentView>
  );
};
export default ParentsPage;
