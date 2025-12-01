import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

type Props = { onBack: () => void; onHome: () => void };

const ChildrenProstitutionPage: React.FC<Props> = ({ onBack, onHome }) => {
  const data = TOPIC_CONTENT['children-found-in-prostitution'] || TOPIC_CONTENT['default'];
  return <ContentView data={data} onBack={onBack} onHome={onHome} />;
};

export default ChildrenProstitutionPage;
