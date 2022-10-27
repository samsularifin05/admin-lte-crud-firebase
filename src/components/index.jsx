import { Field, reduxForm, formValueSelector, reset, change } from "redux-form";
import { connect } from "react-redux";
import Content from "./content";
import Router from "./router";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sideBar";
import React, { useState, useEffect } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Card, Col, PanelContent, Row, HeaderContent } from "./panelContent";
import {
  FileInput,
  getItem,
  HiiddenFiled,
  LoadingContent,
  NotificationConfirm,
  openTab,
  ReanderField,
  ReanderSelect,
  removeItem,
  setItem,
  ToastNotification
} from "./helper";
import Button from "./button";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Axios from "axios";
import { getData, postData } from "./axios";
import { Table } from "antd";
import ModalGlobal from "./helper/ModalGlobal";
import TabelMaster from "./helper/TabelMaster";
import { createNumberMask } from "redux-form-input-masks";
import { doDecrypt, doEncrypt } from "./helper/Encrypt";

const ServerBe = process.env.REACT_APP_BE;
const currencyMask = createNumberMask({
  prefix: "Rp. ",
  locale: "kr-KO",
});
export {
  FileInput,
  doEncrypt,
  doDecrypt,
  currencyMask,
  HiiddenFiled,
  TabelMaster,
  formValueSelector, reset, change,
  NotificationConfirm,
  ModalGlobal,
  Table,
  ToastNotification,
  removeItem,
  setItem,
  getItem,
  getData,
  postData,
  ServerBe,
  Axios,
  Provider,
  BrowserRouter,
  ReactDOM,
  Row,
  Col,
  ReanderSelect,
  openTab,
  Field,
  Button,
  connect,
  LoadingContent,
  reduxForm,
  ReanderField,
  Card,
  HeaderContent,
  useSelector,
  useDispatch,
  Sidebar,
  PanelContent,
  Content,
  Router,
  Link,
  withRouter,
  useState,
  useEffect,
  Route,
  Header,
  Footer,
  React
};
