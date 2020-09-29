module.exports = {
  user: (app, req, res) => {
    req.assert("name", "O nome é obrigatório").notEmpty();
    req.assert("email", "O email é inválido").notEmpty().isEmail();

    const errors = req.validationErrors();

    if (errors) {
      app.utils.error.send(error, req, res);
      return false;
    } else {
      return true;
    }
  },
};
