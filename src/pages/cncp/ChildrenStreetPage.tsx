import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const ChildrenStreetPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-streets'], subtitle: 'Children in Need of Care and Protection' };
  
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Children in street situations live alone or with families on the streets. They are deprived of shelter, education, and healthcare.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Intervention</h3>
      <p>Standard Operating Procedures (SOP 2.0) by the NCPCR mandate immediate identification and rescue, ensuring they are linked to government schemes.</p>
    </ContentView>
  );
};
export default ChildrenStreetPage;