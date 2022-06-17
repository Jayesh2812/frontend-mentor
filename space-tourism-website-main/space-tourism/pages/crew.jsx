import React from 'react'
import Crew from "../containers/Crew/Crew";
function crew(props) {
  return (
    <Crew {...props}/>
  )
}
export async function getStaticProps(context) {
  let { crew } = require("../public/assets/data.json");
  return {
    props: { crew }, // will be passed to the page component as props
  };
}
export default crew