import React, { useState } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";
import { TbMailOpened } from "react-icons/tb";

import Button from "@/components/button";
import InfoCard from "@/components/info-card";
import emailService, { SendEmailRequest } from "@/services/send-email";
import { useLanguage } from "@/utils/hooks";

import TextArea from "./components/text-area";
import TextField from "./components/text-field";

import { contactEn, contactTr } from "./lang";
import * as Styled from "./contact.styled";

const DynamicMainLayout = dynamic(() => import("@/layout/main"));

const Contact: NextPage = () => {
  const [formData, setFormData] = useState<SendEmailRequest>({
    email: "",
    fullName: "",
    message: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { lang } = useLanguage(contactTr, contactEn);

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
    <DynamicMainLayout
      breadcrumb={{
        data: [{ text: lang.breadcrumbTitle }],
        image: "/images/layout/breadcrumb/1.jpg",
      }}
    >
      <Styled.Wrapper>
        <div>
          <InfoCard
            icon={<HiDevicePhoneMobile color="#252531" size={40} />}
            description={
              <Link href="tel:+7 (111) 1234 56789">+7 (111) 1234 56789</Link>
            }
            title={lang.callUs}
          />
          <InfoCard
            icon={<TbMailOpened color="#252531" size={40} />}
            description={
              <Link href="mailto:info@autodepart.com">info@autodepart.com</Link>
            }
            title={lang.emailUs}
          />
          <InfoCard
            icon={<MdLocationOn color="#252531" size={40} />}
            description={
              <Link
                href="https://www.google.com/maps/place/Atalar,+Kanun+Sk.+No:1,+34862+Kartal%2F%C4%B0stanbul/data=!4m2!3m1!1s0x14cac477b84e017d:0xe9cea68d9c2b41df?sa=X&ved=2ahUKEwins6DztuX9AhVrRPEDHcqYC1IQ8gF6BAgIEAI"
                target="_blank"
              >
                Atalar Mahallesi, Kanun Sokak, No: 1, Kartal / İstanbul 34862
              </Link>
            }
            title={lang.address}
          />
        </div>
        <Styled.SendEmail>
          <h1>{lang.contactUs}</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              textField={{
                name: "fullName",
                onChange: (e) => handleFieldChange(e),
                placeholder: lang.fullName,
                required: true,
                type: "text",
                value: formData.fullName,
              }}
            />
            <TextField
              textField={{
                name: "phoneNumber",
                onChange: (e) => handleFieldChange(e),
                placeholder: lang.phoneNumber,
                required: true,
                type: "tel",
                value: formData.phoneNumber,
              }}
            />
            <TextField
              textField={{
                name: "email",
                onChange: (e) => handleFieldChange(e),
                placeholder: lang.email,
                required: true,
                type: "email",
                value: formData.email,
              }}
            />
            <TextArea
              textArea={{
                name: "message",
                onChange: (e) => handleFieldChange(e),
                placeholder: lang.message,
                required: true,
                rows: 6,
                value: formData.message,
              }}
            />
            <Button
              isLoading={isLoading}
              text={lang.submitText}
              type="submit"
            />
          </form>
        </Styled.SendEmail>
      </Styled.Wrapper>
      <Styled.Map>
        <iframe
          height={400}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
        />
      </Styled.Map>
    </DynamicMainLayout>
  );
};

export default Contact;
