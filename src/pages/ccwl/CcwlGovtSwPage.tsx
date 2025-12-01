import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const CcwlGovtSwPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['ccl-govsw'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Government social workers facilitate the legal process and ensure the child understands the proceedings.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Follow Up</h3>
      <p>They monitor the child's progress during probation and assist in reintegrating them into society after release.</p>
    </ContentView>
  );
};
export default CcwlGovtSwPage;