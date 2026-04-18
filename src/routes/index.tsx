import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Truck,
  HardHat,
  PackageCheck,
  Wrench,
  Siren,
  Forklift,
  Clock,
  ShieldCheck,
  BadgeIndianRupee,
  Users,
  ArrowRight,
  MapPin,
  Mail,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import craneNight from "@/assets/crane-night.jpeg";
import craneLifting from "@/assets/crane-lifting.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayyappa Crane Service — Hydra Crane Rental & Heavy Lifting 24/7" },
      {
        name: "description",
        content:
          "Ayyappa Crane Service offers reliable hydra crane rental, heavy lifting, loading, unloading and machinery shifting 24/7. Call 9989416750.",
      },
      { property: "og:title", content: "Ayyappa Crane Service — Hydra Crane Rental 24/7" },
      {
        property: "og:description",
        content:
          "Trusted hydra crane rental and heavy lifting for construction and machinery shifting. Available 24/7.",
      },
      { property: "og:image", content: craneNight },
      { name: "twitter:image", content: craneNight },
    ],
  }),
  component: Index,
});

const PHONE_PRIMARY = "9989416750";
const PHONE_SECONDARY = "9502192545";

const services = [
  { icon: Truck, title: "Hydra Crane Rental", desc: "Hourly & daily hydra crane rental for any lifting job." },
  { icon: HardHat, title: "Construction Lifting", desc: "Steel, concrete blocks, beams and site material lifting." },
  { icon: PackageCheck, title: "Loading & Unloading", desc: "Fast and safe loading/unloading for trucks & containers." },
  { icon: Wrench, title: "Machinery Shifting", desc: "Industrial machinery, generators and equipment shifting." },
  { icon: Siren, title: "Emergency Crane", desc: "24/7 emergency response crane service across the region." },
  { icon: Forklift, title: "Transport Support", desc: "End-to-end lifting + transport coordination support." },
];

