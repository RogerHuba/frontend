"use client";

import { PageLayout } from "@/components/PageLayout";
import { Code, Users, MessageCircle, Wrench, Brush, Database, Shield, HelpCircle } from "lucide-react";
import { TeamPosition } from "@/types/teamPosition";
import teamPositionsData from "@/data/teamPositions.json";

// Icon mapping for the JSON data
const iconMap = {
  Code: Code,
  Users: Users,
  MessageCircle: MessageCircle,
  Wrench: Wrench,
  Brush: Brush,
  Database: Database,
  Shield: Shield,
  HelpCircle: HelpCircle,
};

export function JoinTheTeamPage() {
  const teamRoles: TeamPosition[] = teamPositionsData;

  return (
    <PageLayout
      title="Join the Team"
      subtitle="Help us shape the future of SWG Infinity"
    >
      <h2 className="section-title mb-6">Join Our Development Team</h2>

      <p className="text-gray-300 mb-8">
        SWG Infinity is always looking for passionate and talented individuals to join our team.
        As a community-driven project, we rely on volunteers who share our love for Star Wars Galaxies
        and want to help make our server the best it can be.
      </p>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mb-10">
        <h3 className="text-white font-bold text-xl mb-4 flex items-center">
          <Users className="h-6 w-6 text-[hsl(var(--swg-accent-gold))] mr-2" />
          Why Join Our Team?
        </h3>
        <ul className="swg-bullet-list">
          <li className="text-gray-300 mb-3">Be part of a passionate community dedicated to preserving and enhancing Star Wars Galaxies</li>
          <li className="text-gray-300 mb-3">Develop valuable skills in game development, programming, design, and community management</li>
          <li className="text-gray-300 mb-3">See your ideas and contributions implemented in a game played by hundreds of people</li>
          <li className="text-gray-300 mb-3">Collaborate with a team of like-minded individuals from around the world</li>
          <li className="text-gray-300">Gain hands-on experience with a complex game codebase and the challenges of running an MMO</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-white mb-6">Available Positions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {teamRoles.map((role) => {
          const IconComponent = iconMap[role.icon as keyof typeof iconMap] || HelpCircle;
          return (
            <div key={role.id} className="bg-[rgba(13,20,40,0.6)] p-5 rounded-md border border-[#1a1a4a]">
              <div className="flex items-center mb-3">
                <IconComponent className="h-6 w-6 text-[hsl(var(--swg-accent-gold))]" />
                <h4 className="text-white font-semibold ml-2">{role.title}</h4>
              </div>
              <p className="text-gray-300 mb-4">{role.description}</p>
              <h5 className="text-[hsl(var(--swg-accent-gold))] text-sm font-medium mb-2">Requirements:</h5>
              <ul className="text-gray-300 text-sm pl-5 list-disc space-y-1 mb-4">
                {role.requirements.map((req: string, index: number) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <div className="bg-[rgba(0,0,0,0.3)] p-3 rounded border border-[#2a2a5a] mt-4">
                <p className="text-gray-300 text-sm mb-2">{role.applicationNote}</p>
                <a
                  href={`mailto:${role.applicationEmail}`}
                  className="text-[hsl(var(--swg-accent-gold))] hover:text-white text-sm font-medium transition-colors"
                >
                  {role.applicationEmail}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="text-xl font-bold text-white mb-6">Application Process</h3>
      <div className="bg-[rgba(13,20,40,0.6)] p-6 rounded-md border border-[#1a1a4a] mb-10">
        <ol className="list-decimal pl-6 text-gray-300 space-y-4">
          <li>
            <strong className="text-white">Review the positions:</strong> Take time to understand the available roles and requirements listed above.
          </li>
          <li>
            <strong className="text-white">Prepare your application:</strong> Gather examples of your work and prepare a statement explaining why you'd be suitable for the position.
          </li>
          <li>
            <strong className="text-white">Email your application:</strong> Send your application to <a href="mailto:devs@swginfinity.com" className="text-[hsl(var(--swg-accent-gold))] hover:text-white transition-colors">devs@swginfinity.com</a> with examples of your work and your qualifications.
          </li>
          <li>
            <strong className="text-white">Interview:</strong> If your application is promising, you'll be invited to chat with the relevant team lead.
          </li>
          <li>
            <strong className="text-white">Trial period:</strong> Successful applicants will go through a trial period to ensure it's a good fit.
          </li>
        </ol>
      </div>

      <div className="bg-[rgba(13,20,40,0.8)] p-6 rounded-md border border-[#1a1a4a] mt-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-4/5 mb-6 md:mb-0 md:pr-6">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <MessageCircle className="h-5 w-5 text-[hsl(var(--swg-accent-gold))] mr-2" />
              Ready to Apply?
            </h3>
            <p className="text-gray-300 mb-4">
              If you're interested in joining our team, we'd love to hear from you! Send your application
              to <a href="mailto:devs@swginfinity.com" className="text-[hsl(var(--swg-accent-gold))] hover:text-white transition-colors">devs@swginfinity.com</a> with 
              examples of your work and why you'd be suitable for the position.
            </p>
            <p className="text-gray-300">
              Even if you don't see a position that matches your skills, we're always open to discussing
              how you might contribute to the project. Don't hesitate to reach out!
            </p>
          </div>
          <div className="md:w-1/5 flex justify-center">
            <a
              href="mailto:devs@swginfinity.com"
              className="play-button inline-flex items-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
