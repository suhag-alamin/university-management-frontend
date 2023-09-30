import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import React from "react";

const CreateFaculty = () => {
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
              label: `manage-faculty`,
              link: `/super_admin/manage-faculty`,
            },
          ]}
        />
      </div>
      <ActionBar title="Create Faculty" />
    </div>
  );
};

export default CreateFaculty;
