import React, { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/65eef0c29131ed19d977d11d/1homlouen";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    return () => {
      s1.parentNode.removeChild(s1);
    };
  }, []);

  return null;
};

export default TawkToChat;
