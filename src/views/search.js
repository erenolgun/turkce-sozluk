import * as React from 'react';
import { Button, View } from 'react-native';

import BoxCenter from '../components/box-center';
import Logo from '../components/icons/Logo';
import SearchBox from '../components/search';
import Box from '../components/box';

function SearchView({ navigation }) {
  return (
    <Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box py={20}>
        <Logo width={120} color="red" />
      </Box>

      <Box p={5}>
        <SearchBox />
      </Box>
    </Box>
  );
}

export default SearchView;
