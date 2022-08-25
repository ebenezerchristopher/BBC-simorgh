import { GHOST, WHITE, POSTBOX, POSTBOX_30 } from '../palette';
import noAscOrDescScript from '../typography/scripts/noAscOrDesc';
import koreanFontVariants from '../typography/fontVariants/korean';
import withThemeProvider from '../withThemeProvider';

const koreanTheme = {
  palette: {
    BRAND_BACKGROUND: POSTBOX,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: noAscOrDescScript,
    fontVariants: koreanFontVariants,
    fontFaces: [],
  },
};

export default withThemeProvider(koreanTheme);
