import React, { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { TbMailOpened } from "react-icons/tb";

import Button from "@/components/button";
import InfoCard from "@/components/info-card";
import MainLayout from "@/layout/main";
import emailService, { SendEmailRequest } from "@/services/send-email";

import TextArea from "./components/text-area";
import TextField from "./components/text-field";

import * as Styled from "./contact.styled";

const Contact: NextPage = () => {
  const [formData, setFormData] = useState<SendEmailRequest>({
    email: "",
    fullName: "",
    message: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      formData.fullName !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      emailService
        .sendEmail(formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <MainLayout
      breadcrumb={{
        data: [{ text: "Contact" }],
      }}
    >
      <Styled.InfoWrapper>
        <InfoCard
          icon={<HiDevicePhoneMobile color="#252531" size={40} />}
          description={
            <Link href="tel:+7 (111) 1234 56789">+7 (111) 1234 56789</Link>
          }
          title="Call Us"
        />
        <InfoCard
          icon={<TbMailOpened color="#252531" size={40} />}
          description={
            <Link href="mailto:contact@Archo.com">contact@Archo.com</Link>
          }
          title="Email Us"
        />
        <InfoCard
          icon={<MdLocationOn color="#252531" size={40} />}
          description={
            <Link href="/home" target="_blank">
              B17 Princess Road, London, Greater London NW18JR, United Kingdom
            </Link>
          }
          title="Address"
        />
      </Styled.InfoWrapper>
      <Styled.Wrapper>
        <div>
          <iframe
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
          />
        </div>
        <Styled.SendEmail>
          <h1>CONTACT US</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              textField={{
                name: "fullName",
                onChange: (e) => handleFieldChange(e),
                placeholder: "NAME - SURNAME",
                required: true,
                type: "text",
                value: formData.fullName,
              }}
            />
            <TextField
              textField={{
                name: "phoneNumber",
                onChange: (e) => handleFieldChange(e),
                placeholder: "PHONE NUMBER",
                required: true,
                type: "tel",
                value: formData.phoneNumber,
              }}
            />
            <TextField
              textField={{
                name: "email",
                onChange: (e) => handleFieldChange(e),
                placeholder: "EMAIL",
                required: true,
                type: "email",
                value: formData.email,
              }}
            />
            <TextArea
              textArea={{
                name: "message",
                onChange: (e) => handleFieldChange(e),
                placeholder: "MESSAGE",
                required: true,
                rows: 6,
                value: formData.message,
              }}
            />
            <Button text="SUBMIT" type="submit" />
          </form>
        </Styled.SendEmail>
      </Styled.Wrapper>
    </MainLayout>
  );
};

export default Contact;
