import * as React from 'react';
import { Text, ImageBackground, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import BoxCenter from '../components/box-center';
import Logo from '../components/icons/Logo';
import SearchBox from '../components/search';
import Box from '../components/box';

import bg from '../assets/bg.jpeg';

function SearchView() {
  const [isSearchFocus, setSearchFocus] = React.useState(false);

  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <Box position="relative" zIndex={1} height={isSearchFocus ? 1 : 285}>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <Logo width={120} color="white" />
          </Box>

          {/* Search */}
          <Box p={16} width="100%" mb={-42}>
            <SearchBox onChangeFocus={(status) => setSearchFocus(status)} />
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box flex={1} bg="white" pt={26}>
        <Box p={30} flex={1}>
          <Text>Hello</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchView;
