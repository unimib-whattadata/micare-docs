import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Button } from "@site/src/components/ui/button";
import {
  Card as CardComponent,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@site/src/components/ui/card";

const Card = motion.create(CardComponent);

export default function Cta() {
  return (
    <section id="Contact" className="relative py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 place-items-center">
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient text-center md:col-span-2">
          Further Information and Collaborative Opportunities
        </h2>
        <p className="mb-0">
          If you are interested in further details regarding the research
          methodologies, technological innovations, or clinical applications
          integrated within the MiCare project, we welcome your inquiries. Our
          team is eager to engage with academics, clinicians, and other
          professionals in the field of mental health
        </p>
        <div className="w-full flex flex-col justify-center">
          <Card
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6 items-center justify-between p-6"
          >
            <span className="text-sm text-muted-foreground">
              To learn more or discuss potential collaborative opportunities,
              please get in touch with our research team.
            </span>
            <Button className="w-full sm:w-auto">
              <Mail className="mr-1 h-4 w-4" />
              Contact Research Team
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
