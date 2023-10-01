import * as yup from "yup";

export const studentSchema = yup.object().shape({
  password: yup.string().optional(),

  student: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      middleName: yup.string().optional(),
    }),
    gender: yup.string().required("Gender is required"),
    dateOfBirth: yup.string().required("Date of birth is required"),
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
    academicSemester: yup.string().required("Academic semester is required"),
    academicDepartment: yup
      .string()
      .required("Academic department is required"),
    academicFaculty: yup.string().required("Academic faculty is required"),
    guardian: yup.object().shape({
      fatherName: yup.string().required("Father name is required"),
      fatherOccupation: yup.string().required("Father occupation is required"),
      fatherContactNo: yup
        .string()
        .required("Father contact number is required"),
      motherName: yup.string().required("Mother name is required"),
      motherOccupation: yup.string().required("Mother occupation is required"),
      motherContactNo: yup
        .string()
        .required("Mother contact number is required"),
      address: yup.string().required("Guardian address is required"),
    }),
    localGuardian: yup.object().shape({
      name: yup.string().required("Local guardian name is required"),
      occupation: yup
        .string()
        .required("Local guardian occupation is required"),
      contactNo: yup
        .string()
        .required("Local guardian contact number is required"),
      address: yup.string().required("Local guardian address is required"),
    }),
    profileImage: yup.string().optional(),
  }),
});
