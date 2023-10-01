"use client";
import login from "@/assets/login.svg";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      if (data.id && data.password) {
        console.log(data);
        const res = await userLogin({
          ...data,
        }).unwrap();

        if (res?.accessToken) {
          storeUserInfo(res?.accessToken);
          router.push("/profile");
          message.success("Successfully logged In!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image width={500} src={login} alt="Login" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h3
          style={{
            margin: "15px 0",
          }}
        >
          Login to your Account
        </h3>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
