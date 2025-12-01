import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const ChildrenProstitutionPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-prostitution'], subtitle: 'Children in Need of Care and Protection' };
  
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Children found in prostitution are victims of trafficking and sexual abuse. They require immediate rescue and sensitive handling.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Support Systems</h3>
      <p>They are provided with legal aid, medical checkups, and psychological counseling to help them recover from trauma.</p>
    </ContentView>
  );
};
export default ChildrenProstitutionPage;