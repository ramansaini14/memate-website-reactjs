'use client';

import AppWrapper from '../../../../components/AppWrapper';
import BlogTagPage from '../../../../pages/blog-tag-page';

export default function BlogTag({ params }) {
  return (
    <AppWrapper>
      <BlogTagPage slug={params.slug} />
    </AppWrapper>
  );
}