import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required("Password is required"),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      middleName: yup.string().required("Middle name is required"),
      lastName: yup.string().required("Last name is required"),
    }),
    email: yup.string().email().required("Email is required"),
    dateOfBirth: yup.string().required("Date of Birth is required"),

    gender: yup.string().required("Gender is required"),

    bloodGroup: yup.string().optional(),

    contactNo: yup.string().required("Contact number is required"),

    emergencyContactNo: yup
      .string()
      .required("Emergency contact number is required"),

    presentAddress: yup.string().required("Present address is required"),

    permanentAddress: yup.string().required("Permanent address is required"),

    managementDepartment: yup
      .string()
      .required("Management department is required"),

    designation: yup.string().required("Designation is required"),

    profileImage: yup.string().optional(),
  }),
});
