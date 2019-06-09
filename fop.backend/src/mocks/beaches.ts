import {NearestBeach} from "../DTOs/NearestBeach";
import {Beach} from "../models/Beach";

export const mockBeaches: Beach[] = [
  {
    id: "fe8cb0eb-abe0-4788-8fa8-ceada70118f2",
    name: "Las Canteras",
    smallImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/playaLasCanteras_small.jpg",
    largeImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/las_canteras_big.png"
  },
  {
    id: "284a7c3a-4ae8-442c-82aa-21cf4b0b90d0",
    name: "El Confital",
    smallImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/playaConfital_small.jpg",
    largeImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/elConfital_big.png"

  },
  {
    id: "ff28a565-e145-409f-b1ef-2cdbf5a7bb93",
    name: "San Cristobal",
    smallImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/playaSanCristobal_small.jpg",
    largeImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/sanCristobal_big.png"

  },
  {
    id: "fa8bac9e-72d5-48cb-b465-c55926bcb9bb",
    name: "La Laja",
    smallImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/playaLaLaja_small.jpg",
    largeImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/laLaja_big.png"

  },
  {
    id: "89b58c9a-1bf0-45af-b934-5976ff5a65d2",
    name: "Alcaravaneras",
    smallImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/playaAlcaravaneras_small.jpg",
    largeImageUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/beaches-images/alcaravaneras_big.png"
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
