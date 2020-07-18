import { RouteProps } from "react-router";
import React from "react";

interface ILayoutProps {
  location: RouteProps["location"];
  children: RouteProps["children"];
}

const MainLayout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  return <div>{props.children}</div>;
};
export default MainLayout