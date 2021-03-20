import { TextInput } from 'react-native';
import styled from 'styled-components';
import {
  compose,
  size,
  color,
  space,
  shadow,
  typography,
  borderRadius
} from 'styled-system';

import theme from '../utils/theme';

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999'
}))(compose(typography, color, size, space, borderRadius, shadow));

export default Input;
