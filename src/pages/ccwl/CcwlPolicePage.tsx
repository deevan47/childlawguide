import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const CcwlPolicePage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['ccl-police'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Police designated for CCL cases must never use handcuffs. They must record information in the General Diary, not an FIR (for petty offenses).</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Apprehension</h3>
      <p>Upon apprehension, the police must inform the parents and the Probation Officer immediately.</p>
    </ContentView>
  );
};
export default CcwlPolicePage;