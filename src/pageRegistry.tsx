import React from "react";

import CcwlGovtSwPage from "./pages/ccwl/CcwlGovtSwPage";
import CcwlHomesPage from "./pages/ccwl/CcwlHomesPage";
import CcwlNgosPage from "./pages/ccwl/CcwlNgosPage";
import CcwlParentsPage from "./pages/ccwl/CcwlParentsPage";
import CcwlPolicePage from "./pages/ccwl/CcwlPolicePage";
import CwoPage from "./pages/ccwl/CwoPage";
import JjbPage from "./pages/ccwl/JjbPage";

import ChildLabourPage from "./pages/cncp/ChildLabourPage";
import ChildMarriagePage from "./pages/cncp/ChildMarriagePage";
import ChildrenFoundBeggingPage from "./pages/cncp/ChildrenFoundBeggingPage";
import ChildrenProstitutionPage from "./pages/cncp/ChildrenProstitutionPage";
import ChildrenStreetPage from "./pages/cncp/ChildrenStreetPage";
import MissingRunawayPage from "./pages/cncp/MissingRunawayPage";
import OrphansPage from "./pages/cncp/OrphansPage";

import CwcPage from "./pages/cncp/stakeholders/CwcPage";
import DcpuPage from "./pages/cncp/stakeholders/DcpuPage";
import GovtSwPage from "./pages/cncp/stakeholders/GovtSwPage";
import HomesPage from "./pages/cncp/stakeholders/HomesPage";
import NgosPage from "./pages/cncp/stakeholders/NgosPage";
import ParentsPage from "./pages/cncp/stakeholders/ParentsPage";
import PolicePage from "./pages/cncp/stakeholders/PolicePage";

import ChildRightsPage from "./pages/misc/ChildRightsPage";
import PocsoActPage from "./pages/misc/PocsoActPage";

type PageComponent = React.FC<{ onBack: () => void; onHome: () => void }>;

export const PAGE_REGISTRY: Record<string, PageComponent> = {
  "cncp-labour": ChildLabourPage,
  "cncp-marriage": ChildMarriagePage,
  "cncp-streets": ChildrenStreetPage,
  "cncp-begging": ChildrenFoundBeggingPage,
  "cncp-missing": MissingRunawayPage,
  "cncp-orphans": OrphansPage,
  "cncp-prostitution": ChildrenProstitutionPage,

  "cncp-stk-cwc": CwcPage,
  "cncp-stk-police": PolicePage,
  "cncp-stk-dcpu": DcpuPage,
  "cncp-stk-govsw": GovtSwPage,
  "cncp-stk-ngos": NgosPage,
  "cncp-stk-homes": HomesPage,
  "cncp-stk-parents": ParentsPage,

  "ccl-jjb": JjbPage,
  "ccl-police": CcwlPolicePage,
  "ccl-cwo": CwoPage,
  "ccl-govsw": CcwlGovtSwPage,
  "ccl-ngos": CcwlNgosPage,
  "ccl-homes": CcwlHomesPage,
  "ccl-parents": CcwlParentsPage,

  "cat-rights": ChildRightsPage,
  "cat-pocso": PocsoActPage,
};
