"use client";
import ActionBar from "@/components/ui/ActionBar";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Col, Row, message } from "antd";
import { useCreateDepartmentMutation } from "@/redux/features/department/departmentApi";

const CreateDepartment = () => {
  const [createDepartment] = useCreateDepartmentMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating department...");
    try {
      console.log(data);
      if (data) {
        await createDepartment(data);
        message.success("Department created successfully");
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
              label: `department`,
              link: `/super_admin/department`,
            },
            {
              label: `create`,
              link: `/super_admin/department/create`,
            },
          ]}
        />
      </div>
      <ActionBar title="Create List" />
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              placeholder="Computer Science"
              name="title"
              label="Title"
            />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartment;
