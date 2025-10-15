"use client";

import { useEffect } from "react";
import * as Klaro from "klaro/dist/klaro-no-css";
import klaroConfig from "@/config/klaro-config";

const KlaroInit = () => {
  useEffect(() => {
    // Initialisiere Klaro mit der Konfiguration
    Klaro.setup(klaroConfig);

    // Optional: Zeige den Banner automatisch, wenn noch kein Consent gegeben wurde
    const consentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("klaro="));

    if (!consentCookie) {
      // Warte kurz, damit Klaro vollständig initialisiert ist
      setTimeout(() => {
        if (window.klaro) {
          window.klaro.show();
        }
      }, 100);
    }
  }, []);

  return null;
};

export default KlaroInit;
