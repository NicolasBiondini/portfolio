import ReactDOM from "react-dom";

import React, { useEffect, useRef, useState } from "react";

import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";

export default function CursorPortal({ children }) {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
    console.log("hello world");
  }, []);

  const projectContent = <DonutCursorProvider>{children}</DonutCursorProvider>;

  if (isBrowser) {
    return ReactDOM.createPortal(
      projectContent,
      document.getElementById("cursor-root")
    );
  } else {
    return null;
  }
}