const features = [
  { icon: Clock, title: "24/7 Availability", desc: "Day or night, we answer the call." },
  { icon: Users, title: "Experienced Operators", desc: "Trained, certified crane operators." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Transparent, competitive rates." },
  { icon: ShieldCheck, title: "Safe & Reliable", desc: "Strict safety, on-time delivery." },
];

const gallery = [
  { src: craneLifting, alt: "Hydra crane lifting decorated idol with religious procession" },
  { src: craneNight, alt: "Ayyappa Crane Service hydra crane parked at night with marigold garlands" },
  { src: craneLifting, alt: "Ayyappa Crane Service hydra crane lifting heavy religious idol structure" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
            <Truck className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">Ayyappa CRANE</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Service</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {["About", "Services", "Why Us", "Gallery", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE_PRIMARY}`}
          className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition"
        >
          <Phone className="w-4 h-4" /> {PHONE_PRIMARY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={craneNight}
        alt="Ayyappa Crane Service hydra crane at night"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/60" />
      {/* hazard stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 stripes opacity-90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-32 w-full">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available 24/7
          </div>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] uppercase">
            Ayyappa Crane <br />
            <span className="text-gradient-primary">Service</span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-foreground/90 font-medium">
            Reliable Hydra Crane Rental & Heavy Lifting Services
          </p>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
            24/7 crane service for construction, loading, unloading, machinery shifting, and emergency
            lifting work across nearby towns and villages.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-4 rounded-full font-bold shadow-glow hover:scale-[1.03] transition-transform"
            >
              <Phone className="w-5 h-5" /> Call Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-foreground/30 text-foreground hover:border-primary hover:text-primary px-7 py-4 rounded-full font-bold transition-colors backdrop-blur-sm"
            >
              Get Quote <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            {[
              ["20+", "Years Experience"],
              ["24/7", "Service"],
              ["100%", "Trusted"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-primary">{n}</div>
                <div className="text-muted-foreground uppercase tracking-wider text-xs">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="max-w-2xl mb-14"
    >
      <div className="text-primary uppercase tracking-[0.3em] text-xs font-bold mb-3">— {tag}</div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle tag="About Us" title="Lifting heavy. Delivering trust." />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            <p>
              <span className="text-foreground font-semibold">Ayyappa Crane Service</span> brings years of
              experience in hydra crane rental and heavy lifting work. From construction sites and
              factories to local events and emergency call-outs — our trained operators handle every
              lift safely and on time.
            </p>
            <p>
              We proudly serve nearby towns and villages with round-the-clock availability. Whatever
              the load, wherever the site — we show up, ready to lift.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                ["Trained Operators", HardHat],
                ["24/7 On Call", Clock],
                ["Local Service", MapPin],
                ["Safety First", ShieldCheck],
              ].map(([label, Icon]) => {
                const I = Icon as typeof HardHat;
                return (
                  <div
                    key={label as string}
                    className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3"
                  >
                    <I className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium text-sm">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
          <img
            src={craneLifting}
            alt="Ayyappa Crane Service hydra crane lifting work"
            loading="lazy"
            className="relative rounded-2xl shadow-card w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-glow">
            <div className="font-display text-3xl">20+</div>
            <div className="text-xs uppercase tracking-widest font-semibold">Years lifting</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-card/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          tag="Our Services"
          title="What we lift, load & shift"
          subtitle="One call covers every heavy job — construction, industrial, emergency."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/60 transition-all hover:-translate-y-1 shadow-card"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity" />
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl uppercase mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="mt-5 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-3 transition-all"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Why Choose Us" title="Built for heavy work." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-gradient-to-br from-card to-background border border-border rounded-2xl p-7 overflow-hidden group"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary" />
              <f.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl uppercase mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-card/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle tag="Gallery" title="Our work in action" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 auto-rows-[200px] sm:auto-rows-[260px]">
          {gallery.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-primary text-xs uppercase tracking-widest font-bold">Ayyappa Crane</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Ayyappa Crane, I'm ${form.name} (${form.phone}). I need: ${form.service}`;
    window.open(`https://wa.me/91${PHONE_PRIMARY}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionTitle
            tag="Contact"
            title="Need a crane? Call us now."
            subtitle="We're available 24/7 — call, WhatsApp, or send a quick request."
          />
          <div className="space-y-4">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/60 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Primary</div>
                <div className="font-display text-2xl">{PHONE_PRIMARY}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${PHONE_SECONDARY}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/60 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Secondary</div>
                <div className="font-display text-2xl">{PHONE_SECONDARY}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-3 pt-2">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-4 rounded-xl font-bold hover:opacity-90 transition"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href={`https://wa.me/91${PHONE_PRIMARY}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-whatsapp text-primary-foreground px-5 py-4 rounded-xl font-bold hover:opacity-90 transition"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-7 sm:p-9 shadow-card"
        >
          <h3 className="font-display text-3xl uppercase mb-1">Request a Quote</h3>
          <p className="text-muted-foreground text-sm mb-7">Fill in below — we'll get right back.</p>

          <div className="space-y-4">
            <Field label="Your Name" required>
              <input
                required
                maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                placeholder="Ramesh Kumar"
              />
            </Field>
            <Field label="Phone Number" required>
              <input
                required
                type="tel"
                pattern="[0-9+\s-]{8,15}"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                placeholder="9989416750"
              />
            </Field>
            <Field label="Service Needed" required>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary transition"
              >
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </Field>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-4 rounded-xl font-bold shadow-glow hover:scale-[1.02] transition-transform"
            >
              {sent ? "Sent — we'll call back" : "Submit Request"} <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Submitting opens WhatsApp with your details prefilled.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2 block">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="relative bg-background border-t border-border">
      <div className="h-2 stripes" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Truck className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="font-display text-xl">Ayyappa CRANE SERVICE</div>
          </div>
          <p className="text-muted-foreground text-sm">
            Available 24/7 for crane service. Hydra crane rental & heavy lifting you can trust.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-primary inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> {PHONE_PRIMARY}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-primary inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> {PHONE_SECONDARY}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Mail className="w-4 h-4" /> indrareddykatla@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Service Hours</div>
          <p className="font-display text-2xl">24 / 7</p>
          <p className="text-muted-foreground text-sm">Always on call — including holidays.</p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ayyappa CRANE SERVICE. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/91${PHONE_PRIMARY}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="w-14 h-14 rounded-full bg-whatsapp text-primary-foreground flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href={`tel:${PHONE_PRIMARY}`}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow hover:scale-110 transition-transform animate-pulse"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}