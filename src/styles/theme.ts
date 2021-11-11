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
      50: "#EEEEF2",
      100: "#D1D2DC",
      200: "#B3B5C6",
      300: "#9699B0",
      400: "#797D9A",
      500: "#616480",
      600: "#4B4D63",
      700: "#353646",
      800: "#1F2029",
      900: "#181B23",
    }
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.50",
        bg: "gray.800",
        fontSize: "14px"
      },
    },
  },
})
