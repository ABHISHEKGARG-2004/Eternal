"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("510a5a97-abeb-4aa3-adc4-81832b89d102");
  }, []);

  return null;
};
