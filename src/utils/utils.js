import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 800) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export { useIsMobile };

const convertToMMDDYYYY = (dateString) => {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Get the month, day, and year
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = date.getUTCDate().toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  // Return the formatted date string
  return `${month}/${day}/${year}`;
};

export { convertToMMDDYYYY };

const getCurrencySymbol = (currencyCode) => {
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    JPY: "¥",
    GBP: "£",
    AUD: "A$",
    CAD: "C$",
    CHF: "CHF",
    CNY: "¥",
    SEK: "kr",
    NZD: "NZ$",
    // Add more currency codes and their symbols as needed
  };

  // Return the symbol if it exists, otherwise return a default value or an error message
  return currencySymbols[currencyCode] || currencySymbols.USD;
};
export { getCurrencySymbol };

const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export { toTitleCase };

const getCompletedSurveysInYear = (surveys, year) => {
  return surveys.filter((survey) => {
    const surveyYear = new Date(survey.surveyRewardedDate).getFullYear();
    return surveyYear === year;
  }).length;
};
export { getCompletedSurveysInYear };
