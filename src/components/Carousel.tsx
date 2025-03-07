import {
  Carousel as BaseCarousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";

interface Props {
  data: Array<{
    review: string;
    author: string;
  }>;
}

export function Carousel({ data }: Props) {
  return (
    <BaseCarousel
      opts={{
        loop: true,
        slidesToScroll: 1,
      }}
      plugins={[
        Autoscroll({
          speed: 0.5,
          startDelay: 0,
          direction: "forward",
          playOnInit: true,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          stopOnFocusIn: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem className="max-w-lg pl-5 md:pl-10" key={item.author}>
            <div className="card">
              <div className="card-inner">
                <p className="text-xl italic">"{item.review}"</p>
                <p className="text-base font-medium">{item.author}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </BaseCarousel>
  );
}
