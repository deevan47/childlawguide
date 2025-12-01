import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

type Props = { onBack: () => void; onHome: () => void };

const ChildrenFoundBeggingPage: React.FC<Props> = ({ onBack, onHome }) => {
  const data = TOPIC_CONTENT['children-found-begging'] || TOPIC_CONTENT['default'];
  return <ContentView data={data} onBack={onBack} onHome={onHome} />;
};

export default ChildrenFoundBeggingPage;
