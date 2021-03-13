import {View} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  size,
  color,
  space,
  flexbox,
  borderRadius,
} from 'styled-system';

const Box = styled(View)(compose(color, size, space, flexbox, borderRadius));

export default Box;
