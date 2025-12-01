import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const OrphansPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-orphans'], subtitle: 'Children in Need of Care and Protection' };
  
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Orphaned children have no living parents or willing guardians. They are the primary responsibility of the state.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Adoption</h3>
      <p>CARA (Central Adoption Resource Authority) facilitates the legal adoption process to find a loving family for every orphan.</p>
    </ContentView>
  );
};
export default OrphansPage;