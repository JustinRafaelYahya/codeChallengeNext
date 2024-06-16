import React, { useState } from "react";
import TeamsCardsTopAboutPage from "@/components/TeamsCardsTopAboutPage";
import TeamsCardsLow from "@/components/TeamsCardsLow";
import { TeamMemberDesc1 } from "@/data/TeamMemberDesc1";
import { TeamMemberDesc2 } from "@/data/TeamMemberDesc2";
import { TeamMemberDesc3 } from "@/data/TeamMemberDesc3";
import { TeamMemberDesc4 } from "@/data/TeamMemberDesc4";

export default function TeamsPageCards({ className }) {
  const cardStyle =
    "w-68 shadow-xl flex flex-col px-2 py-6 my-6 mx-4 rounded-lg hover:scale-105 ease-in-out hover:scale-105 ease-in-out duration-300";
  const [member1] = useState(TeamMemberDesc1);
  const [member2] = useState(TeamMemberDesc2);
  const [member3] = useState(TeamMemberDesc3);
  const [member4] = useState(TeamMemberDesc4);
  return (
    <div className={className}>
      <div className={cardStyle}>
        <TeamsCardsTopAboutPage />
        <TeamsCardsLow desc={member1} />
      </div>
      <div className={cardStyle}>
        <TeamsCardsTopAboutPage />
        <TeamsCardsLow desc={member2} />
      </div>
      <div className={cardStyle}>
        <TeamsCardsTopAboutPage />
        <TeamsCardsLow desc={member3} />
      </div>
      <div className={cardStyle}>
        <TeamsCardsTopAboutPage />
        <TeamsCardsLow desc={member4} />
      </div>
    </div>
  );
}
