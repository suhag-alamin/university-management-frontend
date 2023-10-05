"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

import {
  useGetDepartmentByIdQuery,
  useUpdateDepartmentMutation,
} from "@/redux/features/department/departmentApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const EditDepartment = ({ params }: IDProps) => {
  const { id } = params;

  const router = useRouter();

  const { data, isLoading } = useGetDepartmentByIdQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");
    try {
      if (values.title && id) {
        await updateDepartment({ id, body: values });
        message.success("Department updated successfully");
        router.push("/super_admin/department");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    //@ts-ignore
    title: data?.title || "",
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />

      <ActionBar title="Update Department" />
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartment;
