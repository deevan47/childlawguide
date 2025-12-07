export const ROUTE_ALIASES: Record<string, string> = {
  "cncp-labour": "child-labour",
  "cncp-marriage": "child-marriage",
  "cncp-streets": "children-street-situations",
  "cncp-begging": "children-found-begging",
  "cncp-missing": "missing-runaway-children",
  "cncp-orphans": "orphans",
  "cncp-prostitution": "children-found-in-prostitution",

  "cncp-stk-cwc": "stakeholders/cwc",
  "cncp-stk-police": "stakeholders/police-officers",
  "cncp-stk-dcpu": "stakeholders/dcpu",
  "cncp-stk-govsw": "stakeholders/govt-social-workers",
  "cncp-stk-ngos": "stakeholders/ngos",
  "cncp-stk-homes": "stakeholders/homes-for-children",
  "cncp-stk-parents": "stakeholders/parents",

  "ccl-jjb": "ccwl/jjb-members",
  "ccl-police": "ccwl/police-officers",
  "ccl-cwo": "ccwl/child-welfare-officer",
  "ccl-govsw": "ccwl/govt-social-workers",
  "ccl-ngos": "ccwl/ngos",
  "ccl-homes": "ccwl/homes-for-children",
  "ccl-parents": "ccwl/parents",

  "cat-rights": "child-rights",
  "cat-pocso": "pocso-act",

  // allow canonical -> canonical (no-op)
  "child-labour": "child-labour",
  "child-marriage": "child-marriage",
  "children-street-situations": "children-street-situations",
  "children-found-begging": "children-found-begging",
  "missing-runaway-children": "missing-runaway-children",
  orphans: "orphans",
  "children-found-in-prostitution": "children-found-in-prostitution",

  "stakeholders/cwc": "stakeholders/cwc",
  "stakeholders/police-officers": "stakeholders/police-officers",
  "stakeholders/dcpu": "stakeholders/dcpu",
  "stakeholders/govt-social-workers": "stakeholders/govt-social-workers",
  "stakeholders/ngos": "stakeholders/ngos",
  "stakeholders/homes-for-children": "stakeholders/homes-for-children",
  "stakeholders/parents": "stakeholders/parents",

  "ccwl/jjb-members": "ccwl/jjb-members",
  "ccwl/police-officers": "ccwl/police-officers",
  "ccwl/child-welfare-officer": "ccwl/child-welfare-officer",
  "ccwl/govt-social-workers": "ccwl/govt-social-workers",
  "ccwl/ngos": "ccwl/ngos",
  "ccwl/homes-for-children": "ccwl/homes-for-children",
  "ccwl/parents": "ccwl/parents",

  "child-rights": "child-rights",
  "pocso-act": "pocso-act",
  map: "map",
  "": "",
};

export function normalizeRoute(id: string | undefined | null): string {
  if (!id) return "";
  const key = id.trim();
  return ROUTE_ALIASES[key] || key;
}
