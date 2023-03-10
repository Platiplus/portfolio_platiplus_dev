import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ExperiencePage() {
  return (
    <>
      <Seo title="Work Experience" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="experience" heading="Work Experience" />
      </Page>
    </>
  );
}
