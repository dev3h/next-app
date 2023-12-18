import NextLink from "next/link";
import PropTypes from "prop-types";
import { Box, ButtonBase } from "@mui/material";
import { useState } from "react";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import { SvgIcon } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { usePathname } from "next/navigation";

export const SideNavItem = (props) => {
  const { active = false, disabled, external, icon, path, title, sub } = props;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const linkProps = path
    ? external
      ? {
          component: "a",
          href: path,
          target: "_blank",
        }
      : {
          component: NextLink,
          href: path,
        }
    : {};

  return (
    <li className="mt-1">
      <ButtonBase
        onClick={handleClick}
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          pl: "16px",
          pr: "16px",
          py: "6px",
          textAlign: "left",
          width: "100%",
          ...(active && {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          }),
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              color: "neutral.400",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
              ...(active && {
                color: "primary.main",
              }),
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: "neutral.400",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
            ...(active && {
              color: "common.white",
            }),
            ...(disabled && {
              color: "neutral.500",
            }),
          }}
        >
          {title}
        </Box>
        {sub && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              color: "neutral.400",
              display: "inline-flex",
              justifyContent: "center",
              ml: 2,
              ...(active && {
                color: "primary.main",
              }),
            }}
            className="font-[16px]"
          >
            {open ? (
              <SvgIcon fontSize="inherit">
                <ChevronDownIcon />
              </SvgIcon>
            ) : (
              <SvgIcon fontSize="inherit">
                <ChevronRightIcon />
              </SvgIcon>
            )}
          </Box>
        )}
      </ButtonBase>
      <Collapse in={open} timeout="auto" unmountOnExit className="pl-5">
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {sub &&
            sub.map((item) => {
              const active = item.path ? pathname === item.path : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                  sub={item.subItems}
                />
              );
            })}
        </Box>
      </Collapse>
    </li>
  );
};

SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
