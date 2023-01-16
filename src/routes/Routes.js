import React from "react";
import Login from "../container/users/auth/login/Login";
import SignIn from "../container/users/auth/login/SignIn";
import Logout from "../container/users/auth/login/Logout";
import SideBar from "../component/sideBar/SideBar";
import Settings from "../container/users/setting/Setting";
import LaunchApp from "../container/users/launchApp/launchApp";
import AccessDenied from "../container/users/accessDeniedPage/AccessDenied";
import AdminSideBar from "../component/sideBar/SideBarAdmin";


import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Routess,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Notifications from "../container/admin/notification/Notification";
import NotificationList from "../container/admin/notification/NotificationList";
import Links from "../container/admin/links/Link";
import UserList from "../container/admin/userlist/UserList";
import Dashboard from "../container/users/dashbord/Dashbord";
import Watching from "../container/users/watching/Watching";
import NftMarketplace from "../container/users/nftMarket/NftMarket";
import News from "../container/users/news/News";
import Alert from "../container/users/alerts/Alerts";
import Discovery from "../container/users/discovery/Discovery";
import MyportfolioProfitLoss from "../container/users/myportfolio/MyportfolioProfitLoss";
import MyportfolioCollection from "../container/users/myportfolio/MyportfolioMycollection";
import MyportfolioInsights from "../container/users/myportfolio/MyportfolioInsights";
import Treding from "../container/users/trending/Trending";
import Whales from "../container/users/whales/Whales";
import Calendar from "../container/users/calendar/Calendar";
import Collections from "../container/users/collections/Collection";
import FloorSweeps from "../container/users/floorSweep/Floorsweep";
import Top100 from "../container/users/top100/Top100";
import Minting from "../container/users/minting/Minting";
import NftTv from "../container/users/nftTv/NftTv";
import SettingPage from "../container/users/setting/SettingPage";

import NftProjectSale from "../container/users/nftProject/nftProjectSales/Nftproject";
import Nftprojectlisting from "../container/users/nftProject/nftProjectListing/NftProject";
import NftProjectOwners from "../container/users/nftProject/nftProjectOwner/Nftproject";
import NftProjectShowAll from "../container/users/nftProject/nftProjectShowAll/NftProject";
import NftProjectLive from "../container/users/nftProject/nftProjectLive/NftProject";
import NftProjectSocial from "../container/users/nftProject/nftProjectSocial/NftProject";

import CollectionsIndividual from "../container/users/collections/CollectionIndividual";
import Compare from "../container/users/compare/Compare";
import BlueChip from "../container/users/blueChip/BlueChip";
import Jmmyethcollection from "../container/users/j1mmy.Eth/J1mmyEthMycollection";
import Jmmyethinsights from "../container/users/j1mmy.Eth/J1mmyEthInsights";
import Jmmyethprofitloss from "../container/users/j1mmy.Eth/J1mmyEthProfitLoss";
import CategoryManagement from "../container/admin/categoryManagement/CategoryManagement";
import CategoryManagementList from "../container/admin/categoryManagement/CategoryManagementList";
import ProjectCategoryManagement from "../container/admin/projectCategoryManagement/ProjectCategoryManagement";
import ProjectCategoryManagementList from "../container/admin/projectCategoryManagement/ProjectCategoryManagementList";
import NewsList from "../container/admin/news/NewsList";
import CreateUpdateNews from "../container/admin/news/CreateUpdateNews";
import CollectionList from "../container/admin/collections/CollectionList";
import CreateUpdateCollection from "../container/admin/collections/CreateUpdateCollection";
import ProjectList from "../container/admin/collections/ProjectList";
import CreateUpdateProject from "../container/admin/collections/CreateUpdateProject";
import AboutUs from "../container/admin/cms/AboutUs";
import TermsCondition from "../container/admin/cms/TermsCondition";
import PrivacyPolicy from "../container/admin/cms/PrivacyPolicy";
import NftMintingList from "../container/admin/nftMinting/NftMintingList";
import CreateUpdateNft from "../container/admin/nftMinting/CreateUpdateNft";

