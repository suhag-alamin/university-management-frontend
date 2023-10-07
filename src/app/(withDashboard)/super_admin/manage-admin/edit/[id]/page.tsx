"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import {
  useGetAdminByIdQuery,
  useUpdateAdminMutation,
} from "@/redux/features/admin/adminApi";
import { useGetDepartmentsQuery } from "@/redux/features/department/departmentApi";
import { IAdmin, IDepartment } from "@/types";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const EditAdmin = ({ params }: IDProps) => {
  const { id } = params;

  const { data } = useGetDepartmentsQuery({ limit: 100, page: 1 });
  const { data: adminData } = useGetAdminByIdQuery(id);
  // @ts-ignore
  const departments: IDepartment[] = data?.departments;

  const departmentOptions =
    departments &&
    departments?.map((dep) => {
      return {
        label: dep.title,
        value: dep.id,
      };
    });

  const [updateAdmin, { data: adminDatas }] = useUpdateAdminMutation();

  const router = useRouter();

  const onSubmit = async (values: IAdmin) => {
    message.loading("Updating.....");

    try {
      if (values && id) {
        await updateAdmin({
          id,
          body: values,
        });
        message.success("Admin updated successfully!");
        router.push("/super_admin/manage-admin");
      }
    } catch (err: any) {
      message.error(err.message || "Failed to update");
    }
  };

  const defaultValues = {
    name: {
      firstName: adminData?.name.firstName,
      middleName: adminData?.name.middleName,
      lastName: adminData?.name.lastName,
    },
    email: adminData?.email,
    gender: adminData?.gender,
    managementDepartment: adminData?.managementDepartment?.id,
    contactNo: adminData?.contactNo,
    emergencyContactNo: adminData?.emergencyContactNo,
    dateOfBirth: adminData?.dateOfBirth,
    bloodGroup: adminData?.bloodGroup,
    designation: adminData?.designation,
    presentAddress: adminData?.presentAddress,
    permanentAddress: adminData?.permanentAddress,
  };
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
      <ActionBar title="Create Admin" />
      <div>
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Admin Information
            </p>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="name.firstName"
                  size="large"
                  label="First Name"
                  placeholder="John"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="name.middleName"
                  size="large"
                  label="Middle Name"
                  placeholder="Marcelo"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="name.lastName"
                  size="large"
                  label="Last Name"
                  placeholder="Doe"
                />
              </Col>
              {/* <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                  placeholder="******"
                />
              </Col> */}
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="gender"
                  size="large"
                  options={genderOptions}
                  label="Gender"
                  placeholder="Select Gender"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="managementDepartment"
                  size="large"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select Department"
                />
              </Col>
              {/* <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage name="file" />
              </Col> */}
            </Row>
          </div>
          {/* basic info */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Basic Information
            </p>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email"
                  placeholder="john@example.com"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="contactNo"
                  size="large"
                  label="Contact Number"
                  placeholder="246467618"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="emergencyContactNo"
                  size="large"
                  label="Emergency Contact Number"
                  placeholder="1565489845"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  name="dateOfBirth"
                  size="large"
                  label="Date of Birth"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="bloodGroup"
                  size="large"
                  options={bloodGroupOptions}
                  label="Blood Group"
                  placeholder="Select Blood Group"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="designation"
                  size="large"
                  label="Designation"
                  placeholder="HR"
                />
              </Col>
              <Col
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea
                  rows={6}
                  name="presentAddress"
                  label="Present Address"
                />
              </Col>
              <Col
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea
                  rows={6}
                  name="permanentAddress"
                  label="Permanent Address"
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditAdmin;
