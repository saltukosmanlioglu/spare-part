import { GiMultipleTargets } from "react-icons/gi";
import { MdAssignmentTurnedIn, MdOutlineLocalActivity } from "react-icons/md";

export const purpose = {
  purposes: [
    {
      src: "/images/about/purpose/1.jpg",
      service: {
        child: <MdAssignmentTurnedIn size={52} />,
        description:
          "As autodepart family our mission is to provide quality, good price, complete and fast product service. ",
        title: "MISSION",
      },
    },
    {
      src: "/images/about/purpose/2.jpg",
      service: {
        child: <MdOutlineLocalActivity size={52} />,
        description:
          "Within the technological developments; it is to work in the supply of spare parts with an innovative team that keeps up with the world. ",
        title: "VISION",
      },
    },
    {
      src: "/images/about/purpose/3.jpg",
      service: {
        child: <GiMultipleTargets size={52} />,
        description:
          "Our aim is to provide superior and quality service to the world in the supply of automotive spare parts.",
        title: "GOAL",
      },
    },
  ],
};
