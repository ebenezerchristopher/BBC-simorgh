import { MOST_READ_PAGE } from '#app/routes/utils/pageTypes';
import mostReadJson from '../../../../../data/pidgin/mostRead/index.json';
import getInitialData from '.';

describe('dgkhsdkg', () => {
  beforeEach(() => {
    delete process.env.SIMORGH_APP_ENV;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return essential data for a page to render', async () => {
    fetch.mockResponse(JSON.stringify(mostReadJson));

    const response = await getInitialData({
      path: '/pidgin/popular/read',
      service: 'pidgin',
      pageType: MOST_READ_PAGE,
    });

    console.log({ response });
    const { pageData } = response;

    expect(pageData.lastRecordTimeStamp).toEqual('2023-06-19T15:03:00Z');
    expect(pageData.metadata.type).toEqual('mostRead');
    expect(pageData.items[0].timestamp).toEqual(1687171616901);
    expect(pageData.items[0].title).toEqual(
      'Teams wey qualify for Afcon 2023 and how things stand for each group',
    );
    expect(pageData.items[0].href).toEqual(
      'https://www.bbc.com/pidgin/articles/cz5kkgv41v0o',
    );
  });
});
