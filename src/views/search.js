import * as React from 'react';
import { Text, ImageBackground, StatusBar, Animated } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import Logo from '../components/icons/Logo';
import SearchBox from '../components/search';
import Box from '../components/box';
import Bg from '../components/bg';

import bg from '../assets/bg.jpeg';

function SearchView() {
  const [isSearchFocus, setSearchFocus] = React.useState(false);

  const heroHeight = React.useRef(new Animated.Value(285)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 200,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 200,
        useNativeDriver: false
      }).start();
    }
  }, [heroHeight, isSearchFocus]);

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      <StatusBar barStyle={isSearchFocus ? 'dark-content' : 'light-content'} />

      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {!isSearchFocus && (
          <Bg>
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo width={120} color="white" />
            </Box>
          </Bg>
        )}

        {/* Search */}
        <Box
          position="absolute"
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          p={16}
          width="100%"
        >
          <SearchBox onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>

      {/* Content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box p={30} flex={1}>
            <Text>Geçmiş</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <Text>Öneri</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchView;
