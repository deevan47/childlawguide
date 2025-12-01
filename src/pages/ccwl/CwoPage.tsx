import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const CwoPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['ccl-cwo'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>The Probation Officer (PO) is the most critical link for the JJB. They act as a friend and guide to the child.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">SIR</h3>
      <p>They prepare the Social Investigation Report (SIR) which helps the board decide the best rehabilitation plan for the child.</p>
    </ContentView>
  );
};
export default CwoPage;