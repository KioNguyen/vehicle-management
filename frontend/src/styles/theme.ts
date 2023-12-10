import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
    "2xl": "1920px",
    "3xl": "2560px",
  },
});


export default theme;