import { GiMultipleTargets } from "react-icons/gi";
import { MdAssignmentTurnedIn, MdOutlineLocalActivity } from "react-icons/md";

export const purpose = {
  purposes: [
    {
      src: "/images/about/purpose/1.jpg",
      service: {
        child: <MdAssignmentTurnedIn size={52} />,
        description:
          "AutoDePart ailesi olarak kaliteli, iyi fiyat, eksiksiz ve hızlı ürün tedariği sunmaktır.",
        title: "MİSYON",
      },
    },
    {
      src: "/images/about/purpose/2.jpg",
      service: {
        child: <MdOutlineLocalActivity size={52} />,
        description:
          "Teknolojik gelişmeler çerçevesinde yenilikçi dünyaya ayak uyduran ekip ile birlikte yedek parça tedariğinde çalışmalar gerçekleştirmek.",
        title: "VİZYON",
      },
    },
    {
      src: "/images/about/purpose/3.jpg",
      service: {
        child: <GiMultipleTargets size={52} />,
        description:
          "Otomotik yedek parça sektöründe tüm dünyaya üstün ve kaliteli sunmak",
        title: "HEDEF",
      },
    },
  ],
};
