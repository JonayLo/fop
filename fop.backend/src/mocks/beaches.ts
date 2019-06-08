import {Beach} from "../models/Beach";
import uuid = require("uuid");

export const mockBeaches: Beach[] = [
  {
    id: uuid.v4(),
    name: "Las Canteras",
    peopleCleaningToday: 3
  }
]