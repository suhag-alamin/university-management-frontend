import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateDepartment = () => {
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
      <ActionBar title="Create Department" />
    </div>
  );
};

export default CreateDepartment;
