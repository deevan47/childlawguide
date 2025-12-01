import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const PocsoActPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cat-pocso'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>The POCSO Act (2012) was enacted to protect children from sexual assault, sexual harassment, and pornography.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Key Features</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Gender-neutral law.</li>
        <li>Mandatory reporting of cases.</li>
        <li>Child-friendly court procedures.</li>
        <li>No confrontation with the accused.</li>
      </ul>
    </ContentView>
  );
};
export default PocsoActPage;