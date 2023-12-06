import * as express from "express";
const app = express.default();

/* The server gets a request under HOST/upgrade/number/:number with any integer replacing :number. 
   The server then returns the doubled integer back.
*/
app.get("/upgrade/number/:number", (req, res) => {
  let number = Number.parseInt(req.params.number) * 2;
  res.send("" + number);
});

// The server is listening on port 8080
app.listen(8080, "0.0.0.0", () =>
  console.log("Server running on port 8080...")
);
