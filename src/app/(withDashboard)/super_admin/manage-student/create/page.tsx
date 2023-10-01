"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { studentSchema } from "@/schemas/student";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateStudent = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
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
              label: `manage-student`,
              link: `/super_admin/manage-student`,
            },
          ]}
        />
      </div>
      <ActionBar title="Create Student" />
      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        resolver={yupResolver(studentSchema)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudent;
