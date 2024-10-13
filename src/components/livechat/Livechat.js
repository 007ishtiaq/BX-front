import React, { useEffect } from "react";
import "./Livechat.css";

const applyCustomStyles = () => {
  const button = document.querySelector(".tawk-button");
  if (button) {
    button.style.backgroundColor = "#ff6347";
    button.style.borderRadius = "50%";
    button.style.width = "600px";
    button.style.height = "600px";
  }

  const visitorBubble = document.querySelector(".tawk-visitor-chat-bubble");
  if (visitorBubble) {
    visitorBubble.style.backgroundColor = "#ffffff";
    visitorBubble.style.color = "#ffffff";
  }

  const agentBubble = document.querySelector(".tawk-agent-chat-bubble");
  if (agentBubble) {
    agentBubble.style.backgroundColor = "#ffffff";
    agentBubble.style.color = "#ffffff";
  }
};

const Livechat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/670ba2612480f5b4f58cc934/1ia2n4k5c";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Inject custom styles directly
    const style = document.createElement("style");
    style.innerHTML = `
      .tawk-button {
        background-color: #ff6347 !important;
        border-radius: 50% !important;
        width: 60px !important;
        height: 60px !important;
        bottom: 20px !important;
        right: 20px !important;
      }
.tawk-icon-right {
  display: none !important;
}
  .tawk-min-container .tawk-button-circle.tawk-button-large {
  width: 50px !important;
  height: 50px !important;
}

      .tawk-button svg {
        fill: white !important;
      }
    `;
    document.head.appendChild(style);
    script.onload = () => {
      applyCustomStyles(); // Apply custom styles after loading the script
    };
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(script);
      document.head.removeChild(style); // Cleanup the style
    };
  }, []);

  return null; // No need to render anything for the chat widget
};

export default Livechat;
