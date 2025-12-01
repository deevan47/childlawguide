import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const ChildrenFoundBeggingPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-begging'], subtitle: 'Children in Need of Care and Protection' };
  
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Begging rings often exploit children. Under the JJ Act, a child found begging is a Child in Need of Care and Protection, not a criminal.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Rehabilitation</h3>
      <p>These children must be produced before the CWC. The focus is on education, vocational training, and restoring their childhood.</p>
    </ContentView>
  );
};
export default ChildrenFoundBeggingPage;