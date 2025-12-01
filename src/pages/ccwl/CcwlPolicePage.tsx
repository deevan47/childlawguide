import React from 'react';
import ContentView from '../../components/ContentView';
import { TOPIC_CONTENT } from '../../constants';

type Props = { onBack: () => void; onHome: () => void };

const CcwlPolicePage: React.FC<Props> = ({ onBack, onHome }) => {
  const data = {
    id: 'ccwl/police-officers',
    title: 'Police Officers',
    subtitle: 'Children in Conflict with the Law',
    category: 'CCWL',
    description: 'Police officers, particularly those in Special Juvenile Police Units (SJPUs) and designated Child Welfare Police Officers (CWPOs), have a distinct set of duties for a Child in Conflict with Law (CCL) under the Juvenile Justice Act. Their primary mandate is to ensure the CCL is treated with dignity and protected from the adult criminal system. This involves immediately apprehending the child in civilian clothes, avoiding police lock-ups or jails, and ensuring the child is taken before the Juvenile Justice Board (JJB) within 24 hours. They must also inform the child\'s parents/guardians and facilitate the child\'s right to bail, working closely with the JJB and Probation Officers to ensure a non-punitive, child-friendly legal process focused on rehabilitation.',
    image: '/images/police-officer.png',
    sections: [
      {
        title: 'Investigating Officer (IO)',
      },
      {
        title: 'Standard Operating Procedure',
      },
      {
        title: 'Juvenile Treatment Guidelines',
      },
      {
        title: 'Child Welfare Police Officer',
      },
      {
        title: 'Collaboration',
      },
    ],
  };

  return <ContentView data={data} onBack={onBack} onHome={onHome} />;
};

export default CcwlPolicePage;
