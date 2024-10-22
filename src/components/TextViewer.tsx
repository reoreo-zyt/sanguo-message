/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const TxtViewer = ({ txtFileUrl }: { txtFileUrl: string }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(txtFileUrl)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network response was not ok.");
      })
      .then((textContent) => setText(textContent))
      .catch((error) =>
        console.error("There was a problem fetching the text content:", error),
      );
  }, [txtFileUrl]);

  return <div>{text}</div>;
};

export default TxtViewer;
