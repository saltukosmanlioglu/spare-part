export const menu = {
  menuItems: [
    {
      href: "/home",
      text: "HOMEPAGE",
    },
    {
      subMenuItems: [
        {
          href: "/about/us",
          text: "Auto De Part",
        },
        // {
        //   href: "/about/our-team",
        //   text: "Our Team",
        // },
      ],
      text: "ABOUT US",
    },
    {
      subMenuItems: [
        {
          href: {
            pathname: "/our-solution-partners",
            query: {
              index: 1,
            },
          },
          text: "AFTER MARKET",
        },
        {
          href: {
            pathname: "/our-solution-partners",
            query: {
              index: 2,
            },
          },
          text: "OEM",
        },
      ],
      text: "OUR SOLUTION PARTNERS",
    },
    {
      subMenuItems: [
        {
          href: "/our-products",
          text: "Bodywork",
        },
        {
          href: "/our-products",
          text: "Engine",
        },
        {
          href: "/our-products",
          text: "Electricity",
        },
        {
          href: "/our-products",
          text: "Suspension",
        },
        {
          href: "/our-products",
          text: "Filters",
        },
        {
          href: "/our-products",
          text: "Brake System",
        },
        {
          href: "/our-products",
          text: "Gearbox",
        },
        {
          href: "/our-products",
          text: "Oils",
        },
        {
          href: "/our-products",
          text: "Exhaust",
        },
        {
          href: "/our-products",
          text: "Differential",
        },
        {
          href: "/our-products",
          text: "Auto Care Products",
        },
      ],
      text: "OUR PRODUCTS",
    },
    {
      href: "/contact",
      text: "CONTACT",
    },
  ],
};
