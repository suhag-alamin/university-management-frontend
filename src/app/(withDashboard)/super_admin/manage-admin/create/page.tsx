"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useCreateAdminWithFormDataMutation } from "@/redux/features/admin/adminApi";
import { useGetDepartmentsQuery } from "@/redux/features/department/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { IDepartment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateAdmin = () => {
  const { data, isLoading } = useGetDepartmentsQuery({ limit: 100, page: 1 });
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

  const [createAdmin, { data: adminData }] =
    useCreateAdminWithFormDataMutation();

  const router = useRouter();

  const onSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    try {
      if (formData) {
        message.loading("Creating...");
        await createAdmin(formData);
        message.success("Admin Created successfully!");
        router.push("/super_admin/manage-admin");
      }
    } catch (err: any) {
      message.error(err.message);
    }
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
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
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
                  name="admin.name.firstName"
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
                  name="admin.name.middleName"
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
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                  placeholder="Doe"
                />
              </Col>
              <Col
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
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="admin.gender"
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
                  name="admin.managementDepartment"
                  size="large"
                  options={departmentOptions}
                  label="Department"
                  placeholder="Select Department"
                />
              </Col>
              <Col
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <UploadImage name="file" />
              </Col>
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
                  name="admin.email"
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
                  name="admin.contactNo"
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
                  name="admin.emergencyContactNo"
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
                  name="admin.dateOfBirth"
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
                  name="admin.bloodGroup"
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
                  name="admin.designation"
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
                  name="admin.presentAddress"
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
                  name="admin.permanentAddress"
                  label="Permanent Address"
                />
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdmin;
