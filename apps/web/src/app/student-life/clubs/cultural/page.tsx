"use client";
import { ClubCard } from "@/components/ui/club-card";

const organizations = [
  {
    name: "Zeitgeist",
    description:
      "A sanctuary for literature enthusiasts and public speakers, fostering a love for the written and spoken word.",
    memberCount: 85,
    meetingSchedule: "Bi-weekly Wednesdays, 6:00 PM",
    location: "Library Seminar Room",
    href: "/organizations/zeitgeist",
    president: "Eleanor Vance",
    vision:
      "To ignite a passion for literature and empower effective communicators.",
    mission:
      "To provide a supportive environment for members to explore literature, hone public speaking skills, and share their love of language.",
    socials: {
      instagram: "zeitgeist_lit",
      linkedin: "zeitgeist-club",
    },
  },
  {
    name: "Iridescence",
    description:
      "Capturing moments through photography and videography, and mastering the art of video editing.",
    memberCount: 70,
    meetingSchedule: "Weekly Saturdays, 4:00 PM",
    location: "Media Lab - Room 210",
    href: "/organizations/iridescence",
    president: "Kai Tanaka",
    vision:
      "To capture the world in its most beautiful and compelling form, and to teach others to do the same.",
    mission:
      "To provide members with the skills, equipment, and opportunities to excel in photography, videography, and video editing.",
    socials: {
      instagram: "iridescence_media",
      twitter: "iridescence_pics",
    },
  },
  {
    name: "440 Hz",
    description:
      "A harmonious gathering for music lovers, instrumentalists, and vocalists to create and perform.",
    memberCount: 90,
    meetingSchedule: "Weekly Fridays, 5:30 PM",
    location: "Music Room - Building B",
    href: "/organizations/440-hz",
    president: "Aisha Khan",
    vision:
      "To create a vibrant musical community where everyone can express their passion for music.",
    mission:
      "To provide opportunities for members to learn, create, and perform music in a supportive and collaborative environment.",
    socials: {
      instagram: "440hz_music",
    },
  },
  {
    name: "In Motion",
    description:
      "Exploring the cinematic arts through film appreciation, production, and critique.",
    memberCount: 60,
    meetingSchedule: "Bi-weekly Tuesdays, 7:00 PM",
    location: "Auditorium Screening Room",
    href: "/organizations/in-motion",
    president: "Ben Carter",
    vision:
      "To cultivate a deeper understanding and appreciation of cinema, and to empower aspiring filmmakers.",
    mission:
      "To provide a platform for film screenings, discussions, and workshops, and to support members in the creation of their own films.",
    socials: {
      instagram: "inmotion_films",
      twitter: "inmotion_tweets",
    },
  },
  {
    name: "Dynamight",
    description:
      "A vibrant community celebrating the art of dance across various styles and cultures.",
    memberCount: 100,
    meetingSchedule: "Weekly Thursdays, 6:00 PM",
    location: "Dance Studio - Room 101",
    href: "/organizations/dynamight",
    president: "Sofia Ramirez",
    vision:
      "To celebrate the joy and diversity of dance, and to inspire creativity and self-expression through movement.",
    mission:
      "To provide dance classes, workshops, and performance opportunities in a variety of styles, welcoming dancers of all levels.",
    socials: {
      instagram: "dynamight_dance",
      linkedin: "dynamight-dance-club",
    },
  },
  {
    name: "Limelight",
    description:
      "Bringing stories to life through drama and theatrical performances.",
    memberCount: 75,
    meetingSchedule: "Weekly Mondays, 5:00 PM",
    location: "Black Box Theatre",
    href: "/organizations/limelight",
    president: "Ethan Lee",
    vision:
      "To ignite imaginations and create unforgettable theatrical experiences.",
    mission:
      "To produce high-quality theatrical performances, provide acting training, and foster a love of drama among our members and the community.",
    socials: {
      instagram: "limelight_theatre",
    },
  },
  {
    name: "Mosaic",
    description:
      "A collective for artists to express themselves through painting, sculpture, and other visual arts.",
    memberCount: 65,
    meetingSchedule: "Bi-weekly Sundays, 3:00 PM",
    location: "Art Room - Building C",
    href: "/organizations/mosaic",
    president: "Chloe Nguyen",
    vision: "To foster creativity and artistic expression in all its forms.",
    mission:
      "To provide a supportive space for artists to create, share, and learn from each other, and to showcase their work to the community.",
    socials: {
      instagram: "mosaic_arts",
      linkedin: "mosaic-art-collective",
    },
  },
];

export default function ClubsPage() {
  return (
    <main>
      <div className="w-full min-h-screen py-8">
        <section className="py-4 max-w-[1680px] w-[87.5vw] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-large-title font-bold text-gray-900 mb-4">
              Cultural Clubs
            </h2>
            <p className="text-title-3 text-gray-600 max-w-4xl mx-auto">
              Enter, fair traveler, into the grand tapestry of culture woven
              within IIIT Dharwad’s hallowed halls! Here, the quill dances with
              the soul, the stage breathes with fire, and melodies echo like
              whispers of the muses. From sonnets spun in moonlight to footfalls
              that shake the very earth, our cultural clubs are a realm where
              art and passion entwine. Dost thou seek a place where stories are
              lived, not merely told? Where the brush and the bow wield power as
              mighty as the sword? Then tarry no more—join us, and let thy
              spirit soar upon the wings of boundless creation!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map(org => (
              <ClubCard key={org.name} {...org} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
