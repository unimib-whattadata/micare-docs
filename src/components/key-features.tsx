import {
  BarChartIcon,
  Brain,
  Globe,
  HeartPulse,
  Hospital,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@site/src/lib/utils";
import {
  Card as CardComponent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@site/src/components/ui/card";

const Card = motion.create(CardComponent);

const FEATURES = [
  {
    title: "Mobile App",
    description:
      "The mobile application enables patients to record daily symptom data and communicate securely with their therapists. This feature supports the <strong>collection of real-time information</strong> and facilitates timely adjustments in treatment",
    icon: HeartPulse,
    color: "from-green-400 to-blue-500",
  },
  {
    title: "Clinician Dashboard",
    description:
      "The clinician dashboard provides a comprehensive view of patient data, allowing healthcare professionals to <strong>monitor progress and manage individual therapeutic pathways</strong>. This tool aids in the evaluation of treatment outcomes and supports clinical decision-making",
    icon: BarChartIcon,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "AI-Powered Support",
    description:
      "Advanced artificial intelligence algorithms are integrated to provide clinical decision support. These algorithms <strong>analyse patient data to identify patterns and potential risks</strong>, assisting clinicians in early intervention and refining diagnostic accuracy",
    icon: Brain,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Digital Assessments",
    description:
      "Digitised psychological questionnaires and assessment tools are incorporated into the system to standardise data collection. These tools <strong>enable the consistent evaluation of mental health symptoms</strong> and treatment responses over time, contributing to evidence-based practice",
    icon: Users,
    color: "from-red-400 to-pink-500",
  },
  {
    title: "Data Sharing",
    description:
      "The platform facilitates the secure sharing of anonymised patient data with the research community. This function <strong>supports collaborative studies and contributes to the advancement of mental health research</strong> at both national and international levels",
    icon: Globe,
    color: "from-indigo-400 to-cyan-500",
  },
  {
    title: "Versatile Use",
    description:
      "MiCare is designed to be adaptable across <strong>various clinical and research settings</strong>. Whether in hospital environments, individual therapeutic sessions, or large-scale research studies, the system offers a flexible solution for improving mental health care",
    icon: Hospital,
    color: "from-purple-400 to-indigo-500",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardHeader>
                <div
                  className={cn(
                    "inline-block p-3 rounded-full bg-gradient-to-r mb-4 leading-[0] self-start",
                    feature.color
                  )}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
