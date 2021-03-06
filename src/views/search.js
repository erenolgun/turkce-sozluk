import * as React from 'react';
import { StatusBar, Animated, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import Logo from '../components/icons/Logo';
import SearchBox from '../components/search';
import Text from '../components/text';
import Box from '../components/box';
import Bg from '../components/bg';

import { CardSummary, CardTitle, CardContainer } from '../components/card';
import {
  SimpleCardContainer,
  SimpleCardTitle
} from '../components/simple-card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    summary: 'First Summary'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    summary: 'Second Summary'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    summary: 'Third Summary'
  }
];

const HERO_HEIGHT = 230;

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false);

  const heroHeight = React.useRef(new Animated.Value(HERO_HEIGHT)).current;
  const bgOpacity = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (isSearchFocus) {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 230,
        useNativeDriver: false
      }).start();
      // hero-height
      Animated.timing(heroHeight, {
        toValue: 84,
        duration: 230,
        useNativeDriver: false
      }).start();
    } else {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 230,
        useNativeDriver: false
      }).start();
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 230,
        useNativeDriver: false
      }).start();
    }
  }, [bgOpacity, heroHeight, isSearchFocus]);

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
        <Box mt={-60} as={Animated.View} opacity={bgOpacity}>
          <Bg pt={60} pb={26}>
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo width={120} color="white" />
            </Box>
          </Bg>
        </Box>

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
          <Box flex={1}>
            <FlatList
              style={{ padding: 16 }}
              keyExtractor={(item) => item.id}
              data={DATA}
              renderItem={({ item }) => (
                <Box py={6}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              ListHeaderComponent={
                <Text color="textLight" mb={10}>
                  Arama Ge??mi??i
                </Text>
              }
            />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <Box>
              <Text color="textLight">Bir Deyim</Text>

              <CardContainer
                mt={10}
                onPress={() =>
                  navigation.navigate('Detail', { title: 'on para' })
                }
              >
                <CardTitle>on para</CardTitle>
                <CardSummary>??ok az (para).</CardSummary>
              </CardContainer>
            </Box>

            <Box mt={40}>
              <Text color="textLight">Bir Deyim - Atas??z??</Text>

              <CardContainer
                mt={10}
                onPress={() =>
                  navigation.navigate('Detail', {
                    title: 'siyem siyem a??lamak'
                  })
                }
              >
                <CardTitle>siyem siyem a??lamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan g??z ya???? d??kmek.
                </CardSummary>
              </CardContainer>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchView;
