/* eslint-disable jsx-a11y/aria-role */
import React, { useContext } from 'react';
import styled from '@emotion/styled';
import pathOr from 'ramda/src/pathOr';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import {
  formatDuration,
  formatUnixTimestamp,
} from '@bbc/psammead-timestamp-container/utilities';
import SectionLabel from '@bbc/psammead-section-label';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import EpisodeList from '@bbc/psammead-episode-list';
import { ServiceContext } from '#contexts/ServiceContext';

const StyledSpan = styled.span`
  padding: 0 ${GEL_SPACING};
`;

const Spacer = styled.aside`
  position: relative;

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    margin-bottom: ${GEL_SPACING_QUAD};
  }
`;
const StyledSectionLabel = styled(SectionLabel)`
  margin-bottom: 0;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    margin-bottom: ${GEL_SPACING_DBL};
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin-bottom: ${GEL_SPACING_TRPL};
  }
`;

const formattedTimestamp = ({
  releaseDateTimeStamp,
  timezone,
  datetimeLocale,
  format,
}) =>
  formatUnixTimestamp({
    timestamp: releaseDateTimeStamp,
    format,
    timezone,
    locale: datetimeLocale,
    isRelative: false,
  });

const RecentAudioEpisodes = ({ episodes }) => {
  const {
    translations,
    service,
    script,
    dir,
    timezone,
    datetimeLocale,
  } = useContext(ServiceContext);
  const recentEpisodesTranslation = pathOr(
    'Recent Episodes',
    ['media', 'recentEpisodes'],
    translations,
  );
  const durationLabel = pathOr('Duration', ['media', 'duration'], translations);

  return (
    <Spacer role="complimentary">
      <StyledSectionLabel script={script} service={service} dir={dir}>
        {recentEpisodesTranslation}
      </StyledSectionLabel>
      <EpisodeList script={script} service={service} dir={dir}>
        {episodes.map(episode => (
          <EpisodeList.Episode key={episode.id}>
            <EpisodeList.Link href={episode.url}>
              <VisuallyHiddenText>Audio, </VisuallyHiddenText>
              <EpisodeList.Title className="episode-list__title--hover episode-list__title--visited">
                {episode.brandTitle}
              </EpisodeList.Title>
              <VisuallyHiddenText>, </VisuallyHiddenText>
              <EpisodeList.Description className="episode-list__description--hover episode-list__description--visited">
                {episode.episodeTitle ||
                  `${formattedTimestamp({
                    releaseDateTimeStamp: episode.timestamp,
                    timezone,
                    format: 'LL',
                    datetimeLocale,
                  })}, ${formattedTimestamp({
                    releaseDateTimeStamp: episode.timestamp,
                    timezone,
                    format: 'LT',
                    datetimeLocale,
                  })}`}
              </EpisodeList.Description>
              <VisuallyHiddenText>, </VisuallyHiddenText>
              <VisuallyHiddenText>
                {` ${durationLabel} ${formatDuration({
                  duration: episode.duration,
                  format: episode.duration.includes('H') ? 'h,mm,ss' : 'mm,ss',
                  locale: episode.locale,
                })} `}
              </VisuallyHiddenText>
              <EpisodeList.Metadata>
                <span aria-hidden="true">
                  {` ${durationLabel} ${formatDuration({
                    duration: episode.duration,
                    locale: episode.locale,
                  })}`}
                </span>
              </EpisodeList.Metadata>
            </EpisodeList.Link>
            <EpisodeList.Metadata>
              {episode.episodeTitle && (
                <>
                  {' '}
                  <StyledSpan aria-hidden>|</StyledSpan> )}
                  {formattedTimestamp({
                    releaseDateTimeStamp: episode.timestamp,
                    timezone,
                    format: 'LL',
                    datetimeLocale,
                  })}
                </>
              )}
            </EpisodeList.Metadata>
          </EpisodeList.Episode>
        ))}
      </EpisodeList>
    </Spacer>
  );
};

RecentAudioEpisodes.propTypes = {};

RecentAudioEpisodes.defaultProps = {};

export default RecentAudioEpisodes;
