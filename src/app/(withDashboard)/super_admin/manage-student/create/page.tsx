import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateStudent = () => {
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
              label: `manage-student`,
              link: `/super_admin/manage-student`,
            },
          ]}
        />
      </div>
      <ActionBar title="Create Student" />
    </div>
  );
};

export default CreateStudent;
