const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🔥 Kael'Thar está despierto, Sombra. Núcleo activo.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
