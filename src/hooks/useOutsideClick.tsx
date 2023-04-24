import React from "react";

export const useOutsideClick = (callback: { (): void; (): void; }) => {
  const ref = React.useRef<any>();

  React.useEffect(() => {
    const handleClick = (event: { target: any; }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};
