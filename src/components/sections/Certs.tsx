"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Certs = () => (
  <section id="certs" className="space-y-16 px-6 lg:px-20 xl:px-32">
    <SectionHeader title="VALIDATION LAYERS" subtitle="Certifications & Learning" number="4" icon={<ShieldCheck className="w-7 h-7" />} description="Tools, Certifications & Tech Stack" />

    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div className="p-8 border border-border bg-card relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 bg-muted border-l border-b border-border font-mono text-[9px] uppercase tracking-widest opacity-50">
            Learning_Mindset
          </div>
          <div className="space-y-5">
            <p className="text-base leading-loose text-muted-foreground">
              My technical knowledge is developed through a combination of structured study and hands-on implementation. Industry certifications provide a reference framework, which is then validated through actual infrastructure deployments and system-level projects.
            </p>
            <p className="text-base leading-loose text-muted-foreground">
              I build operational understanding iteratively: concepts are prototyped in sandbox environments, tested under realistic conditions, and refined through practical troubleshooting.
            </p>
            <p className="text-base leading-loose text-muted-foreground">
              Beyond certification coverage, I focus on understanding how systems work at the component level — including failure behavior, performance characteristics, and operational trade-offs.
            </p>
            <p className="text-base leading-loose text-muted-foreground">
              I stay current by following evolving DevOps practices and cloud-native patterns through continuous self-directed learning and hands-on experimentation.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-primary" />
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 text-foreground">Applied Methodology</h4>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-loose">
              I follow an applied learning methodology — infrastructure patterns are reinforced through direct implementation, continuous testing, and iterative refinement rather than passive study.
            </p>
            <p className="text-sm text-muted-foreground leading-loose">
              Each engineering cycle covers: system design, infrastructure provisioning, failure analysis, performance review, and documentation of findings.
            </p>
            <p className="text-sm text-muted-foreground leading-loose">
              I test platforms under simulated failure conditions and varied observability configurations to build a practical understanding of system behavior under stress.
            </p>
            <p className="text-sm text-muted-foreground leading-loose">
              This approach develops an SRE-aligned perspective — focused on system reliability, operational visibility, and maintainable infrastructure design.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {[
          {
            title: "AWS Certified Solutions Architect – Associate",
            org: "Amazon Web Services // 2024",
            status: "Industry Certified",
            desc: "Validates knowledge of AWS services, cloud architecture patterns, secure networking, and designing scalable, cost-effective cloud solutions."
          },
          {
            title: "AWS & DevOps Professional Training Program",
            org: "Structured Certification Track",
            status: "Completed",
            desc: "Completed a structured training program covering infrastructure automation, CI/CD pipeline design, container orchestration, and core DevOps practices."
          },
          {
            title: "Diploma in AWS with Python",
            org: "Academic Certification Program",
            status: "Completed",
            desc: "Completed an AWS-focused program covering cloud infrastructure fundamentals, Python-based automation scripting, and cloud resource management."
          }
        ].map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-border bg-muted/20 group hover:bg-muted/50 transition-colors space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-6">
                <div className="p-3 bg-background border border-border text-primary group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold uppercase tracking-tight">{cert.title}</h4>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">{cert.org}</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5">
                <CheckCircle2 className="w-3 h-3 text-primary" />
                <span className="text-[9px] font-mono font-bold text-primary uppercase">{cert.status}</span>
              </div>
            </div>
            {cert.desc && (
              <p className="text-xs text-muted-foreground leading-relaxed pl-0 sm:pl-16">{cert.desc}</p>
            )}
          </motion.div>
        ))}

        <div className="p-6 border border-dashed border-border flex items-start gap-3 sm:gap-6 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
          <div className="p-3 bg-background border border-border">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-tight italic">Upcoming Infrastructure Validation Queue</h4>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Active Focus Areas</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Active learning areas include SRE practices, security automation, Kubernetes cluster management, and distributed systems reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
