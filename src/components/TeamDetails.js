import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const TeamDetails = () => {
  // Use useSelector to access team members from Redux state
  const teamMembers = useSelector((state) => state.team);

  return (
    <View>
      {/* Render team details */}
    </View>
  );
};

export default TeamDetails;
