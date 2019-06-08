import {Beach} from "../models/Beach";
import uuid = require("uuid");

export const mockBeaches: Beach[] = [
  {
    id: uuid.v4(),
    name: "Las Canteras",
    peopleCleaningToday: 3
  },
  {
    id: uuid.v4(),
    name: "El Confital",
    peopleCleaningToday: 6
  },
  {
    id: uuid.v4(),
    name: "San Cristobal",
    peopleCleaningToday: 0
  },
  {
    id: uuid.v4(),
    name: "La Laja",
    peopleCleaningToday: 8
  },
  {
    id: uuid.v4(),
    name: "Alcaravaneras",
    peopleCleaningToday: 3
  }
]
