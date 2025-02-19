import { motion } from "motion/react";

export default function Overview() {
  return (
    <section id="overview" className="py-10 bg-dots-section-fade-y scroll-m-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient">
          Overview
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:columns-2 md:gap-8"
        >
          MiCare combines a mobile application and a web dashboard to enable
          effective communication between patients and clinicians. The mobile
          application allows patients to monitor symptoms and communicate with
          their therapist. The web dashboard supports clinicians in real-time
          patient monitoring and the management of therapeutic pathways through
          digital evaluation tools such as standardised questionnaires. Advanced
          artificial intelligence algorithms assist in clinical decision-making,
          aiding in the detection of significant events during therapy and
          providing support for diagnostic processes.
        </motion.p>
      </div>
    </section>
  );
}
