import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const MissingRunawayPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cncp-missing'], subtitle: 'Children in Need of Care and Protection' };
  
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>A missing child is defined as a person below 18 years of age whose whereabouts are not known. Police must register an FIR immediately.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">TrackChild Portal</h3>
      <p>The government maintains a national database 'TrackChild' to help trace missing children and match them with those found.</p>
    </ContentView>
  );
};
export default MissingRunawayPage;