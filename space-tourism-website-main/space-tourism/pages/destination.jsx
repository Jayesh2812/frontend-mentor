import React from "react";
import Destination from "../containers/Destination/Destination";
import { useRouter } from 'next/router'

function destination(props) {
  const router = useRouter()
  return <Destination {...props} name={Object.keys(router.query)[0]} />;
}
export async function getStaticProps(context) {
  let { destinations } = require("../public/assets/data.json");
  return {
    props: { destinations }, // will be passed to the page component as props
  };
}
export default destination;
