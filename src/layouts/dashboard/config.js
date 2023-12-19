import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";

export const sideNavData = [
  {
    id: 1,
    title: "Nhóm 1",
    items: [
      {
        title: "Overview",
        icon: (
          <SvgIcon fontSize="small">
            <ChartBarIcon />
          </SvgIcon>
        ),
        state: "overview",
        subItems: [
          {
            title: "Dashboard",
            state: "overview.dashboard",
            path: "/",
            icon: (
              <SvgIcon fontSize="small">
                <ChartBarIcon />
              </SvgIcon>
            ),
          },
          {
            title: "Analytics",
            state: "overview.analytics",
            icon: (
              <SvgIcon fontSize="small">
                <ShoppingBagIcon />
              </SvgIcon>
            ),
            subItems: [
              {
                title: "Overview",
                path: "/analytics/overview",
                state: "overview.analytics.overview",
                icon: (
                  <SvgIcon fontSize="small">
                    <CogIcon />
                  </SvgIcon>
                ),
              },
              {
                title: "Performance",
                path: "/analytics/performance",
                state: "overview.analytics.performance",
                icon: (
                  <SvgIcon fontSize="small">
                    <CogIcon />
                  </SvgIcon>
                ),
              },
              {
                title: "Settings",
                path: "/analytics/settings",
                state: "overview.analytics.settings",
                icon: (
                  <SvgIcon fontSize="small">
                    <CogIcon />
                  </SvgIcon>
                ),
              },
            ],
          },
          {
            title: "Finance",
            path: "/finance",
            icon: (
              <SvgIcon fontSize="small">
                <ChartBarIcon />
              </SvgIcon>
            ),
          },
          {
            title: "Reports",
            path: "/reports",
            icon: (
              <SvgIcon fontSize="small">
                <ChartBarIcon />
              </SvgIcon>
            ),
          },
        ],
      },
      {
        title: "Customers",
        state: "customers",
        path: "/customers",
        icon: (
          <SvgIcon fontSize="small">
            <UsersIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Companies",
        path: "/companies",
        state: "companies",
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingBagIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Account",
        state: "account",
        path: "/account",
        icon: (
          <SvgIcon fontSize="small">
            <UserIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Nhóm 2",
    items: [
      {
        title: "Settings",
        // path: "/settings",
        state: "settings",
        icon: (
          <SvgIcon fontSize="small">
            <CogIcon />
          </SvgIcon>
        ),
        subItems: [
          {
            title: "General",
            path: "/settings/general",
            state: "settings.general",
            icon: (
              <SvgIcon fontSize="small">
                <CogIcon />
              </SvgIcon>
            ),
          },
          {
            title: "Subscription",
            path: "/settings/subscription",
            state: "settings.subscription",
            icon: (
              <SvgIcon fontSize="small">
                <CogIcon />
              </SvgIcon>
            ),
          },
          {
            title: "Notifications",
            path: "/settings/notifications",
            state: "settings.notifications",
            icon: (
              <SvgIcon fontSize="small">
                <CogIcon />
              </SvgIcon>
            ),
          },
          {
            title: "Security",
            path: "/settings/security",
            state: "settings.security",
            icon: (
              <SvgIcon fontSize="small">
                <CogIcon />
              </SvgIcon>
            ),
          },
        ],
      },
      {
        title: "Login",
        path: "/auth/login",
        state: "login",
        icon: (
          <SvgIcon fontSize="small">
            <LockClosedIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Register",
        path: "/auth/register",
        state: "register",
        icon: (
          <SvgIcon fontSize="small">
            <UserPlusIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Nhóm 3",
    items: [
      {
        title: "Error",
        path: "/404",
        state: "page404",
        icon: (
          <SvgIcon fontSize="small">
            <XCircleIcon />
          </SvgIcon>
        ),
      },
    ],
  },
];
