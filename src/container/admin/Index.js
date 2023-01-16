import {
  Container,
  Paper,
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Autocomplete,
  styled,
  Tab,
  Tabs,
} from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Api } from "../../config/Api";
import DataService from "../../config/DataService";
import Swal from "sweetalert2";
import png from "../../assets/png";
import validator from "validator";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import parse from "html-react-parser";

export default {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  styled,
  DeleteIcon,
  EditIcon,
  png,
  validator,
  Container,
  Grid,
  Paper,
  Box,
  Button,
  TextField,
  Typography,
  CKEditor,
  ClassicEditor,
  useNavigate,
  useParams,
  toast,
  ToastContainer,
  Api,
  DataService,
  Swal,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Autocomplete,
  Tab,
  Tabs,
  PropTypes,
  parse,
};
