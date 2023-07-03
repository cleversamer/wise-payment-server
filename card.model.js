const { model, Schema } = require("mongoose");

const cardSchema = new Schema(
  {
    number: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    exp_month: {
      type: String,
      required: true,
      trim: true,
    },
    exp_year: {
      type: String,
      required: true,
      trim: true,
    },
    cvv: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    // To not avoid empty object when creating the document
    minimize: false,
    // To automatically write creation/update timestamps
    // Note: the update timestamp will be updated automatically
    timestamps: true,
  }
);

const Card = model("Card", cardSchema);

module.exports = Card;
