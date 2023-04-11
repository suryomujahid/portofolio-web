import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const About = ({ data, parentField = "" }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`prose prose-lg ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        data-tinafield={`${parentField}.body`}
        size="large"
        width="small"
      >
        <TinaMarkdown content={data.body} />
      </Container>
    </Section>
  );
};

export const aboutBlockSchema: TinaTemplate = {
  name: "about",
  label: "About",
  fields: [
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    },
  ],
};
