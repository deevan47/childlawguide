import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const CcwlParentsPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['ccl-parents'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Parents must attend JJB proceedings. They play a vital role in ensuring the child follows probation rules.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Counseling</h3>
      <p>The JJB often mandates counseling for parents to improve the home environment and prevent re-offending.</p>
    </ContentView>
  );
};
export default CcwlParentsPage;