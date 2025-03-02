import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ServiceContextProvider } from '../contexts/ServiceContext';
import { RequestContextProvider } from '../contexts/RequestContext';
import { ToggleContextProvider } from '../contexts/ToggleContext';
import { UserContextProvider } from '../contexts/UserContext';
import { EventTrackingContextProvider } from '../contexts/EventTrackingContext';
import ThemeProvider from './ThemeProvider';
import { PageTypes, Services, Toggles, Variants } from '../models/types/global';

jest.mock('./ThemeProvider');

interface Props {
  children: JSX.Element | JSX.Element[];
  id?: string | null;
  isAmp?: boolean;
  isApp?: boolean;
  pageData?: object;
  atiData?: {
    contentId?: string;
    contentType?: string;
    pageIdentifier?: string;
    pageTitle?: string;
  };
  bbcOrigin?: string | null;
  pageType?: PageTypes;
  derivedPageType?: string | null;
  pathname?: string;
  service?: Services;
  toggles?: Toggles;
  showAdsBasedOnLocation?: boolean;
  statusCode?: number | null;
  variant?: Variants;
  isNextJs?: boolean;
  pageLang?: string;
}

const AllTheProviders: FC<Props> = ({
  children,
  pageData,
  atiData,
  id = null,
  isAmp = false,
  isApp = false,
  bbcOrigin = 'https://www.test.bbc.com',
  pageType = 'article',
  derivedPageType,
  pathname = '/news/articles/c0g992jmmkko',
  service = 'news',
  toggles = {},
  variant = 'default',
  pageLang = undefined,
  showAdsBasedOnLocation = false,
  statusCode = null,
  isNextJs = false,
}: Props) => {
  return (
    <ToggleContextProvider toggles={toggles}>
      <ServiceContextProvider
        service={service}
        variant={variant}
        pageLang={pageLang}
      >
        <RequestContextProvider
          id={id}
          bbcOrigin={bbcOrigin}
          pageType={pageType}
          isAmp={isAmp}
          isApp={isApp}
          isNextJs={isNextJs}
          service={service}
          pathname={pathname}
          derivedPageType={derivedPageType}
          showAdsBasedOnLocation={showAdsBasedOnLocation}
          statusCode={statusCode}
        >
          <EventTrackingContextProvider data={pageData} atiData={atiData}>
            <UserContextProvider>
              <ThemeProvider service={service} variant={variant}>
                {children}
              </ThemeProvider>
            </UserContextProvider>
          </EventTrackingContextProvider>
        </RequestContextProvider>
      </ServiceContextProvider>
    </ToggleContextProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & Omit<Props, 'children'>,
) => {
  const {
    id,
    isAmp,
    isApp,
    bbcOrigin,
    pageData,
    pageType,
    atiData,
    derivedPageType,
    pathname,
    service,
    toggles,
    variant,
    showAdsBasedOnLocation,
    statusCode,
    isNextJs,
    pageLang,
  } = options || {};

  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders
        id={id}
        isAmp={isAmp}
        isApp={isApp}
        bbcOrigin={bbcOrigin}
        pageData={pageData}
        atiData={atiData}
        pageType={pageType}
        derivedPageType={derivedPageType}
        pathname={pathname}
        service={service}
        toggles={toggles}
        variant={variant}
        showAdsBasedOnLocation={showAdsBasedOnLocation}
        statusCode={statusCode}
        isNextJs={isNextJs}
        pageLang={pageLang}
      >
        {children}
      </AllTheProviders>
    ),
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render, AllTheProviders };
