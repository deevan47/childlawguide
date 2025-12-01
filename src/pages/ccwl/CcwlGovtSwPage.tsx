import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

type Props = { onBack: () => void; onHome: () => void };

const CcwlGovtSwPage: React.FC<Props> = ({ onBack, onHome }) => {
  // Make sure this ID matches what is in your constants.tsx
  // If your constant key is 'ccl-govsw', change it below.
  const data = TOPIC_CONTENT['ccl-govsw'] || {
    ...TOPIC_CONTENT['default'],
    title: 'Govt Social Workers',
    subtitle: 'Legal Aid & Support',
    category: 'CCL | SUPPORT'
  };

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      
      {/* --- CONTENT START --- */}
      
      <p>
        Government Social Workers act as the vital link between the legal system and the rehabilitation process for Children in Conflict with Law (CCL). They ensure that the approach remains reformative rather than punitive.
      </p>

      <h3 className="text-xl font-bold text-white mt-8 mb-4 border-l-4 border-blue-500 pl-3">
        Key Responsibilities
      </h3>
      
      <p className="mb-4">
        Their primary duty is to assist the Juvenile Justice Board (JJB) by providing a holistic view of the child's life, rather than just focusing on the alleged offence.
      </p>

      <ul className="list-disc pl-5 space-y-3 text-gray-300">
        <li>
          <strong className="text-white">Social Investigation Report (SIR):</strong> Preparing a detailed report within 15 days of the child's apprehension, covering family background, education, and psychological state.
        </li>
        <li>
          <strong className="text-white">Daily Assistance:</strong> Being present during the proceedings to ensure the child understands what is happening.
        </li>
        <li>
          <strong className="text-white">Individual Care Plan (ICP):</strong> Designing a rehabilitation plan tailored to the child's specific needs (e.g., vocational training, de-addiction).
        </li>
        <li>
          <strong className="text-white">Home Visits:</strong> Visiting the child's home to assess if it is safe for the child to return.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-white mt-10 mb-4 border-l-4 border-blue-500 pl-3">
        Legal Mandate
      </h3>

      <div className="p-6 bg-white/5 rounded-xl border border-white/10 italic text-gray-400">
        "The Social Worker must ensure that the child is not treated as a criminal but as a child in need of guidance. They must protect the child's dignity and privacy at all stages."
      </div>

      <p className="mt-8">
        Furthermore, they act as a bridge between the parents and the Board. Often, parents are unaware of legal procedures; the social worker guides them through the bail process and explains the importance of their role in the child's reform.
      </p>

      <p className="mt-4">
        In cases where the child cannot be released on bail, the Social Worker monitors the child's stay in the Observation Home, ensuring they are not subjected to abuse and are receiving proper nutrition and education.
      </p>

      {/* Filler text to demonstrate scrolling */}
      <p className="mt-8 text-gray-500 text-sm">
        [Scroll Area Test] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      
      {/* --- CONTENT END --- */}

    </ContentView>
  );
};

export default CcwlGovtSwPage;