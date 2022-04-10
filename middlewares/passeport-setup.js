const passport = require("passport");
const Users = require("../models/Users");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.secretOrPrivateKey,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const user = await Users.findOne({ _id: jwt_payload.id }).populate(
      "products"
    );

    user ? done(null, user) : done(null, false);
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });