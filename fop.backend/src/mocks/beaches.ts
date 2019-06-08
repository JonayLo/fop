import {NearestBeach} from "../DTOs/NearestBeach";
import {Beach} from "../models/Beach";

export const mockBeaches: Beach[] = [
  {
    id: "fe8cb0eb-abe0-4788-8fa8-ceada70118f2",
    name: "Las Canteras"
  },
  {
    id: "284a7c3a-4ae8-442c-82aa-21cf4b0b90d0",
    name: "El Confital"
  },
  {
    id: "ff28a565-e145-409f-b1ef-2cdbf5a7bb93",
    name: "San Cristobal"
  },
  {
    id: "fa8bac9e-72d5-48cb-b465-c55926bcb9bb",
    name: "La Laja"
  },
  {
    id: "89b58c9a-1bf0-45af-b934-5976ff5a65d2",
    name: "Alcaravaneras"
  }
]

export const mockNearestBeaches: NearestBeach[] = [
  {
    ...mockBeaches[0],
    peopleCleaningToday: 3
  },
  {
    ...mockBeaches[1],
    peopleCleaningToday: 6
  },
  {
    ...mockBeaches[2],
    peopleCleaningToday: 0
  },
  {
    ...mockBeaches[3],
    peopleCleaningToday: 8
  },
  {
    ...mockBeaches[4],
    peopleCleaningToday: 3
  }
]
