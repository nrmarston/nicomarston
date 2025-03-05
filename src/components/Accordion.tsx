import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  data: {
    title: string;
    description: string;
  }[];
}

export function Accordion({ data }: Props) {
  return (
    <BaseAccordion defaultValue={[`item-0`]} type="multiple" className="w-full">
      {data.map((item, i) => {
        return (
          <AccordionItem
            key={item.title}
            value={`item-${i.toFixed()}`}
            className="bg-white dark:bg-gray-800"
          >
            <AccordionTrigger className="cursor-pointer">{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}
