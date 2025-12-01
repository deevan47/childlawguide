import React from 'react';
import ContentView from '../../../components/ContentView';
import { TOPIC_CONTENT } from '../../../constants';

type Props = { onBack: () => void; onHome: () => void };

const HomesPage: React.FC<Props> = ({ onBack, onHome }) => {
  const data = TOPIC_CONTENT['stakeholders/homes-for-children'] || TOPIC_CONTENT['default'];
  return <ContentView data={data} onBack={onBack} onHome={onHome} />;
};

export default HomesPage;
