"use client";

export const checkForDev = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const secretsite = queryParameters.get("secretsite");
  return secretsite === "ditisdev123";
};
