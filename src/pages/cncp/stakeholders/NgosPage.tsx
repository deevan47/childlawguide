import React from 'react';
import ContentView from '../../../components/ContentView';
import { TOPIC_CONTENT } from '../../../constants';

const NgosPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-stk-ngos'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>NGOs partner with the government to provide shelter, education, and vocational training.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Outreach</h3>
      <p>They often run Childline (1098) services and conduct rescue operations for children in distress.</p>
    </ContentView>
  );
};
export default NgosPage;