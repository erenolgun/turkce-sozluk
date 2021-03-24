import * as React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import Box from '../components/box';

function DetailView() {
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  }

  return (
    <Box as={SafeAreaView} flex={1}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>Detay</Text>
    </Box>
  );
}

export default DetailView;
