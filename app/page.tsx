"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MagneticButton,
  GradientBorderCard,
  SpotlightCard,
} from "@/components/ui/react-bits";
import SplitText from "@/components/ui/SplitText";
import FadeText from "@/components/ui/FadeText";
import EventForm from "@/components/EventForm";
import Footer from "@/components/Footer";
import { PenTool, Bot, Calendar, Zap, Mail, Users, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden font-inter">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen text-center px-6"
        aria-label="Hero section"
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 bg-linear-to-br from-sky-900/20 via-slate-900/10 to-transparent"
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto w-full"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
            scale: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{
              duration: 1.0,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              rotateX: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
            }}
          >
            <SplitText
              text="Transform messages into calendar events"
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-linear-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
              filter: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
            }}
          >
            <FadeText
              text="AI converts any message into ready-to-add calendar entries."
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            />
            <FadeText
              text="Skip the manual work."
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mt-1"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              scale: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <MagneticButton href="#try-it">Try It Now →</MagneticButton>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                boxShadow: "0 20px 40px rgba(100, 116, 139, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Link href="#features">
                <motion.button
                  className="px-8 py-4 text-slate-300 hover:text-white border border-slate-700 hover:border-sky-500 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                  aria-label="Learn more about AI Calendar Linker features"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-label="Scroll down to see more"
          role="button"
          tabIndex={0}
          onClick={() =>
            document
              .getElementById("try-it")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              document
                .getElementById("try-it")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center cursor-pointer hover:border-sky-500 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-sky-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Try It Section */}
      <section
        id="try-it"
        className="min-h-[70vh] md:min-h-screen flex items-center justify-center px-6 py-16 md:py-20"
      >
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Paste messages, get events
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Paste any message with event details and our AI extracts the
              information to create calendar events instantly.
            </p>
          </motion.div>

          <GradientBorderCard className="max-w-2xl mx-auto">
            <EventForm />
          </GradientBorderCard>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Built for modern professionals
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Three powerful features that make scheduling effortless
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Bot className="w-8 h-8 text-slate-300" />,
                title: "AI-Powered Extraction",
                description:
                  "Type 'Call with Emma tomorrow 3pm' and it just works. No forms, no complexity.",
                delay: 0.1,
              },
              {
                icon: <Calendar className="w-8 h-8 text-slate-300" />,
                title: "Universal Compatibility",
                description:
                  "Add to Google Calendar, Outlook, or download universally. Works with every calendar app.",
                delay: 0.2,
              },
              {
                icon: <Zap className="w-8 h-8 text-slate-300" />,
                title: "Lightning Fast",
                description:
                  "AI extracts everything — title, time, location, duration. In seconds.",
                delay: 0.3,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.8,
                  rotateX: -20,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: feature.delay + 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                  rotateX: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
                  filter: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                }}
              >
                <SpotlightCard className="h-full">
                  <motion.div
                    className="text-4xl mb-6"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-50">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32 px-6 bg-linear-to-br from-slate-950/80 via-slate-900/60 to-slate-950/80 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)]" />
        </div>

        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-24"
          >
            <div className="inline-block mb-6">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-widest bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                Process
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-linear-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent">
                How it works
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
              Three simple steps to transform your thoughts into calendar events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-16 relative">
            {/* Enhanced Connection Lines */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-px bg-linear-to-r from-transparent via-slate-500 to-transparent" />

            {/* Connection Dots */}
            <div className="hidden md:block absolute top-20 left-1/3 w-2 h-2 bg-slate-400 rounded-full -translate-x-1/2" />
            <div className="hidden md:block absolute top-20 left-2/3 w-2 h-2 bg-slate-400 rounded-full -translate-x-1/2" />

            {[
              {
                step: "1",
                title: "You paste message content",
                description:
                  "Paste entire messages or type naturally: 'Team meeting tomorrow at 2pm for 1 hour in conference room A'",
                icon: <PenTool className="w-8 h-8 text-slate-300" />,
                delay: 0.1,
              },
              {
                step: "2",
                title: "AI parses the info",
                description:
                  "Our AI extracts title, time, location, and duration automatically",
                icon: <Bot className="w-8 h-8 text-slate-300" />,
                delay: 0.2,
              },
              {
                step: "3",
                title: "We generate links & files",
                description:
                  "Get Google Calendar links, Outlook links, and downloadable ICS files instantly",
                icon: <Calendar className="w-8 h-8 text-slate-300" />,
                delay: 0.3,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.8,
                  rotateX: -30,
                  filter: "blur(15px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.0,
                  delay: step.delay + 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                  rotateX: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
                  filter: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                }}
                viewport={{ once: true }}
                className="text-center relative group"
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  rotateY: 8,
                  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                }}
              >
                {/* Step Card */}
                <div className="relative bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-2xl p-10 md:p-12 hover:border-slate-700/80 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-1 h-full flex flex-col">
                  {/* Step Number with Enhanced Design */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-linear-to-r from-slate-600 to-slate-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-slate-900/50 group-hover:shadow-slate-800/50 transition-all duration-700 group-hover:scale-105">
                      <span className="text-3xl font-bold text-slate-100">
                        {step.step}
                      </span>
                    </div>
                    {/* Enhanced Icon */}
                    <div className="absolute -top-2 -right-2 text-2xl opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-6 text-slate-100 group-hover:text-white transition-colors duration-500 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-500 font-light flex-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-slate-700/5 to-slate-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Corner Accent */}
                  <div className="absolute top-6 right-6 w-1 h-1 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20 md:mt-24"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-xl hover:border-slate-600/60 transition-all duration-500 hover:shadow-lg hover:shadow-slate-900/30 group">
              <span className="text-slate-200 font-medium text-base group-hover:text-white transition-colors duration-300">
                Ready to try?
              </span>
              <div className="w-1 h-1 bg-slate-400 rounded-full" />
              <span className="text-slate-400 text-base group-hover:text-slate-300 transition-colors duration-300">
                It&apos;s completely free
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Calendar API Integration Section */}
      <section className="py-16 md:py-20 px-6 bg-slate-900/30">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <span className="text-xs font-medium text-sky-400 uppercase tracking-widest bg-sky-900/20 px-4 py-2 rounded-full border border-sky-800/50">
                Coming Soon
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-linear-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Calendar API Integration
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Direct integration with Google Calendar and Outlook for seamless
              event management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-200">
                  Direct Sync
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Events will be automatically added to your Google Calendar and
                Outlook without manual copying or downloading files.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-200">
                  Smart Scheduling
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI will check for conflicts and suggest optimal meeting times
                based on your existing calendar.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-200">
                  Instant Updates
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Real-time synchronization means your calendar is always
                up-to-date across all your devices.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-200">
                  Email Integration
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Connect your Gmail and Outlook to automatically process calendar
                invitations and event emails.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-200">
                  Team Collaboration
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Share calendars and coordinate meetings with team members
                seamlessly.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-sky-400" />
                <h3 className="text-lg font-semibold text-slate-200">
                  Time Zone Intelligence
                </h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Automatically handle time zone conversions for global events and
                meetings.
              </p>
            </SpotlightCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-500 text-sm">
              Calendar API integration is currently in development.
              <span className="text-sky-400 font-medium">
                {" "}
                Stay tuned for updates!
              </span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
