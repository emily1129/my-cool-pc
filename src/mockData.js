import Mock from "mockjs";

const mockData = Mock.mock({
  "categories|1-5": [
    {
      id: "@increment",
      name: "@title(3, 5)",
      icon: "@image('24x24', '#000', '#fff', 'icon')",
      limit: 4,
      "items|4-56": [
        {
          id: "@increment",
          title: "@title(8, 13)",
          "imgSrc|1": ["src/assets/cool-1.jpeg", "src/assets/item-6.jpeg"],
          price: "@integer(100, 30000)",
          isHotItem: "@boolean",
          尺寸: "@sentence(1, 5)",
          CPU: "@sentence(1, 2)",
          RAM: "@sentence(1, 3)",
          SSD: "@sentence(1, 2)",
          VGA: "@sentence(1, 4)",
          LAN: "@sentence(1, 3)",
          周邊: "@sentence(1, 2)",
          OS: "@sentence(1, 3)",
        },
      ],
    },
  ],
});

export default mockData.categories;
