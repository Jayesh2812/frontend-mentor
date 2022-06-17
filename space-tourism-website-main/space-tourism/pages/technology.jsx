import React from 'react'
import Technology from "../containers/Technology/Technology";
function technology(props) {
  return (
    <Technology {...props}/>
  )
}
export async function getStaticProps(context) {
  let { technology } = require("../public/assets/data.json");
  return {
    props: { technology }, // will be passed to the page component as props
  };
}
export default technology