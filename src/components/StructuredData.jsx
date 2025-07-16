"use client";

import Script from 'next/script';

const StructuredData = ({ data }) => {
  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(data)}
    </Script>
  );
};

export default StructuredData;

