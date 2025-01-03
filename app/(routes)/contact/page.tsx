import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sss } from "@/constants";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6 ">
      <Accordion type="single" collapsible className="w-full px-4">
        {sss.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="p-2">
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ContactPage;
