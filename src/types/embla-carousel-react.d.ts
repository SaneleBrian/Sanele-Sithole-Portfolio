declare module "embla-carousel-react" {
  import { RefObject } from "react";
  import EmblaCarousel, { EmblaOptionsType } from "embla-carousel";

  export type UseEmblaCarouselType = [
    RefObject<HTMLDivElement>, // ⬅ change from HTMLElement to HTMLDivElement
    EmblaCarousel | null
  ];

  export default function useEmblaCarousel(
    options?: EmblaOptionsType,
    plugins?: any[]
  ): UseEmblaCarouselType;
}