"use client";
import Loading from "@/app/loading";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useGetAdminByIdQuery } from "@/redux/features/admin/adminApi";
import { IAdmin } from "@/types";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import dayjs from "dayjs";
import Image from "next/image";

const { Meta } = Card;

type IDProps = {
  params: any;
};

const AdminDetails = ({ params }: IDProps) => {
  const { id } = params;
  const { data, isLoading } = useGetAdminByIdQuery(id);
  const adminData: IAdmin = data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div
        style={{
          marginLeft: 60,
          marginTop: 10,
        }}
      >
        <UMBreadCrumb
          items={[
            {
              label: `super_admin`,
              link: `/super_admin`,
            },
            {
              label: `manage-admin`,
              link: `/super_admin/manage-admin`,
            },
          ]}
        />
      </div>
      <ActionBar title="Admin Details" />
      <div>
        <Card
          style={{
            // width: 500,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            textAlign: "center",
          }}
          cover={
            adminData?.profileImage ? (
              <Image
                width={100}
                height={100}
                style={{
                  borderRadius: "50%",
                }}
                alt=""
                src={adminData.profileImage}
              />
            ) : (
              <Avatar
                size={100}
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            )
          }
        >
          <Meta
            title={`${adminData?.name?.firstName} ${
              adminData?.name?.middleName ? adminData?.name?.middleName : ""
            } ${adminData?.name?.lastName}`}
            description={adminData?.designation}
          />
          <div
            style={{
              margin: "10px 0",
            }}
          >
            <p>Email: {adminData.email}</p>
            <p>Contact No: {adminData.contactNo}</p>
            <p>Emergency Contact No:{adminData.emergencyContactNo}</p>
            <p>Blood Group: {adminData.bloodGroup}</p>
            <p>
              Date of Birth:{" "}
              {dayjs(adminData.dateOfBirth).format("MMM D, YYYY hh:mm A")}
            </p>
            <p>Gender: {adminData.gender}</p>
            <p>Present Address: {adminData.presentAddress}</p>
            <p>Permanent Address: {adminData.permanentAddress}</p>
            <p>Management Department: {data.managementDepartment.title}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDetails;
