const db = require("./dbConfig");
const Sequelize = require("sequelize");
const { STRING, NUMBER, BOOLEAN, ENUM } = require("sequelize");
//YOUR CODE GOES HERE

// const seed = async (force = false) => {
//   try {
//     await db.sync(force);
//   }
// };

const Recipe = db.define("recipe", {
  name: {
    type: STRING,
    defaultValue: "cereal",
    allowNull: false,
  },
  cookTime: {
    type: NUMBER,
    minValue: 1,
    maxValue: 60,
  },
  vegan: {
    type: BOOLEAN,
  },
  foodGroup: {
    type: ENUM(["vegetable", "meat", "dairy", "grain", "fruit", "coffee"]),
  },
});

//--------------------
module.exports = Recipe;
