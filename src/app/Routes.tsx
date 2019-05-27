import React, { lazy, Suspense } from 'react';

const IosPage = lazy(() => import('../pages/Ios'));
const AndroidPage = lazy(() => import('../pages/Android'));

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
