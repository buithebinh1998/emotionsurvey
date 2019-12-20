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
  {
    exact: true,
    path: "/part1",
    container: React.lazy(() =>
      import("../../container/Part1Page")
    )
  },
  {
    exact: true,
    path: "/part2",
    container: React.lazy(() =>
      import("../../container/Part2Page")
    )
  },
  {
    exact: true,
    path: "/part3",
    container: React.lazy(() =>
      import("../../container/Part3Page")
    )
  },
  {
    exact: true,
    path: "/part4",
    container: React.lazy(() =>
      import("../../container/Part4Page")
    )
  },
  {
    exact: true,
    path: "/part5",
    container: React.lazy(() =>
      import("../../container/Part5Page")
    )
  },
  {
    exact: true,
    path: "/part6",
    container: React.lazy(() =>
      import("../../container/Part6Page")
    )
  },
  {
    exact: true,
    path: "/part7",
    container: React.lazy(() =>
      import("../../container/Part7Page")
    )
  },
];
