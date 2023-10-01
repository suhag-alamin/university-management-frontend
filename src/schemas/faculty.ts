import * as yup from "yup";

export const facultySchema = yup.object().shape({
  password: yup.string().optional(),

  faculty: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      middleName: yup.string().optional(),
    }),
    gender: yup.string().required("Gender is required"),
    dateOfBirth: yup.date().required("Date of birth is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    contactNo: yup.string().required("Contact number is required"),
    emergencyContactNo: yup
      .string()
      .required("Emergency contact number is required"),
    bloodGroup: yup.string().optional(),
    presentAddress: yup.string().required("Present address is required"),
    permanentAddress: yup.string().required("Permanent address is required"),
    academicDepartment: yup
      .string()
      .required("Academic department is required"),
    academicFaculty: yup.string().required("Academic faculty is required"),
    designation: yup.string().required("Designation is required"),
    profileImage: yup.string().optional(),
  }),
});
