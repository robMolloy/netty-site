import Home from "./components/pages/Home";

import HomeIcon from "@material-ui/icons/Home";
import HomeContactForm from "./components/custom/home/HomeContactForm";
import Resources from "./components/pages/Resources";
import Psychometric from "./components/pages/Psychometric";

const config = {
  pages: [
    {
      order: "0",
      path: "home",
      name: "Home",
      Component: Home,
      Icon: HomeIcon,
    },
    {
      order: "0",
      path: "psychometric",
      name: "Psychometric",
      Component: Psychometric,
      Icon: HomeIcon,
    },
    {
      order: "0",
      path: "resources",
      name: "Resources",
      Component: Resources,
      Icon: HomeIcon,
    },
    {
      order: "0",
      path: "contact",
      name: "Contact",
      Component: HomeContactForm,
      Icon: HomeIcon,
    },
  ],
  themes: [
    {
      primary: "#95bdc1",
      secondary: "#ceebfa",
      tertiary: "#34719a",
      mono: "#ffffff",
    },
    {
      primary: "#f67b50",
      secondary: "#fbc490",
      tertiary: "#fbaa60",
      mono: "#535b5f",
    },
  ],
  timeUnits: ["second", "minute", "hour", "day", "month"],
  contactTypes: ["phone", "email"],
  contactMethods: {
    phone: ["whatsapp", "sms", "call"],
    email: ["email"],
  },
};

export default config;
