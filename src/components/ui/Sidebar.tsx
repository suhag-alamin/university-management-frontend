"use client";
import { SidebarItems } from "@/constants/SidebarItems";
import { USER_ROLE } from "@/constants/role";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Grid, Tag } from "antd";
import { getUserInfo } from "@/services/auth.service";

const { useBreakpoint } = Grid;

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

  const screens = useBreakpoint();

  return (
    <Sider
      collapsible
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        // overflow: screens.lg ? "auto" : "inherit",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div>
        <h3
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          University Management
        </h3>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
