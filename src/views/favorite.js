import * as React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

function FavoriteView() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <Text>Favoriler</Text>
    </View>
  );
}

export default FavoriteView;
