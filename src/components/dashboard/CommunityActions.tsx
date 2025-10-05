import React from 'react';
import { CreationIcon, ManagementIcon, SustainabilityIcon } from '../Icons';
import SideLinksContainer from './SideLinksContainer';

const actions = [
  {
    name: 'Active Communities',
    icon: <CreationIcon />,
    bgcolor: 'bg-[#FFC145]',
  },
  {
    name: 'Chat',
    icon: <ManagementIcon />,
    bgcolor: 'bg-[#56CBF9]',
  },
  {
    name: 'Start a Discussion',
    icon: <ManagementIcon />,
    bgcolor: 'bg-[#56CBF9]',
  },
  {
    name: 'Publish',
    icon: <SustainabilityIcon />,
    bgcolor: 'bg-[#C30D8D]',
  },
];

const CommunityActions = () => {
  return (
    <div className="flex flex-col gap-3 w-full sm:w-auto">
      {actions.map((action, index) => (
        <SideLinksContainer
          key={index}
          name={action.name}
          icon={action.icon}
          bgcolor={action.bgcolor}
        />
      ))}
    </div>
  );
};

export default CommunityActions;
