import { render } from 'react-testing-library';
import newsConfig from '../../lib/config/services/news';
import { shouldShallowMatchSnapshot } from '../../helpers/tests/testHelpers';
import FrontPageSection from '.';
import { ServiceContextProvider } from '../../contexts/ServiceContext';

const React = jest.requireActual('react');

const group = {
  type: 'responsive-top-stories',
  title: 'Top Stories',
  items: [
    {
      headlines: {
        headline: 'Top Story 1 headline',
      },
      summary: 'Summary text 1',
      timestamp: 1557738768,
      indexImage: {
        path: '/cpsprodpb/0A06/production/image.jpg',
        height: 1152,
        width: 2048,
        altText: 'Image Alt text 1',
        copyrightHolder: 'Image provider 1',
      },
      id: 'urn:bbc:ares::asset:igbo/testasset-00000001',
    },
    {
      headlines: {
        headline: 'Top Story 2 headline',
      },
      summary: 'Summary text 2',
      timestamp: 1557738768,
      indexImage: {
        path: '/cpsprodpb/0A06/production/image.jpg',
        height: 1152,
        width: 2048,
        altText: 'Image Alt text 2',
        copyrightHolder: 'Image provider 2',
      },
      id: 'urn:bbc:ares::asset:igbo/testasset-00000002',
    },
  ],
  strapline: {
    name: 'Top Stories',
  },
};

const hasNoStrapline = {
  type: 'responsive-no-strapline',
  title: "We don't need no strapline!",
  items: [
    {
      headlines: {
        headline: "Nothing rendered because we didn't set a strapline",
      },
      summary: 'Oops',
      timestamp: 1557738768,
      indexImage: {
        path: '/cpsprodpb/0A06/production/image.jpg',
        height: 1152,
        width: 2048,
        altText: 'Image Alt text 1',
        copyrightHolder: 'Image provider 1',
      },
      id: 'urn:bbc:ares::asset:igbo/testasset-00000003',
    },
    {
      headlines: {
        headline: 'Top Story 2 headline',
      },
      summary: 'Summary text 2',
      timestamp: 1557738768,
      indexImage: {
        path: '/cpsprodpb/0A06/production/image.jpg',
        height: 1152,
        width: 2048,
        altText: 'Image Alt text 2',
        copyrightHolder: 'Image provider 2',
      },
      id: 'urn:bbc:ares::asset:igbo/testasset-00000004',
    },
  ],
};

jest.mock('react', () => {
  const original = jest.requireActual('react');
  return {
    ...original,
    useContext: jest.fn(),
  };
});
const { useContext } = jest.requireMock('react');

describe('FrontPageSection Container', () => {
  describe('snapshots', () => {
    beforeEach(() => {
      useContext.mockReturnValue(newsConfig);
    });

    afterEach(() => {
      useContext.mockReset();
    });

    shouldShallowMatchSnapshot(
      'should render correctly for canonical',
      <FrontPageSection group={group} />,
    );

    shouldShallowMatchSnapshot(
      'should render without a bar',
      <FrontPageSection group={group} bar={false} />,
    );

    shouldShallowMatchSnapshot(
      'should render null when there is no strapline',
      <FrontPageSection group={hasNoStrapline} />,
    );
  });

  describe('assertions', () => {
    beforeAll(() => {
      useContext.mockImplementation(React.useContext);
    });

    afterAll(() => {
      useContext.mockReset();
    });

    it('should render 1 section, 1 h2, 1 ul, and an li and an h3 for EACH item', () => {
      const { container } = render(
        <ServiceContextProvider service="igbo">
          <FrontPageSection group={group} />
        </ServiceContextProvider>,
      );

      expect(container.getElementsByTagName('section')).toHaveLength(1);
      expect(container.getElementsByTagName('h2')).toHaveLength(1);
      expect(container.getElementsByTagName('ul')).toHaveLength(1);

      expect(container.getElementsByTagName('li')).toHaveLength(2);
      expect(container.getElementsByTagName('h3')).toHaveLength(2);
    });
  });
});
