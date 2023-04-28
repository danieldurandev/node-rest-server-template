const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { query } = req.query;
  res.json({ msg: "get" });
};
const usuariosPost = (req, res = response) => {
  const { body } = req.body;
  res.json({ msg: "post" });
};
const usuariosPut = (req, res = response) => {
  const { params } = req.params;

  res.json({ msg: "put" });
};
const usuariosPath = (req, res = response) => {
  res.json({ msg: "path" });
};
const usuariosDelete = (req, res = response) => {
  res.json({ msg: "delete" });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPath,
  usuariosDelete,
};
