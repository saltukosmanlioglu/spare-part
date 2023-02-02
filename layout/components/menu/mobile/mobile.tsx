import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

import { useLanguage } from "@/utils/hooks";

import { menuEn, menuTr } from "../lang";
import * as Styled from "./mobile.styled";

const Mobile: React.FunctionComponent = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isSubMenuActive, setIsSubMenuActive] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>();

  const router = useRouter();

  const { lang } = useLanguage(menuTr, menuEn);

  const Menu = () => {
    const onClick = (item: any, index: number) => {
      if (item.href) {
        router.push(item.href);
      } else {
        setIsSubMenuActive(true);
        setActiveIndex(index);
      }
    };

    return isActive ? (
      <Styled.Menu isActive>
        {lang.menuItems.map((item, index) => (
          <div key={index}>
            <button onClick={() => onClick(item, index)}>
              <p>{item.text}</p>
              {item.subMenuItems && <BsPlus color="#000" size={18} />}
            </button>
            {activeIndex === index && isSubMenuActive ? (
              <div>
                {item.subMenuItems?.map((subMenuItem, subMenuIndex) => (
                  <button
                    key={subMenuIndex}
                    onClick={() => router.push(subMenuItem.href)}
                  >
                    <AiOutlineMinus color="#000" size={8} />
                    <p> {subMenuItem.text}</p>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ))}
        <Styled.Lang>
          <Link href={router.asPath} locale="tr">
            TR
          </Link>
          <span>|</span>
          <Link href={router.asPath} locale="en">
            EN
          </Link>
        </Styled.Lang>
      </Styled.Menu>
    ) : null;
  };

  return (
    <Styled.Mobile>
      <Styled.Wrapper>
        <Link href="/home">
          <Image alt="Auto RAR" fill src="/images/logo/logo-dark.png" />
        </Link>
        <button onClick={() => setIsActive(!isActive)}>
          <HiMenu color="#000" size={32} />
        </button>
      </Styled.Wrapper>
      <Menu />
    </Styled.Mobile>
  );
};

export default Mobile;
