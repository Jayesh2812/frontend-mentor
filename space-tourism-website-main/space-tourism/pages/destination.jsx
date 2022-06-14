import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Destination from "../containers/Destination/Destination";

function destination(props) {
  return <Destination {...props} />;
}
export async function getStaticProps(context) {
  let { destinations } = require("../public/assets/data.json");
  return {
    props: { destinations }, // will be passed to the page component as props
  };
}
export default destination;
