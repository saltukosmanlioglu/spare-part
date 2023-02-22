import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineMinusSm } from "react-icons/hi";

import { useLanguage } from "@/utils/hooks";

import { languages } from "../constants";
import { menuEn, menuTr } from "../lang";
import * as Styled from "./web.styled";

const Web: React.FunctionComponent = () => {
  const router = useRouter();

  const { lang } = useLanguage(menuTr, menuEn);

  return (
    <Styled.Web>
      <Styled.Wrapper>
        <Link href="/home">
          <Image alt="Auto De Part" fill src="/images/logo/logo-dark.png" />
        </Link>
        <Styled.MenuItems>
          {lang.menuItems.map((item, index) => (
            <div key={index}>
              {item.href ? (
                <Link href={item.href}>{item.text}</Link>
              ) : (
                <p>{item.text}</p>
              )}
              {item.subMenuItems && (
                <Styled.SubMenuItems>
                  {item.subMenuItems.map((subMenuItem, subMenuIndex) => (
                    <Link key={subMenuIndex} href={subMenuItem.href}>
                      <HiOutlineMinusSm color="#b19777" />
                      <p>{subMenuItem.text}</p>
                    </Link>
                  ))}
                </Styled.SubMenuItems>
              )}
            </div>
          ))}
        </Styled.MenuItems>
        <Styled.Lang>
          <div>
            <p>{router.locale === "tr" ? "TR" : "EN"}</p>
            <TfiWorld color="#000" size={16} />
          </div>
          <div>
            {languages
              .filter((l) => l.text !== router.locale?.toUpperCase())
              .map((language, index) => (
                <Link
                  key={index}
                  href={router.asPath}
                  locale={language.text.toLowerCase()}
                >
                  {language.text}
                </Link>
              ))}
          </div>
        </Styled.Lang>
      </Styled.Wrapper>
    </Styled.Web>
  );
};

export default Web;
