import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsTelephone } from "react-icons/bs";
import { IoLocationOutline, IoLogoInstagram } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { TbSend } from "react-icons/tb";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

import { useLanguage } from "@/utils/hooks";

import { footerEn, footerTr } from "./lang";
import * as Styled from "./footer.styled";

const Footer: React.FunctionComponent = () => {
  const { lang } = useLanguage(footerTr, footerEn);

  const ContactUs = () => {
    return (
      <div>
        <h3>{lang.contactUs}</h3>
        <Styled.ContactUs>
          <IoLocationOutline color="#fff" size={30} />
          <div>
            <h6>{lang.address}</h6>
            <p>504 White St . Dawsonville, GA 30534 , New York</p>
          </div>
        </Styled.ContactUs>
        <Styled.ContactUs>
          <GoMail color="#fff" size={30} />
          <div>
            <h6>{lang.emailUs}</h6>
            <p>support@gmail.com</p>
          </div>
        </Styled.ContactUs>
        <Styled.ContactUs>
          <BsTelephone color="#fff" size={30} />
          <div>
            <h6>{lang.callUs}</h6>
            <p>+87986451666</p>
          </div>
        </Styled.ContactUs>
      </div>
    );
  };

  const RecentNews = () => {
    return (
      <div>
        <h3>Recent News</h3>
        <Styled.News>
          <Image
            alt="News 1"
            height={55}
            src="/images/layout/footer/news1.jpeg"
            width={82}
          />
          <div>
            <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
            <b>14 Jan 2022</b>
          </div>
        </Styled.News>
        <Styled.News>
          <Image
            alt="News 2"
            height={55}
            src="/images/layout/footer/news2.jpeg"
            width={82}
          />
          <div>
            <p>The Start-Up Ultimate Guide to Make Your WordPress Journal.</p>
            <b>14 Jan 2022</b>
          </div>
        </Styled.News>
        <Styled.SendMail>
          <input placeholder={lang.placeholder} type="email" />
          <button>
            <TbSend color="#000" size={20} />
          </button>
        </Styled.SendMail>
      </div>
    );
  };

  const Logo = () => {
    return (
      <div>
        <Image alt="Logo" height={23} width={100} src="/images/logo/logo.png" />
        <Styled.SocialMedia>
          <Link href="/home">
            <BsLinkedin color="#fff" size={18} />
          </Link>
          <Link href="/home">
            <TiSocialFacebook color="#fff" size={18} />
          </Link>
          <Link href="/home">
            <TiSocialTwitter color="#fff" size={18} />
          </Link>
          <Link href="/home">
            <IoLogoInstagram color="#fff" size={18} />
          </Link>
          <Link href="/home">
            <TiSocialYoutube color="#fff" size={18} />
          </Link>
        </Styled.SocialMedia>
        <Styled.CopyRight>
          <p>
            &copy; 2023, MADE WITH PASSION BY{" "}
            <span>
              <Link href="https://www.milabilisim.com.tr/home" target="_blank">
                MILABILISIM
              </Link>
            </span>
          </p>
        </Styled.CopyRight>
      </div>
    );
  };

  return (
    <Styled.Footer>
      <Styled.Containter>
        <Styled.Wrapper>
          <ContactUs />
          <RecentNews />
          <Logo />
        </Styled.Wrapper>
      </Styled.Containter>
    </Styled.Footer>
  );
};

export default Footer;
