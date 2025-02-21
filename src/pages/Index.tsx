
import { Trophy, Users, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Line Follower",
    description: "Build and program a robot that can follow a line path autonomously.",
    type: "Competition",
    fee: "100/-",
    teamSize: "Upto 3 members",
    prizes: {
      first: "$3000",
      second: "$2000",
      third: "$1000"
    }
  },
  {
    id: 2,
    title: "Drone Workshop",
    description: "Learn about drone technology, assembly, and flying techniques.",
    type: "Workshop",
    fee: "100/-",
    teamSize: "Individual",
    prizes: null
  },
  {
    id: 3,
    title: "Auto Quiz",
    description: "Test your knowledge about automobiles and automotive technology.",
    type: "Competition",
    fee: "Free",
    teamSize: "Upto 3 members",
    prizes: {
      first: "$3000",
      second: "$2000",
      third: "$1000"
    }
  }
];

const EventCard = ({ event }: { event: typeof events[0] }) => {
  return (
    <div className="event-card group">
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
          <h3 className="text-xl font-bold tracking-tight mb-2">{event.title}</h3>
          <p className="text-muted-foreground text-sm">{event.description}</p>
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

      <div className="mt-6">
        <Button 
          className="group/button w-full bg-primary/10 hover:bg-primary/20 text-primary-foreground"
        >
          Register Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen pattern-bg">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            TechFest 2024
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
            Join us for an exciting celebration of technology and innovation
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
