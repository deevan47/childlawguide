import React from 'react';
import ContentView from '../../../components/ContentView';
import { TOPIC_CONTENT } from '../../../constants';

const HomesPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-stk-homes'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>Child Care Institutions (CCIs) provide residential care for children who have no safe family environment.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Types</h3>
      <p>Children's Homes, Shelter Homes (for emergency care), and Specialized Adoption Agencies (SAAs) for adoptable children.</p>
    </ContentView>
  );
};
export default HomesPage;