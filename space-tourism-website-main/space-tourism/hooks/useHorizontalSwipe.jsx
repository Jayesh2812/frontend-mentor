import React, { useEffect, useRef, useState } from "react";

function useHorizontalSwipe({ onLeftSwipe, onRightSwipe }) {
  const [initialX, setInitialX] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const swipeRef = useRef(null);
  const handleTouchStart = (e) => {
    setInitialX(e.touches[0].clientX);
    // console.log("started", initialX);
  };
  const handleTouchMove = (e) => {
    setCurrentX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    const offsetX = initialX - currentX;
    // console.log("stopped", offsetX, initialX, currentX);
    if (offsetX < 0) {
      onLeftSwipe();
    } else {
      onRightSwipe();
    }
  };

  const addListeners = () => {
    if (swipeRef.current) {
      swipeRef.current.addEventListener("touchstart", handleTouchStart);
      swipeRef.current.addEventListener("touchmove", handleTouchMove);
      swipeRef.current.addEventListener("touchend", handleTouchEnd);
    }
  };
  const removeListeners = () => {
    if (swipeRef.current) {
      swipeRef.current.removeEventListener("touchstart", handleTouchStart);
      swipeRef.current.removeEventListener("touchmove", handleTouchMove);
      swipeRef.current.removeEventListener("touchend", handleTouchEnd);
    }
  };

  useEffect(() => {
    addListeners();
    return removeListeners;
  }, [initialX, currentX]);

  return swipeRef;
}

export default useHorizontalSwipe;
