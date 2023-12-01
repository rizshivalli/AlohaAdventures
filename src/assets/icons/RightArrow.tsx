import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const RightArrow = props => {
  const {height = 16, width = 16} = props;
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        fill="teal"
        d="m8 16-1.425-1.4 5.6-5.6H0V7h12.175l-5.6-5.6L8 0l8 8-8 8Z"
      />
    </Svg>
  );
};
export default RightArrow;
