import * as React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';
import Box from '../components/box';
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

function HistoryView() {
  return (
    <Box as={SafeAreaView} flex={1}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>Geçmiş</Text>
    </Box>
  );
}

export default HistoryView;
