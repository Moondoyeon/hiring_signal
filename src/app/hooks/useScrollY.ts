import { useCallback, useEffect, useState } from "react";

export default function useScrollY(handle?: () => void) {
  const [currentY, setCurruentY] = useState(0);

  const handleScrollY = useCallback(() => {
    let y = window.scrollY;

    handle && handle();

    setCurruentY(y);
  }, [handle]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.addEventListener("scroll", handleScrollY);
    };
  }, [handleScrollY]);

  return { currentY };
}
