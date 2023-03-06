import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Platiplus.DEV" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Tech Stack" />
        <ProjectsSection sectionId="showcase" heading="Showcase" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
