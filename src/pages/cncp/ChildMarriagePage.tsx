import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const ChildMarriagePage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-marriage'], subtitle: 'Children in Need of Care and Protection' };
  
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Child marriage is a formal marriage or informal union before age 18. It is a violation of human rights that limits children's education, health, and economic opportunities.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Impact</h3>
      <p>It exposes children to violence, abuse, and early pregnancy risks. The Prohibition of Child Marriage Act (PCMA) declares such marriages voidable.</p>
    </ContentView>
  );
};
export default ChildMarriagePage;