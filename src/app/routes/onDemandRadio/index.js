import { RadioPodcastPage } from '#pages';
import { onDemandRadioPath } from '#utils/regex';
import getInitialData from './getInitialData';
import { MEDIA_PAGE } from '#utils/pageTypes';

export default {
  path: onDemandRadioPath,
  exact: true,
  component: RadioPodcastPage,
  getInitialData,
  pageType: MEDIA_PAGE,
};
