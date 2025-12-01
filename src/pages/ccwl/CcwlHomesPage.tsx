import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const CcwlHomesPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['ccl-homes'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p><strong>Observation Homes:</strong> For temporary stay during the inquiry pendency.</p>
      <p className="mt-2"><strong>Special Homes:</strong> For long-term rehabilitation of children found to have committed an offense.</p>
      <p className="mt-2"><strong>Place of Safety:</strong> For children between 16-18 accused of heinous crimes.</p>
    </ContentView>
  );
};
export default CcwlHomesPage;