import { GiMultipleTargets } from "react-icons/gi";
import { MdAssignmentTurnedIn, MdOutlineLocalActivity } from "react-icons/md";

export const purpose = {
  purposes: [
    {
      src: "/images/about/purpose/1.jpg",
      service: {
        child: <MdAssignmentTurnedIn size={52} />,
        description:
          "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat. Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
        title: "MISSION",
      },
    },
    {
      src: "/images/about/purpose/2.jpg",
      service: {
        child: <MdOutlineLocalActivity size={52} />,
        description:
          "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat. Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
        title: "VISION",
      },
    },
    {
      src: "/images/about/purpose/3.jpg",
      service: {
        child: <GiMultipleTargets size={52} />,
        description:
          "Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat. Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat.",
        title: "TARGET",
      },
    },
  ],
};
