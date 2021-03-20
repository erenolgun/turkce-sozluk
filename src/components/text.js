import { Text as T } from 'react-native';
import styled from 'styled-components';
import { compose, size, color, space, typography } from 'styled-system';

const Text = styled(T)(compose(typography, color, size, space));

export default Text;
