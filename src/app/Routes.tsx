import React, { lazy, Suspense } from 'react';

const RootPage = lazy(() => import('../pages/Root'));
const IosPage = lazy(() => import('../pages/Ios'));
const AndroidPage = lazy(() => import('../pages/Android'));

export const RootPageLazy = () => (
  <Suspense fallback={<div />}>
    <RootPage />
  </Suspense>
);

export const IosPageLazy = () => (
  <Suspense fallback={<div />}>
    <IosPage />
  </Suspense>
);

export const AndroidPageLazy = () => (
  <Suspense fallback={<div />}>
    <AndroidPage />
  </Suspense>
);
