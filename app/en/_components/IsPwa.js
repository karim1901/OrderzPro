'use client'
import { useEffect, useState } from "react";

export default function useIsPWA() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    const checkPWA = () => {
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true; // iOS support

      setIsPWA(isStandalone);
    };

    checkPWA();
  }, []);

  return isPWA;
}