import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const JjbPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['ccl-jjb'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>The Juvenile Justice Board (JJB) handles cases of children in conflict with the law. It is not a regular court but a child-friendly bench.</p>
      <h3 className="text-xl font-bold text-white mt-6 mb-2">Composition</h3>
      <p>It comprises a Principal Magistrate and two social workers (at least one woman), focusing on reform rather than punishment.</p>
    </ContentView>
  );
};
export default JjbPage;