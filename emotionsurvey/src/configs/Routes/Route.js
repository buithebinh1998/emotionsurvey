import React from "react";

export const routers = [
  {
    exact: true,
    path: "/",
    container: React.lazy(() =>
      import("../../container/WelcomePage")
    )
  },
  {
    exact: true,
    path: "/gioithieu",
    container: React.lazy(() =>
      import("../../container/IntroducePage")
    )
  },
  {
    exact: true,
    path: "/thongtincanhan",
    container: React.lazy(() =>
      import("../../container/AboutYouPage")
    )
  },
];
