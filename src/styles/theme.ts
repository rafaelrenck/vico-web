import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: "Karla",
    body: "Karla",
  },
  colors: {
    primary: {
      50: '#ffe3ea',
      100: '#ffb5c1',
      200: '#f9869a',
      300: '#f55671',
      400: '#f12748',
      500: '#d80e2f',
      600: '#a90724',
      700: '#790319',
      800: '#4b000e',
      900: '#1f0003',
    },
    gray: {
      50: "#E9E9E9",
      100: "#D2D2D2",
      200: "#B9B9BD",
      300: "#9FA0A8",
      400: "#858694",
      500: "#6B6D7E",
      600: "#545667",
      700: "#3E404F",
      800: "#1F2029",
      900: "#181B23",
    },
    dark: {
      500: "#353646",
      600: "#454656",
    },
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.50",
        bg: "gray.900",
        fontSize: "14px"
      },
    },
  },
})
