import Home from "./components/pages/Home";

import HomeIcon from "@material-ui/icons/Home";
import HomeContactForm from "./components/custom/home/HomeContactForm";
import Tools from "./components/pages/Tools";

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
      order: "1",
      path: "tools",
      name: "Tools",
      Component: Tools,
      Icon: HomeIcon,
    },
    {
      order: "1",
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
