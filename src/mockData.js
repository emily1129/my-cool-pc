import Mock from "mockjs";
const brands = ["LENOVO", "ACER", "微星", "華碩", "雷蛇", "DELL", "技嘉", "威剛", "三星"];

Mock.Random.extend({
  brand: function() {
    return this.pick(brands);
  }
});
const mockData = Mock.mock({
  "categories|1-20": [
    {
      id: "@increment",
      name: "@title(1, 3)",
      icon: "@image('24x24', '#000', '#fff', 'icon')",
      limit: 4,
      "items|4-56": [
        {
          id: "@increment",
          title: "@title(8, 13)",
          "imgSrc|1": ["src/assets/cool-1.jpeg", "src/assets/item-6.jpeg"],
          price: "@integer(100, 20000)",
          isHotItem: "@boolean",
            size: "@sentence(1, 5)",
            cpu: "@sentence(1, 2)",
            ram: "@sentence(1, 3)",
            ssd: "@sentence(1, 2)",
            vga: "@sentence(1, 4)",
            lan: "@sentence(1, 3)",
            other: "@string(1, 2)",
            os: "@sentence(1, 3)",
            brand: "@brand"
          }
      ],
    },
  ],
});

Mock.Random.extend({
  brand: function() {
    return this.pick(brands);
  }
});

export default mockData.categories;
