import { GHOST, WHITE, POSTBOX, POSTBOX_30 } from '../palette';
import bengaliScript from '../typography/scripts/bengali';
import {
  NOTO_SERIF_BENGALI_BOLD,
  NOTO_SERIF_BENGALI_REGULAR,
} from '../typography/fontFaces';
import bengaliFontVariants from '../typography/fontVariants/bengali';
import withThemeProvider from '../withThemeProvider';

const bengaliTheme = {
  palette: {
    BRAND_BACKGROUND: POSTBOX,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: bengaliScript,
    fontVariants: bengaliFontVariants,
    fontFaces: [NOTO_SERIF_BENGALI_BOLD, NOTO_SERIF_BENGALI_REGULAR],
  },
};

export default withThemeProvider(bengaliTheme);
