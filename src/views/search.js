import * as React from 'react';
import {Button, View} from 'react-native';

import Box from '../components/box';
import BoxCenter from '../components/box-center';
import {Bookmark} from '../components/icons';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box size={20} bg="coral" mt={20} />
      <Bookmark />
    </BoxCenter>
  );
}

export default SearchView;
