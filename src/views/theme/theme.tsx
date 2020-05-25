export const primaryColor = "#ff0084";
export const hoverColor = "#ffe6ee";
export const redColor = "#dc3545"; // red-6 of antd
export const blueColor = "#1d40ef"; // notification
export const funnelItemHeadBg = "#ededed";
export const percentageBadge = "#e6e6e6";
export const borderColor = "#dedede";
export const svgGray = "#8e959e";
export const svgActiveGreen = "#68c893";

const spacingUnit = 4;

export const themeConfig = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      lg: 1280,
      md: 960,
      sm: 600,
      xl: 1920,
      xs: 0,
    },
  },
  direction: "ltr",
  mixins: {
    toolbar: {
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48,
      },
      "@media (min-width:600px)": {
        minHeight: 64,
      },
      minHeight: 56,
    },
  },
  overrides: {},
  palette: {
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      approved: svgActiveGreen,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      error: redColor,
      hover: "rgba(0, 0, 0, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(0, 0, 0, 0.14)",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    contrastThreshold: 3,
    divider: "rgba(0, 0, 0, 0.12)",
    error: {
      contrastText: "#fff",
      dark: "rgb(178, 16, 47)",
      light: "rgb(255, 69, 105)",
      main: "#ff1744",
    },
    grey: {
      100: "#f5f5f5",
      200: percentageBadge,
      300: funnelItemHeadBg,
      400: borderColor,
      50: "#fafafa",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#222222",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    primary: {
      contrastText: "#fff",
      dark: "#820038",
      light: "rgba(255,0,132,0.25)",
      main: primaryColor,
    },
    secondary: {
      contrastText: "#fff",
      dark: "rgb(17, 93, 86)",
      light: "rgb(71, 157, 149)",
      main: "#19857b",
    },
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
    },
    tonalOffset: 0.2,
    type: "light",
  },
  shadows: [
    "none",
    "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
    "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
    "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  shape: {
    borderRadius: 6,
    capsuleBorderRadius: 500,
    circle: "100%",
    iconSize: 20,
  },
  spacing: (x) => x * spacingUnit,
  transitions: {
    duration: {
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
      short: 250,
      shorter: 200,
      shortest: 150,
      standard: 300,
    },
    easing: {
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  typography: {
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.00938em",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0.01071em",
      lineHeight: 1.43,
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.02857em",
      lineHeight: 1.75,

      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: "0.03333em",
      lineHeight: 1.66,
    },
    ellipsis: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    fontFamily: '"europa", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontSizeLarge: 24,
    fontSizeMedium: 18,
    fontSizeSmall: 12,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "6rem",
      fontWeight: 300,
      letterSpacing: "-0.01562em",
      lineHeight: 1,
    },
    h2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "3.75rem",
      fontWeight: 300,
      letterSpacing: "-0.00833em",
      lineHeight: 1,
    },
    h3: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "3rem",
      fontWeight: 400,
      letterSpacing: "0em",
      lineHeight: 1.04,
    },
    h4: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "2.125rem",
      fontWeight: 400,
      letterSpacing: "0.00735em",
      lineHeight: 1.17,
    },
    h5: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "1.5rem",
      fontWeight: 400,
      letterSpacing: "0em",
      lineHeight: 1.33,
    },
    h6: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "0.0075em",
      lineHeight: 1.6,
    },
    overline: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: "0.08333em",
      lineHeight: 2.66,
      textTransform: "uppercase",
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.00938em",
      lineHeight: 1.75,
    },
    subtitle2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.00714em",
      lineHeight: 1.57,
    },
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    mobileStepper: 1000,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export default themeConfig;