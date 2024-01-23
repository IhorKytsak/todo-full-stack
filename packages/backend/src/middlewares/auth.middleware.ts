import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions } from 'passport-jwt';
import { errorMassages } from '../consts/error-massage.const';

import { User } from '../entities/User.entity';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const jwtStrategy = new JwtStrategy(options, async (jwtPayload: User, done) => {
  const user = await User.findOneBy({ id: jwtPayload.id });

  if (!user) {
    return done(new Error(errorMassages.UNATHORIZED));
  }

  done(null, user);
});

passport.use('jwt', jwtStrategy);

export const authRequired = passport.authenticate(jwtStrategy, { session: false });
