import React from "react";

function useBringIntoView(activeState, name, executeAfter = ()=>{}) {
  function getScrollParent(element) {
    if (element.nodeName === "IMG") {
      return element.parentElement.parentElement;
    }
    return element.parentElement;
  }
  const bringIntoView = () => {
    let elements = document.querySelectorAll(
      `[data-${name}-key="${activeState}"]`
    );
    elements.forEach((element) => {
      getScrollParent(element).scrollTo({
        top: 0,
        left: activeState * element.clientWidth,
        behavior: "smooth",
      });
    });
    executeAfter()
  };
  return bringIntoView;
}

export default useBringIntoView;
