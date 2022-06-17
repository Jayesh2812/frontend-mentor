import React from 'react'
import Crew from "../containers/Crew/Crew";
import { useRouter } from 'next/router'
function crew(props) {
  const router = useRouter()
  return (
    <Crew {...props} name={Object.keys(router.query)[0]}/>
  )
}
export async function getStaticProps(context) {
  let { crew } = require("../public/assets/data.json");
  return {
    props: { crew }, // will be passed to the page component as props
  };
}
export default crew