import React from 'react';
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const DashBordList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        noWrap
        variant="p"
        sx={{
          margin: "0px 0px 15px 45px",
          borderLeftColor:
            location.pathname == "/admin/userlist" ? "#32BEF1" : "",
          borderLeftStyle:
            location.pathname == "/admin/userlist" ? "solid" : "",
          borderLeftWidth: location.pathname == "/admin/userlist" ? "2px" : "",
        }}
      >
        <Link
          to={"/admin/userlist"}
          className={
            location.pathname == "/admin/userlist"
              ? "side-bar-link-selected"
              : "side-bar-link"
          }
        >
          Invite List
        </Link>
      </Box>
      <Box
        noWrap
        variant="p"
        sx={{
          margin: "0px 0px 15px 45px",
          borderLeftColor: location.pathname == "/admin/links" ? "#32BEF1" : "",
          borderLeftStyle: location.pathname == "/admin/links" ? "solid" : "",
          borderLeftWidth: location.pathname == "/admin/links" ? "2px" : "",
        }}
      >
        <Link
          to={"/admin/links"}
          className={
            location.pathname == "/admin/links"
              ? "side-bar-link-selected"
              : "side-bar-link"
          }
        >
          Social Links
        </Link>
      </Box>

      <Box
        variant="p"
        noWrap
        sx={{
          margin: "0px 0px 15px 45px",
          borderLeftColor:
            location.pathname == "/admin/notificationslist" ? "#32BEF1" : "",
          borderLeftStyle:
            location.pathname == "/admin/notificationslist" ? "solid" : "",
          borderLeftWidth:
            location.pathname == "/admin/notificationslist" ? "2px" : "",
        }}
      >
        <Link
          to={"/admin/notificationslist"}
          className={
            location.pathname == "/admin/notificationslist"
              ? "side-bar-link-selected"
              : "side-bar-link"
          }
        >
          Notification
        </Link>
      </Box>
      <Box
        variant="p"
        noWrap
        sx={{
          margin: "0px 0px 15px 45px",
          borderLeftColor:
            location.pathname == "/admin/categoryManagementList" ? "#32BEF1" : "",
          borderLeftStyle:
            location.pathname == "/admin/categoryManagementList" ? "solid" : "",
          borderLeftWidth:
            location.pathname == "/admin/categoryManagementList" ? "2px" : "",
        }}
      >
        <Link
          to={"/admin/categoryManagementList"}
          className={
            location.pathname == "/admin/categoryManagementList"
              ? "side-bar-link-selected"
              : "side-bar-link"
          }
        >
          Category Management
        </Link>
      </Box>
      <Box
        variant="p"
        noWrap
        sx={{
          margin: "0px 0px 15px 45px",
          borderLeftColor:
            location.pathname == "/admin/projectCategoryManagementList" ? "#32BEF1" : "",
          borderLeftStyle:
            location.pathname == "/admin/projectCategoryManagementList" ? "solid" : "",
          borderLeftWidth:
            location.pathname == "/admin/projectCategoryManagementList" ? "2px" : "",
        }}
      >
        <Link
          to={"/admin/projectCategoryManagementList"}
          className={
            location.pathname == "/admin/projectCategoryManagementList"
              ? "side-bar-link-selected"
              : "side-bar-link"
          }
        >
         Project Management
        </Link>
      </Box>
      <Box
        variant="p"
        noWrap
        sx={{
          margin: "0px 0px 15px 45px",
          borderLeftColor:
            location.pathname == "/admin/newsList" ? "#32BEF1" : "",
          borderLeftStyle:
            location.pathname == "/admin/newsList" ? "solid" : "",
          borderLeftWidth:
            location.pathname == "/admin/newsList" ? "2px" : "",
        }}
      >
        <Link
          to={"/admin/newsList"}
          className={
            location.pathname == "/admin/newsList"
              ? "side-bar-link-selected"
              : "side-bar-link"
          }
        >
          News
        </Link>
      </Box>

      <Box
        variant="p"
        noWrap
        sx={{
          margin: "0px 0px 15px 45px",
          borderLeftColor:
            location.pathname == "/admin/collections" ? "#32BEF1" : "",
          borderLeftStyle:
            location.pathname == "/admin/collections" ? "solid" : "",
          borderLeftWidth:
            location.pathname == "/admin/collections" ? "2px" : "",
        }}
      >
        <Link
          to={"/admin/collections"}
          className={
            location.pathname == "/admin/collections"
              ? "side-bar-link-selected"
              : "side-bar-link"
          }
        >
        Collections
        </Link>
      </Box>

      <Box
        noWrap
        variant="p"
        sx={{
          margin: "0px 0px 15px 45px",
          borderLeftColor: location.pathname == "/admin/nftMintingList" ? "#32BEF1" : "",
          borderLeftStyle: location.pathname == "/admin/nftMintingList" ? "solid" : "",
          borderLeftWidth: location.pathname == "/admin/nftMintingList" ? "2px" : "",
        }}
      >
        <Link
          to={"/admin/nftMintingList"}
          className={
            location.pathname == "/admin/nftMintingList"
              ? "side-bar-link-selected"
              : "side-bar-link"
          }
        >
          NFT Minting
        </Link>
      </Box>
        
      <Box
        variant="p"
        noWrap
        sx={{
          margin: "-16px 0px 10px 32px"
        }}
      >
      <List
        sx={{
          '& .css-cvhtoe-MuiButtonBase-root-MuiListItemButton-root': {
            p: 0,
            pl: '19px',
            mt: '8px'
          },
          '& .css-1mk9mw3-MuiList-root': {
            px: 2,
            mt: 1,
          },
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
        <Box
        variant="p"
        noWrap
        sx={{
          borderLeftColor:
            location.pathname === '/admin/contentManagement' ? '#32BEF1' : '',
          borderLeftStyle:
            location.pathname === '/admin/contentManagement' ? 'solid' : '',
          borderLeftWidth:
            location.pathname === '/admin/contentManagement' ? '2px' : '',
        }}
      >
          <Link
            to={'/admin/aboutUs'}
            className={
              location.pathname === '/admin/aboutUs'
                ? 'side-bar-link-selected'
                : 'side-bar-link'
            }
          >
            CMS
          </Link>
          </Box>
          {open ? (
            <ExpandLess sx={{ color: 'white' }} />
          ) : (
            <ExpandMore sx={{ color: 'white' }} />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Box
              variant="p"
              noWrap
              sx={{
                margin: '0px 0px 15px 19px',
                borderLeftColor: location.pathname === '/admin/aboutUs' ? '#32BEF1' : '',
                borderLeftStyle: location.pathname === '/admin/aboutUs' ? 'solid' : '',
                borderLeftWidth: location.pathname === '/admin/aboutUs' ? '2px' : '',
              }}
            >
              <Link
                to={'/admin/aboutUs'}
                className={
                  location.pathname === '/admin/aboutUs'
                    ? 'side-bar-link-selected'
                    : 'side-bar-link'
                }
              >
                About Us
              </Link>
            </Box>

            <Box
              variant="p"
              noWrap
              sx={{
                margin: '0px 0px 15px 19px',
                borderLeftColor: location.pathname === '/admin/termsCondition' ? '#32BEF1' : '',
                borderLeftStyle: location.pathname === '/admin/termsCondition' ? 'solid' : '',
                borderLeftWidth: location.pathname === '/admin/termsCondition' ? '2px' : '',
              }}
            >
              <Link
                to={'/admin/termsCondition'}
                className={
                  location.pathname === '/admin/termsCondition'
                    ? 'side-bar-link-selected'
                    : 'side-bar-link'
                }
              >
                Terms & Condition
              </Link>
            </Box>
            
            <Box
              variant="p"
              noWrap
              sx={{
                margin: '0px 0px 15px 19px',
                borderLeftColor: location.pathname === '/admin/privacyPolicy' ? '#32BEF1' : '',
                borderLeftStyle: location.pathname === '/admin/privacyPolicy' ? 'solid' : '',
                borderLeftWidth: location.pathname === '/admin/privacyPolicy' ? '2px' : '',
              }}
            >
              <Link
                to={'/admin/privacyPolicy'}
                className={
                  location.pathname === '/admin/privacyPolicy'
                    ? 'side-bar-link-selected'
                    : 'side-bar-link'
                }
              >
                Privacy Policy
              </Link>
            </Box>
          </List>
        </Collapse>
      </List>
    </Box>

    </>
  );
};
export default DashBordList;
