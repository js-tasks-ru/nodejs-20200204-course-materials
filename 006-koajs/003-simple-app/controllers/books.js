const db = require('../db/data');


module.exports = {
  booksList: ctx => {
    ctx.body = db.map((book, id) => ({id, ...book}));
    ctx.status = 200;
  },
  bookById: ctx => {
    const {id} = ctx.params;
    const book = db[id];

    if (!book) {
      ctx.throw(404, 'Not found');
    }

    ctx.body = {id, ...book};
    ctx.status = 200;
  },

  createBook: ctx => {
    const book = ctx.request.body;
    const newLength = db.push(book);
    ctx.status = 201;
    ctx.body = {
      id: newLength - 1,
      ...book,
    }
  }
};
