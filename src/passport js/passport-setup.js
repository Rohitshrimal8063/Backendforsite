const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2')

passport.serializeUser(function(user, done) {
    /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID : "755874457447-q94mqiipdeetg5ocs0bundkrfvn05459.apps.googleusercontent.com",
    clientSecret : "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",
    callbackURL :  "https://foxorg-app.herokuapp.com/google/callback",
    passReqToCallback : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    console.log(profile)
    return done(null, profile);
  }
));