const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema/* (
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
); */

({
  lodgingType: { type: String, },

    rooms: { type: Number, default: null },
    typeOfRoom: { type: String, default: null },
    bathrooms: { type: Number, },
    typeOfBathrooms: { type: String,},
  
  city: { type: Boolean,  },
  country: { type: String,  },
  address: { type: String,  },
  numOfGuests: { type: Number, },
  CheckIn: { type: String, },
  CheckOut: { type: String, },
  services: 
    {
      wifi: { type: String, },
      ac: { type: String, },
      tv: { type: Boolean, },
      security: { type: Boolean, },
      cleaning: { type: Boolean, },
      parking: { type: Boolean,},
      laundry: { type: Boolean,},
      hotWater: { type: Boolean, },
      kitchen: { type: Boolean, },
      pool: { type: Boolean,},
      dining: { type: Boolean, },
      pets: { type: Boolean, },
    },
  description: { type: String,  },
  
  
})

module.exports = mongoose.model("User", UserSchema);