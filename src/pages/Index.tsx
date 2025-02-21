import { Trophy, Users, Calendar, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    title: "Line Follower",
    description:
      "Build and program a robot that can follow a line path autonomously.",
    type: "Competition",
    fee: "100/-",
    teamSize: "Upto 3 members",
    cover: "/line-follower.jpeg",
    prizes: {
      first: "$3000",
      second: "$2000",
      third: "$1000",
    },
  },
  {
    id: 2,
    title: "Drone Workshop",
    description:
      "Learn about drone technology, assembly, and flying techniques.",
    type: "Workshop",
    fee: "100/-",
    teamSize: "Individual",
    cover: "/drone.jpeg",
    venue: null,
    prizes: null,
  },
  {
    id: 3,
    title: "Auto Quiz",
    description:
      "Test your knowledge about automobiles and automotive technology.",
    type: "Competition",
    fee: "Free",
    teamSize: "Upto 3 members",
    cover: "/auto.jpeg",
    prizes: {
      first: "$3000",
      second: "$2000",
      third: "$1000",
    },
  },
  {
    id: 4,
    title: "Wiring Competition",
    description: "Showcase your electrical wiring skills and knowledge.",
    type: "Competition",
    fee: "Free",
    cover: "/wiring.jpeg",
    teamSize: "Upto 2 members",
    prizes: {
      first: "$1000",
      second: "$500",
      third: "$100",
    },
  },
  {
    id: 5,
    title: "EV Workshop",
    description:
      "Deep dive into electric vehicle technology and future trends.",
    type: "Workshop",
    fee: "200/-",
    cover: "/ev-workshop.jpeg",
    teamSize: "Individual",
    venue: "CAD Lab",
    prizes: null,
  },
  {
    id: 6,
    title: "Build a Resistance",
    description:
      "Test your electronics knowledge in this exciting competition.",
    type: "Competition",
    fee: "Free",
    teamSize: "Individual",
    venue: "EE Electronics Lab",
    prizes: {
      first: "$1000",
      second: "$500",
      third: "$100",
    },
  },
  {
    id: 7,
    title: "CUBE Making",
    description: "Demonstrate your structural engineering skills.",
    type: "Competition",
    fee: "Free",
    teamSize: "Individual",
    venue: "Civil Lab",
    prizes: {
      first: "$1000",
      second: "$500",
      third: "$100",
    },
  },
  {
    id: 8,
    title: "AutoCad Competition",
    description: "Show your CAD skills in mechanical and civil design.",
    type: "Competition",
    fee: "Free",
    teamSize: "Individual",
    venue: "Civil Lab",
    cover: "/autocad.jpeg",
    prizes: {
      first: "$1000",
      second: "$500",
      third: "$100",
    },
  },
  {
    id: 9,
    title: "UI/UX Workshop",
    description: "Learn modern UI/UX design principles and practices.",
    type: "Workshop",
    fee: "50/-",
    teamSize: "Individual",
    venue: "ICFC Lab",
    prizes: null,
  },
  {
    id: 10,
    title: "Coding Competition",
    description: "Put your programming skills to the test.",
    type: "Competition",
    fee: "Free",
    teamSize: "Individual",
    cover: "/coding.jpeg",
    venue: "ICFC Lab",
    prizes: {
      first: "$1000",
      second: "$500",
      third: "$100",
    },
  },
  {
    id: 11,
    title: "Project Expo",
    description: "Showcase your innovative projects and win big prizes.",
    type: "Competition",
    fee: "100/-",
    teamSize: "Upto 3 members",
    prizes: {
      first: "$20000",
      second: "$10000",
      third: "$5000",
    },
  },
];

const EventCard = ({ event }: { event: (typeof events)[0] }) => {
  return (
    <div className="flex flex-col">
      <div
        className={cn("event-card grow flex flex-col group", {
          "!p-0": !!event.cover,
        })}
      >
        {event.cover && (
          <img
            src={event.cover}
            alt={event.title}
            className="w-full max-h-48 object-cover object-center rounded-t"
          />
        )}
        <div className="p-6 flex flex-col grow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Badge
                variant="outline"
                className={`mb-2 ${
                  event.type === "Competition"
                    ? "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
                    : "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                }`}
              >
                {event.type}
              </Badge>
              <h3 className="text-xl font-bold tracking-tight mb-2">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {event.description}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Fee: {event.fee}</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{event.teamSize}</span>
            </div>

            {event.venue && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{event.venue}</span>
              </div>
            )}

            {event.prizes && (
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <div className="flex gap-2">
                  <span className="prize-text">1st: {event.prizes.first}</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="prize-text">2nd: {event.prizes.second}</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="prize-text">3rd: {event.prizes.third}</span>
                </div>
              </div>
            )}
          </div>
          <div className="grow" />
          <div className="mt-6">
            <Button className="group/button w-full bg-primary/10 hover:bg-primary/20 text-primary-foreground">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen  bg-[url('../bg-2.jpg')]">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div>
            <img src="/logo.png" alt="Hope 25 logo" className="mx-auto w-36" />
            <img src="/name.png" alt="Hope 25 logo" className="mx-auto mt-5" />
          </div>

          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Igniting innovation, inspiring tomorrow
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
