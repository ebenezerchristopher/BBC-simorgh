import { GHOST, WHITE, POSTBOX, POSTBOX_30 } from '../palette';
import cyrillicScript from '../typography/scripts/cyrillic';
import helmetFontVariants from '../typography/fontVariants/helmet';
import withThemeProvider from '../withThemeProvider';

const uzbekTheme = {
  palette: {
    BRAND_BACKGROUND: POSTBOX,
    BRAND_LOGO: WHITE,
    BRAND_FOREGROUND: GHOST,
    BRAND_HIGHLIGHT: WHITE,
    BRAND_BORDER: POSTBOX_30,
  },
  typography: {
    script: cyrillicScript,
    fontVariants: helmetFontVariants,
    fontFaces: [],
  },
};

export default withThemeProvider(uzbekTheme);
