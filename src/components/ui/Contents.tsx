"use client";
import { Layout } from "antd";
import Header from "./Header";
import UMBreadCrumb from "./UMBreadCrumb";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <div
        style={{
          marginLeft: 60,
          marginTop: 10,
        }}
      >
        <UMBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `${base}`,
            },
            {
              label: `student`,
              link: `${base}/student`,
            },
          ]}
        />
      </div>
      <div
        style={{
          padding: 20,
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
