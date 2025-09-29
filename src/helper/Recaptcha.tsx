import React, { useEffect, useRef } from "react";

interface ReCaptchaProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        }
      ) => number;
      reset: (widgetId: number) => void;
    };
  }
}

export default function ReCaptcha({
  siteKey,
  onVerify,
  onExpire,
  onError,
}: ReCaptchaProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.grecaptcha && recaptchaRef.current) {
        window.grecaptcha.ready(() => {
          if (recaptchaRef.current) {
            widgetId.current = window.grecaptcha.render(recaptchaRef.current, {
              sitekey: siteKey,
              callback: onVerify,
              "expired-callback": onExpire || (() => {}),
              "error-callback": onError || (() => {}),
            });
          }
        });
      }
    };

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector(
        'script[src="https://www.google.com/recaptcha/api.js"]'
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [siteKey, onVerify, onExpire, onError]);

  const reset = () => {
    if (widgetId.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetId.current);
    }
  };

  /*   // Expose reset function to parent component
  React.useImperativeHandle(
    React.forwardRef(() => recaptchaRef),
    () => ({
      reset,
    })
  ); */

  return <div ref={recaptchaRef}></div>;
}
