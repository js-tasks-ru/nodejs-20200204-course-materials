const mongoose = require('mongoose');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
mongoose.plugin(beautifyUnique);
const {Schema} = mongoose;

const dbName = 'mongoose_indexes';

const url = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true});
mongoose.set('debug', true);

const userSchema = new Schema({
  name: {
    type: String,
    index: true,
  },
  aliases: [
    {type: String}
  ],
  login: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: 'email is required',
    match: /.*@.*/,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  }
}, {});

userSchema.statics.login = function (login, password) {
  // this === User
  return this.findOne({login, password});
};

userSchema.methods.someMethod = function() {
  // this === instance of User
};

userSchema.index({login: 1, password: -1});

const User = mongoose.model('user', userSchema);

(async function () {
  try {
    await User.deleteMany({});

    const paul = new User({
      name: 'Paul',
      email: 'paul@atredias.com',
      login: 'muaddib',
      dateOfBirth: new Date('2000-01-01'),
      password: 'alia',
      aliases: ["Usul", "Muad'Dib", "The Preacher"],
    });

    await paul.save();

    const loggedUser = await User.login('muaddib', 'alia');
    loggedUser.someMethod();
    console.log(loggedUser);

    loggedUser.aliases[0] = 'test';
    await loggedUser.save()

  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect()
  }
})();

