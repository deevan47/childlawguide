import React from 'react';
import ContentView from '../../../components/ContentView';

type Props = { onBack: () => void; onHome: () => void };

const PolicePage: React.FC<Props> = ({ onBack, onHome }) => {
  const data = {
    id: 'stakeholders/police-officers',
    title: 'Police Officers',
    subtitle: 'Children in Need of Care and Protection',
    category: 'CNCP',
    description: 'Police officers, particularly those in Special Juvenile Police Units (SJPUs) and Child Welfare Police Officers (CWPOs), are essential for the protection of Children in Need of Care and Protection (CNCP) under the Juvenile Justice Act. Their key duties involve the immediate rescue and protection of vulnerable children, ensuring they are treated with dignity and in a child-friendly manner. They are mandated to provide immediate care and, most importantly, produce the child before the Child Welfare Committee (CWC) without delay to ensure they are swiftly connected to safety, support services, and long-term rehabilitation.',
    image: '/images/police-officer.png',
    sections: [
      { title: 'Investigating Officer (IO)' },
      { title: 'Standard Operating Procedure' },
      { title: 'Juvenile Treatment Guidelines' },
      { title: 'Child Welfare Police Officer' },
      { title: 'Collaboration' },
    ],
  };

  return <ContentView data={data} onBack={onBack} onHome={onHome} />;
};

export default PolicePage;
