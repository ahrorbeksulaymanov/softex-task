import { ConditionIcon, EducationIcon, HardSkillIcon, SettingsIcon, StatisticsIcon } from "../components/icons";
import SignInPage from "../pages/auth/signin"
import ConditionsPage from "../pages/conditions";
import EducationPage from "../pages/education";
import HardSkillPage from "../pages/hard-skills";
import NotFoundPage from "../pages/notFound";
import SettingsPage from "../pages/settings";
import StatisticsPage from "../pages/statistics";
import { TypeRoutes } from "./types"

export const public_routes: TypeRoutes[] = [
    {
        name: "Login",
        path: "/",
        component: SignInPage,
        config: {
          icon: <StatisticsIcon />,
          structure: "nonlayout",
          isMenu: false,
        },
        submenu: [],
    },
    {
        name: "Not Found",
        path: "/not-found",
        component: NotFoundPage,
        config: {
          icon: <StatisticsIcon />,
          structure: "nonlayout",
          isMenu: false,
        },
        submenu: [],
    },
];

export const private_routes: TypeRoutes[] = [
    {
        name: "Statistics",
        path: "/",
        component: StatisticsPage,
        config: {
          icon: <StatisticsIcon />,
          structure: "layout",
          isMenu: true,
        },
        submenu: [],
    },
    {
        name: "Education",
        path: "/education",
        component: EducationPage,
        config: {
          icon: <EducationIcon />,
          structure: "layout",
          isMenu: true,
        },
        submenu: [],
    },
    {
        name: "Settings",
        path: "/settings",
        component: SettingsPage,
        config: {
            icon: <SettingsIcon />,
            structure: "layout",
            isMenu: true,
        },
        submenu: [],
    },
    {
        name: "Hard skill",
        path: "/hard-skill",
        component: HardSkillPage,
        config: {
          icon: <HardSkillIcon />,
          structure: "layout",
          isMenu: true,
        },
        submenu: [],
    },
    {
        name: "Conditions",
        path: "/conditions",
        component: ConditionsPage,
        config: {
          icon: <ConditionIcon />,
          structure: "layout",
          isMenu: true,
        },
        submenu: [],
    },
];