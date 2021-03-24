import * as React from 'react';
import { StatusBar, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useIsFocused } from '@react-navigation/native';

import Box from '../components/box';

function DetailView() {
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  }

  return (
    <Box as={SafeAreaView} bg="softRed" p={16} flex={1}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>Detay</Text>
    </Box>
  );
}

export default DetailView;
