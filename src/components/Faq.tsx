import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ } from "@/constants"


export default function Faq() {
    return (
        <div className="container mx-auto my-20">
            <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                {FAQ.map((faq, index) => (
                    <AccordionItem key={index} value={faq.value}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-neutral-800">{faq.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}