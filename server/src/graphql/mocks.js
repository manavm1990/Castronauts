const mocks = {
  Query() {
    return {
      indexTracks() {
        return [...new Array(6)];
      },
    };
  },
  Track: {
    id() {
      return "track_01";
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
  },
};

export default mocks;
