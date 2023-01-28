import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineMinusSm } from "react-icons/hi";

import { languages, menuItems } from "../constants";
import * as Styled from "./web.styled";

const Web: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <Styled.Web>
      <Styled.Wrapper>
        <Link href="/home">
          <Image alt="Auto RAR" fill src="/images/logo/logo-dark.png" />
        </Link>
        <Styled.MenuItems>
          {menuItems.map((menuItem, index) => (
            <div key={index}>
              {menuItem.href ? (
                <Link href={menuItem.href}>{menuItem.text}</Link>
              ) : (
                <p>{menuItem.text}</p>
              )}
              {menuItem.subMenuItems && (
                <Styled.SubMenuItems>
                  {menuItem.subMenuItems.map((subMenuItem, index) => (
                    <Link key={index} href={subMenuItem.href}>
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
