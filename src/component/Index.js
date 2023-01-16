import { 
    Container,
    FormControl,
    Select,
    Paper,
    Button, 
    TextField,
    useMediaQuery,
    MenuItem,
    Grid,
    Card, 
    IconButton, 
    Icon,
    Badge,
    Typography,
    ButtonBase,
    ButtonGroup,
    InputLabel,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Switch,
    FormControlLabel,
    Modal,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Box, styled, useTheme } from "@mui/system";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import CalendarImg from "../users/calendar/CalenderImage";
import { toast, ToastContainer } from "react-toastify";
import percentage from "../../assets/images/percentage.png"
import png from "../../assets/png";
import img from "../../assets/images/pexels-irina-iriser-1379636.jpg";
import img2 from "../../assets/images/pexels-julius-silver-753626.jpg"
import settingImg from "../../assets/images/setting.png";
import OnedSaleChart from "./nftProject/nftProjectSales/1dSaleChart";
import FloorPriceChart from "./nftProject/nftProjectSales/FloorPriceChart";
import ApexChart from "./nftProject/nftProjectSales/ScatterSaleChart";
import CurrentListing from "./nftProject/nftProjectListing/CurrentListing";
import DailySalesListing from "./nftProject/nftProjectListing/DailySalesListing";
import LinerChart from "./nftProject/nftProjectSocial/LinerChart";
import LinearProgress,{ linearProgressClasses,} from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import ProgressChart from "./nftProject/nftProjectOwner/ProgressChart";
// import LinerChart from "../users/Nftproject/NftProjectOwner/linerChart"
import DoughnutChart from "./nftProject/nftProjectOwner/DoughnutChart";
import ScatterChart from "./watching/ScatterChart";
import ProjectVolume from "./myportfolio/ProjectVolume";
import CategoryBreakDowm from "./myportfolio/CategoryBreakDown";
import PortfolioLinerChart from "./myportfolio/LinerChart";


export default {
  Container,
  FormControl,
  Select,
  Paper,
  Box,
  Button,
  TextField,
  useMediaQuery,
  MenuItem,
  Grid,
  Card,
  IconButton,
  Icon,
  Badge,
  Typography,
  ButtonBase,
  ButtonGroup,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  useNavigate,
  useParams,
  toast,
  ToastContainer,
  CalendarToday,
  CalendarImg,
  FilterAltIcon,
  percentage,
  png,
  img,
  img2,
  settingImg,
  styled,
  useTheme,
  OnedSaleChart,
  FloorPriceChart,
  ApexChart,
  CurrentListing,
  DailySalesListing,
  LinerChart,
  LinearProgress,
  linearProgressClasses,
  PropTypes,
  ProgressChart,
  DoughnutChart,
  ScatterChart,
  Switch,
  FormControlLabel,
  Modal,
  ProjectVolume,
  CategoryBreakDowm,
  PortfolioLinerChart,
};
