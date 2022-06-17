import React from 'react'
import Technology from "../containers/Technology/Technology";
import { useRouter } from 'next/router'
function technology(props) {
  const router = useRouter()
  return (
    <Technology {...props} name={Object.keys(router.query)[0]}/>
  )
}
export async function getStaticProps(context) {
  let { technology } = require("../public/assets/data.json");
  return {
    props: { technology }, // will be passed to the page component as props
  };
}
export default technology