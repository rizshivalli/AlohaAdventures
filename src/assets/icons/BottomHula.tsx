import * as React from 'react';
import Svg, {Mask, Path, G} from 'react-native-svg';
const BottomHula = () => (
  <Svg width={24} height={24} fill="none">
    <Mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}>
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#001A1A"
        d="M5 20v-2h2v-4L1 5h14l-6 9v4h2v2H5Zm.9-11h4.2l1.4-2h-7l1.4 2ZM16 20a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 13 17c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 16 14c.183 0 .358.012.525.037.167.025.325.08.475.163V5h5v3h-3v9c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 16 20Z"
      />
    </G>
  </Svg>
);
export default BottomHula;
