'use client';

import AppWrapper from '../../../components/AppWrapper';
import SinglePage from '../../../pages/single-page';

export default function BlogPost({ params }) {
  return (
    <AppWrapper>
      <SinglePage slug={params.slug} />
    </AppWrapper>
  );
}