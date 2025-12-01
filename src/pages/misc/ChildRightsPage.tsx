import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

const ChildRightsPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({ onBack, onHome }) => {
  const data = { ...TOPIC_CONTENT['cat-rights'], subtitle: 'Children in Need of Care and Protection' };
  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <p>The UNCRC defines four main categories of child rights:</p>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Right to Survival:</strong> Life, health, nutrition.</li>
        <li><strong>Right to Protection:</strong> From abuse, neglect, exploitation.</li>
        <li><strong>Right to Development:</strong> Education, play, cultural activities.</li>
        <li><strong>Right to Participation:</strong> Freedom of expression and opinion.</li>
      </ul>
    </ContentView>
  );
};
export default ChildRightsPage;