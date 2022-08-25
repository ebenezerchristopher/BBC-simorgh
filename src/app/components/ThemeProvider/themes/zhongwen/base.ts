import { GHOST, WHITE, POSTBOX, POSTBOX_30 } from '../../palette';
import noAscOrDescScript from '../../typography/scripts/noAscOrDesc';
import chineseFontVariants from '../../typography/fontVariants/chinese';

const zhongwenTheme = {
  palette: {
    BRAND_BACKGROUND: POSTBOX,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: noAscOrDescScript,
    fontVariants: chineseFontVariants,
    fontFaces: [],
  },
};

export default zhongwenTheme;
