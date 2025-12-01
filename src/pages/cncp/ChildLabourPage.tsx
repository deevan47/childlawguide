import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

type Props = { onBack: () => void; onHome: () => void };

const ChildLabourPage: React.FC<Props> = ({ onBack, onHome }) => {
  // 1. Get the base data
  const baseData = TOPIC_CONTENT['cncp-labour'] || TOPIC_CONTENT['default'];

  // 2. Override specific fields locally
  // "Child Labour is the title then it should be under that Children in Need of Care and Protection"
  const pageData = {
    ...baseData,
    title: 'CHILD LABOUR',
    subtitle: 'Children in Need of Care and Protection', // HARDCODED FOR THIS PAGE
  };

  return (
    <ContentView data={pageData} onBack={onBack} onHome={onHome}>
      
      {/* --- EDIT YOUR CONTENT BELOW THIS LINE --- */}
      
      <p>
        Child labour is not just work; it is the <strong>exploitation</strong> of children through any form of work that deprives them of their childhood, interferes with their ability to attend regular school, and is mentally, physically, socially, or morally harmful.
      </p>

      <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Why is this a problem?</h3>
      <p>
        Children engaged in labour are often exposed to hazardous environments, abuse, and neglect. They lose the opportunity for education, which perpetuates the cycle of poverty.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
          <h4 className="text-red-400 font-bold mb-2">Hazardous Industries</h4>
          <p className="text-sm">Mines, factories, chemical plants, and construction sites.</p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
          <h4 className="text-red-400 font-bold mb-2">Domestic Work</h4>
          <p className="text-sm">Often hidden from public view, leading to high risks of abuse.</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-white mb-4">Legal Framework</h3>
      <p className="mb-4">
        The <strong>Child and Adolescent Labour (Prohibition and Regulation) Act, 1986</strong> strictly prohibits the employment of children below 14 years in any occupation or process.
      </p>
      
      <div className="p-4 bg-blue-900/30 border-l-4 border-blue-500 rounded-r-lg">
        <p className="italic text-blue-100">
          "Every child has the right to learn and play, not to earn."
        </p>
      </div>

      {/* --- END CONTENT EDITING --- */}

    </ContentView>
  );
};

export default ChildLabourPage;