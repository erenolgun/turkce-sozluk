import React from 'react';
import { Keyboard } from 'react-native';

import Box from './box';
import Input from './input';
import Text from './text';
import { Search, Close } from './icons';

import theme from '../utils/theme';
import Button from './button';

function SearchBox({ onChangeFocus }) {
  const [value, setValue] = React.useState('');
  const [isFocus, setFocus] = React.useState(false);

  React.useEffect(() => {
    onChangeFocus(isFocus);
  }, [isFocus, onChangeFocus]);

  const onCancel = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.1,
            shadowRadius: 24
          }}
          bg="white"
          height={52}
          color="textDark"
          borderWidth={1}
          borderColor={isFocus ? '#d1d1d1' : 'transparent'}
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          pl={52}
          borderRadius="normal"
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={(text) => setValue(text)}
        />
        {value.length > 0 && (
          <Button
            onPress={onClear}
            pointerEvents="none"
            position="absolute"
            right={16}
            top={14}
          >
            <Close color={theme.colors.textMedium} />
          </Button>
        )}
        <Box pointerEvents="none" position="absolute" left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Box>
      </Box>
      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
}

export default SearchBox;
