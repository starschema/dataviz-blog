import { useEffect } from "react";

interface Props {
  url: string;
}

export default function Tableau(props: Props) {
  useEffect(() => {
    import(
      // @ts-expect-error, ts will nto find this as it's a URL import
      "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
    );
  }, []);
  return (
    <>
      {/* @ts-expect-error, the web component in the next line is registered by import from the useEffect above */}
      <tableau-viz src={props.url} />
    </>
  );
}
