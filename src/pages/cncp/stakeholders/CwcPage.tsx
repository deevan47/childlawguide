import React from 'react';
import ContentView from '../../../components/ContentView';
import { TOPIC_CONTENT } from '../../../constants';

const CwcPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-stk-cwc'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>The Child Welfare Committee (CWC) is the competent authority to deal with CNCP. It consists of a Chairperson and four members.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Powers</h3>
      <p>The CWC has the power of a First Class Judicial Magistrate. They decide the best placement for a child—be it restoration to parents or institutional care.</p>
    </ContentView>
  );
};
export default CwcPage;