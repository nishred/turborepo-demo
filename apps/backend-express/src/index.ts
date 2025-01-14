import express, { Request, Response } from "express";

import { personSchema } from "@repo/common/types";

const app = express();

app.get("/", (req: Request, res: Response) => {
  const person = {
    name: "cristiano ronaldo",
    age: 25,
  };

  const parsedPerson = personSchema.parse(person);

  res.json({
    ...parsedPerson,
  });
});

app.listen(3002);



