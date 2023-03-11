import { v4 as uuidv4 } from "uuid";

const mocks = {
  Query() {
    return {
      tracks() {
        return [...new Array(9)];
      },
    };
  },
  Track() {
    return {
      id() {
        return uuidv4();
      },
      title() {
        return "Astro Kitty, Space Explorer";
      },
      author() {
        return {
          name: "Grumpy Cat",
          photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        };
      },
      thumbnail() {
        return "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg";
      },
      length() {
        return 1210;
      },
      modulesCount() {
        return 6;
      },
    };
  },
};

export default mocks;
