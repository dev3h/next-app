import NextLink from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/solid/ArrowTopRightOnSquareIcon";
import ChevronUpDownIcon from "@heroicons/react/24/solid/ChevronUpDownIcon";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Logo } from "src/components/logo";
import { Scrollbar } from "src/components/scrollbar";
import { sideNavData } from "./config";
import { SideNavItem } from "./side-nav-item";
import { useEffect, useState } from "react";

const activateNavItems = (items, targetPath) => {
  return items.map((item) => {
    const subItems = item.subItems ? activateNavItems(item.subItems, targetPath) : [];
    const isActive = item.path ? targetPath === item.path : false;

    // Kích hoạt các mục cha nếu một mục con được kích hoạt
    const isAnyChildActive = subItems.some((subItem) => subItem.active);
    const shouldActivateParent = isActive || isAnyChildActive;

    return {
      ...item,
      active: shouldActivateParent,
      subItems: subItems,
    };
  });
};

const setNavDataActiveState = (navData, targetPath) => {
  return navData.map((group) => {
    const items = activateNavItems(group.items, targetPath);
    const isActive = items.some((item) => item.active);

    return {
      ...group,
      active: isActive,
      items: items,
    };
  });
};
export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const [newSideNavData, setNewSideNavData] = useState(sideNavData);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  useEffect(() => {
    const updatedNavData = setNavDataActiveState(sideNavData, pathname);
    setNewSideNavData(updatedNavData);
  }, [pathname]);

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "neutral.400",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: "inline-flex",
              height: 32,
              width: 32,
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderRadius: 1,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              p: "12px",
            }}
          >
            <div>
              <Typography color="inherit" variant="subtitle1">
                Devias
              </Typography>
              <Typography color="neutral.400" variant="body2">
                Production
              </Typography>
            </div>
            <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
              <ChevronUpDownIcon />
            </SvgIcon>
          </Box>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {newSideNavData?.map((item) => {
              return (
                <div key={item?.id} className={item?.id !== 1 ? "!mt-4" : ""}>
                  <Typography
                    color="neutral.400"
                    variant="overline"
                    className="uppercase font-bold !ml-2 inline-block"
                  >
                    {item?.title}
                  </Typography>

                  <div className="mt-3">
                    {item?.items?.map((item) => (
                      <SideNavItem
                        active={item.active}
                        disabled={item.disabled}
                        external={item.external}
                        icon={item.icon}
                        key={item.title}
                        path={item.path}
                        title={item.title}
                        sub={item.subItems}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