const history = createBrowserHistory();
export default function Routes(props) {
  const loginDetails = localStorage.getItem("Address");
  const adminloginDetails = localStorage.getItem("userInfo");

  return (
    <>
      <BrowserRouter history={history}>
        <Routess>
          <Route
            exact
            path="/"
            element={<Navigate to="/users/SignIn" replace={true} />}
          />
          <Route path="users/SignIn" element={<SignIn />} />

          {loginDetails ? (
            <>
              <Route path={`/users/launchapp`} element={<LaunchApp />} />
              <Route path="/users" element={<SideBar />}>
                <Route path={`logout`} element={<Logout />} />
                <Route path={`settings`} element={<Settings />} />

                <Route path={`accessdenied`} element={<AccessDenied />} />
                <Route path={`sidebar`} element={<SideBar />} />
                <Route path={`notifications`} element={<Notifications />} />
                <Route path={`dashboard`} element={<Dashboard />} />
                <Route path={`watching`} element={<Watching />} />
                <Route path={`nftmarket`} element={<NftMarketplace />} />
                <Route path={`news`} element={<News />} />
                <Route path={`alerts`} element={<Alert />} />
                <Route path={`compare`} element={<Compare />} />
                <Route path={`discovery`} element={<Discovery />} />
                <Route
                  path={`myportfoliocollection`}
                  element={<MyportfolioCollection />}
                />
                <Route
                  path={`myportfolioprofitloss`}
                  element={<MyportfolioProfitLoss />}
                />
                <Route
                  path={`myportfolioinsights`}
                  element={<MyportfolioInsights />}
                />
                <Route path={`trending`} element={<Treding />} />
                <Route path={`whale`} element={<Whales />} />
                <Route path={`calendar`} element={<Calendar />} />
                <Route path={`collections`} element={<Collections />} />
                <Route path={`floorsweeps`} element={<FloorSweeps />} />
                <Route path={`top100`} element={<Top100 />} />
                <Route path={`bluechip`} element={<BlueChip />} />
                <Route path={`minting`} element={<Minting />} />
                <Route path={`nfttv`} element={<NftTv />} />
                <Route path={`settingpage`} element={<SettingPage />} />
                <Route path={`nftprojectsales`} element={<NftProjectSale />} />
                <Route
                  path={`nftprojectlisting`}
                  element={<Nftprojectlisting />}
                />
                <Route
                  path={`nftprojectowners`}
                  element={<NftProjectOwners />}
                />
                <Route
                  path={`nftprojectshowall`}
                  element={<NftProjectShowAll />}
                />
                <Route path={`nftprojectlive`} element={<NftProjectLive />} />
                <Route
                  path={`nftprojectsocial`}
                  element={<NftProjectSocial />}
                />
                <Route
                  path={`j1mmyethcollection`}
                  element={<Jmmyethcollection />}
                />
                <Route
                  path={`j1mmyethprofitloss`}
                  element={<Jmmyethprofitloss />}
                />
                <Route
                  path={`j1mmyethinsights`}
                  element={<Jmmyethinsights />}
                />
                <Route
                  path={`collectionsindividual`}
                  element={<CollectionsIndividual />}
                />
              </Route>{" "}
            </>
          ) : (
            <Route
              path="/"
              element={<Navigate to="/users/SignIn" replace={true} />}
            />
          )}
          <Route
            exact
            path="/admin"
            element={<Navigate to="/admin/login" replace={true} />}
          />
          <Route path="admin/login" element={<Login />} />
          {adminloginDetails ? (
            <Route path="/admin" element={<AdminSideBar />}>
              <Route path={"userlist"} element={<UserList />} />
              <Route path={`links`} element={<Links />} />
              <Route
                path={`notificationslist`}
                element={<NotificationList />}
              />
              <Route path={`notifications`} element={<Notifications />} />
              <Route
                path={`categoryManagement`}
                element={<CategoryManagement />}
              />
              <Route
                path={`categoryManagementList`}
                element={<CategoryManagementList />}
              />
              <Route
                path={`projectCategoryManagement`}
                element={<ProjectCategoryManagement />}
              />
              <Route
                path={`projectCategoryManagement/:id`}
                element={<ProjectCategoryManagement />}
              />
              <Route
                path={`categoryManagement/:id`}
                element={<CategoryManagement />}
              />
              <Route
                path={`projectCategoryManagementList`}
                element={<ProjectCategoryManagementList />}
              />
              <Route path={`notifications`} element={<Notifications />} />

              {/* NFT Minting */}
              <Route path={`nftMintingList`} element={<NftMintingList />} />
              <Route path={`nftMinting`} element={<CreateUpdateNft />} />
              <Route path={`nftMinting/:id`} element={<CreateUpdateNft />} />
              { /* end NFT Minting */}

              {/* news */}
              <Route path={`newsList`} element={<NewsList />} />
              <Route path={`createUpdateNews`} element={<CreateUpdateNews />} />
              <Route path={`createUpdateNews/:id`} element={<CreateUpdateNews />} />
              {/* end news */}

              {/* collections */}
              <Route path={`collections`} element={<CollectionList />} />
              <Route path={`createUpdateCollection`} element={<CreateUpdateCollection />} />
              <Route path={`createUpdateCollection/:id`} element={<CreateUpdateCollection />} />
              <Route path={`projects/:collectionId`} element={<ProjectList />} />
              <Route path={'createUpdateProject/:collectionId'} element={<CreateUpdateProject />} />
              <Route path={'createUpdateProject/:collectionId/:id'} element={<CreateUpdateProject />} />

              {/* end collections */}

              {/* CMS */}
              <Route path={`aboutUs`} element={<AboutUs />} />
              <Route path={`termsCondition`} element={<TermsCondition />} />
              <Route path={`privacyPolicy`} element={<PrivacyPolicy />} />
              {/* end CMS */}
            </Route>
          ) : (
            <Route
              path="/admin"
              element={<Navigate to="/admin/login" replace={true} />}
            />
          )}
        </Routess>
      </BrowserRouter>
    </>
  );
}
