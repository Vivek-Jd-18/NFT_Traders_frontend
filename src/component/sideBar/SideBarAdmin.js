import * as React from 'react'
import { styled, useTheme, createTheme, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MoreIcon from '@mui/icons-material/MoreVert'
import InputBase from '@mui/material/InputBase'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import image from '../../assets/images/icon-N.png'
import { Outlet } from 'react-router-dom'
import '../../assets/css/style.css'
import { Button } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AdminLogOutAction } from '../../redux/admin/action'
import SearchIcon from '@mui/icons-material/Search'
import AdminDashbordList from './sidebarList/SidebarListAdmin'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import Web3 from 'web3'
import { providerOptions } from '../../utils/providerOptions'
const drawerWidth = 280

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  })
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '5px 0px 0px 5px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch'
    }
  }
}))

const THEME = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
})

export default function SideBar (props) {
  const navigate = useNavigate()
  let dispatch = useDispatch()
  const theme = useTheme()
  const location = useLocation()
  const userData = useSelector(state => state.AdminReducer)
  const [open, setOpen] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const [walletInfo, setWalletInfo] = React.useState({
    address: '',
    Balance: null
  })

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }
  const handleMenuLogout =async () => {
    const web3Modal = new Web3Modal({
      network: 'polygonMumbai',
      theme: 'dark',
      
      providerOptions
    })
    await web3Modal.clearCachedProvider()
    console.log('acc')
  
    dispatch(AdminLogOutAction())
    navigate('/admin')
  }
  const menuId = 'primary-search-account-menu'

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const btnhandler = () => {
    console.log('click')

    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(res => accountChangeHandler(res[0]))
    } else {
      alert('install metamask extension!!')
    }
  }

  // Function for getting handling all events
  const accountChangeHandler = account => {
    // Setting an address data
    setWalletInfo({
      address: account
    })
    localStorage.setItem('Address', account)
    console.log('account', account)
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={btnhandler}>Connected</MenuItem>
      <MenuItem onClick={handleMenuLogout}>Logout</MenuItem>
    </Menu>
  )

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open} className='app-bar'>
          <Toolbar sx={{ backgroundColor: '#000000' }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search projects, accounts & people'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Button
              sx={{
                background:
                  'transparent linear-gradient(90deg, #2992F5 0%, #3CA0FF 100%) 0% 0% no-repeat padding-box',
                borderRadius: '0px 5px 5px 0px',
                textTransform: 'none',
                padding: '7.5px 22px'
              }}
              variant='contained'
            >
              Search
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {walletInfo.address === '' && (
                <Button
                  sx={{ color: '#FFFFFF', textTransform: 'none' }}
                  variant='text'
                  onClick={btnhandler}
                >
                  Wallet Connect
                </Button>
              )}

              {walletInfo.address !== '' && (
                <Button
                  sx={{ color: '#FFFFFF', textTransform: 'none' }}
                  variant='text'
                  onClick={btnhandler}
                  title={walletInfo.address}
                >
                  Connected
                </Button>
              )}
              <Button
                onClick={handleMenuLogout}
                sx={{ color: '#FFFFFF', textTransform: 'none' }}
                variant='text'
              >
                Logout
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#000000'
            },
            '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper:hover': {
              overflowY: 'scroll'
            },
            '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
              overflow: 'hidden'
            }
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon
                sx={{ color: '#fff', margin: '15px 0px 0px 233px' }}
              />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>

          <Box
            component='img'
            sx={{
              height: 60,
              width: 201,
              margin: '-38px 0px 26px 17px'
            }}
            alt='The house from the offer.'
            src={image}
          />
          <AdminDashbordList />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Box
            sx={{
              background:
                'transparent linear-gradient(90deg, #1D4395 0%, #546EB3 51%, #167BD3 87%, #007FDE 100%) 0% 0% no-repeat padding-box',
              padding: '10px'
            }}
          >
            <marquee style={{ color: '#FFFFFF' }}>
              LIVE UPDATES Ethereum $2560USD BAYC Acquired by Larva Labs
              (pointupindex) (pointupindex)
            </marquee>
          </Box>
          <Outlet />
        </Main>
      </Box>
    </>
  )
}
