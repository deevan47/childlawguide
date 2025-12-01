import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const CcwlNgosPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['ccl-ngos'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>NGOs provide legal aid, counseling, and vocational training to children in conflict with the law.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Reform</h3>
      <p>They run programs within Observation Homes to teach skills that help children earn a livelihood and stay away from crime.</p>
    </ContentView>
  );
};
export default CcwlNgosPage;