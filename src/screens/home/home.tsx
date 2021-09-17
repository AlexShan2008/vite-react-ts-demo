// The Storyblok Client
import Storyblok from "../../lib/storyblok";
// import useStoryblok from "../../lib/storyblok-hook";
import Layout from "@components/Layout";
import Page from "@components/Page";
import { useEffect, useState } from "react";

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    Storyblok.get("cdn/stories/home", {
      version: "draft",
    })
      .then((response) => {
        setContent(response.data.story.content);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <Page content={content} />
    </Layout>
  );
}
