import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

type Props = { onBack: () => void; onHome: () => void };

const ChildRightsPage: React.FC<Props> = ({ onBack, onHome }) => {
  const data = TOPIC_CONTENT['child-rights'] || TOPIC_CONTENT['default'];
  return <ContentView data={data} onBack={onBack} onHome={onHome} />;
};

export default ChildRightsPage;
