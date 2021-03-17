import * as React from 'react';
import { Button, View } from 'react-native';

import BoxCenter from '../components/box-center';
import Logo from '../components/icons/Logo';

function SearchView({ navigation }) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Logo color="red" />
    </BoxCenter>
  );
}

export default SearchView;
