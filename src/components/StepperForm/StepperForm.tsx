"use client";
import React, { useEffect, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { FormProps, FormProvider, useForm } from "react-hook-form";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/navigation";

type FormConfig = {
  resolver?: any;
};

type Steps = {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
};

type StepsProps = {
  steps: Steps[];
  submitHandler: (el: any) => void;
  navigateLink?: string;
  resolver?: any;
};

const StepperForm = ({
  steps,
  submitHandler,
  navigateLink,
  resolver,
}: StepsProps) => {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage("step")
      ? Number(JSON.parse(getFromLocalStorage("step") as string).step)
      : 0
  );

  const formConfig: FormConfig = {};

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  useEffect(() => {
    setToLocalStorage(
      "step",
      JSON.stringify({
        step: current,
      })
    );
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setToLocalStorage(
      "step",
      JSON.stringify({
        step: 0,
      })
    );

    navigateLink && router.push(navigateLink);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
