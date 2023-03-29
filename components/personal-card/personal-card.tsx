import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImFacebook, ImLinkedin2, ImTwitter } from "react-icons/im";

import { PersonalCardProps } from "./types";
import * as Styled from "./personal-card.styled";

const PersonalCard: React.FunctionComponent<PersonalCardProps> = ({
  image,
  name,
  profession,
  socialMedia,
}) => {
  return (
    <Styled.PersonalCard>
      <div>
        <Image alt="" fill src={image} />
        <Styled.Hover>
          <div>
            <div>
              <Link href={socialMedia.linkedin} target="_blank">
                <ImLinkedin2 color="#b19777" size={16} />
              </Link>
            </div>
          </div>
        </Styled.Hover>
      </div>
      <div>
        <b>{name}</b>
        <p>{profession}</p>
      </div>
    </Styled.PersonalCard>
  );
};

export default PersonalCard;
