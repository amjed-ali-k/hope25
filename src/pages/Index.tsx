import {
  Trophy,
  Users,
  Calendar,
  ArrowRight,
  MapPin,
  Phone,
  RockingChair,
  UserCheck,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import useSWR from "swr/immutable";
import { Link } from "react-router-dom";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const events = [
  {
    id: 1,
    title: "Line Follower",
    description:
      "Build and program a robot that can follow a line path autonomously.",
    type: "Competition",
    fee: "Free",
    teamSize: "Upto 4 members",
    cover: "/line-follower.jpeg",
    link: "https://forms.gle/chK4Y4Ctj8tBLGa98",
    document: "/Hope 25 Line follower rules.pdf",
    formId: "1fpZ6lKPMd14R18oIKbTycvObMkQXYPPdqHJYMWu9eYA",
    time: "12:30 PM - 3:30 PM",
    prizes: {
      first: "₹3000",
      second: "₹2000",
      third: "₹1000",
    },
  },
  {
    id: 9,
    title: "UI/UX Workshop",
    description:
      "Ever wondered how apps like Instagram, WhatsApp, or games look so cool and easy to use? That’s UI/UX design! Join this workshop to learn how to create awesome designs.",
    type: "Workshop",
    fee: "50/-",
    teamSize: "Individual",
    cover: "/ui.jpeg",
    link: "https://forms.gle/SvFnCXTcQrhyEiFC7",
    venue: "ICFC Lab",
    formId: "1-2xLgHXp0ukndm3we25R4lWaK9Vk3zWu1rv8HxMcK70",
    limit: 60,
    time: "9:00 AM - 12:00 PM",
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
    link: "https://forms.gle/xjYeAfPtMkwJgezQ9",
    formId: "1eysb_IUDJhUK275nnpDP4sY9mNdpfPbMELvbiELHsh8",
    time: "12:30 PM - 3:30 PM",
    venue: "ICFC Lab",
    limit: 20,
    document: "/Hope 25 Coding competition rules.pdf",
    prizes: {
      first: "₹2000",
      second: "₹1000",
      third: "₹500",
    },
  },
  {
    id: 2,
    title: "Drone Workshop",
    description:
      "Learn about drone technology, assembly, and flying techniques.",
    type: "Workshop",
    fee: "50/-",
    teamSize: "Individual",
    cover: "/drone.jpeg",
    link: "https://forms.gle/WjgKvtGFzm4QVA2C6",
    formId: "1OHSW6G6C_vqlR6-9zvpPdYbMKenfrf1ZSLeji1gTfG8",
    venue: null,
    time: "9:00 AM - 12:00 PM",
    limit: 30,
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
    link: "https://forms.gle/4aJ13vkZaeyUipKz5",
    document: "/Hope 25 Auto Quiz.pdf",
    formId: "1wo2q0woRIkijDe_ja05m_5MmRRiNCLEWsS0lter1ais",
    time: "12:30 PM - 3:30 PM",
    limit: 70,
    prizes: {
      first: "₹1500",
      second: "₹1000",
      third: "₹500",
    },
  },
  {
    id: 4,
    title: "Wire it up",
    description: "Showcase your electrical wiring skills and knowledge.",
    type: "Competition",
    fee: "Free",
    cover: "/wiring.jpeg",
    link: "https://forms.gle/rNyLs82ScgbxEXjX9",
    formId: "10j-227x3kmCJLWSFUzIoDYEAuiUd7pWHx-J5jd2oOi0",
    teamSize: "Upto 2 members",
    document: "/Hope 25 Wire it up.pdf",
    time: "12:30 PM - 3:30 PM",
    limit: 10,
    prizes: {
      first: "₹2000",
      second: "₹1000",
      third: "₹500",
    },
  },
  {
    id: 5,
    title: "EV Workshop",
    description:
      "Deep dive into electric vehicle technology and future trends.",
    type: "Workshop",
    fee: "50/-",
    cover: "/ev-workshop.jpeg",
    teamSize: "Individual",
    link: "https://forms.gle/J9kib54AHUbBWPpM7",
    formId: "1N9zn63w9NQ3UNf8mk1wZCBufz7hjxnedAse1Ts27xVE",
    limit: 40,
    time: "9:00 AM - 12:00 PM",
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
    cover: "resistor.jpeg",
    venue: "EE Electronics Lab",
    link: "https://forms.gle/dYTNxtFH9FCsJV299",
    formId: "1ZCUEN0PlHygB_FGL1DQosIJNbtc0K2BIyH-fE6QxvIQ",
    document: "/Hope 25 Build a resistance.pdf",
    time: "9:00 AM - 12:00 PM",
    limit: 15,
    prizes: {
      first: "₹750",
      second: "₹500",
      third: "₹250",
    },
  },
  {
    id: 7,
    title: "Concrete Mix & Cube Design",
    description: "Demonstrate your structural engineering skills.",
    type: "Mixed",
    fee: "50/-",
    teamSize: "2 members",
    venue: "Civil Lab",
    cover: "/cube.jpeg",
    link: "https://forms.gle/bVXVWQqhDBWfjMVj6",
    formId: "1dzewcqN0f4Nb4x-tQK5wGSEgJPNnABv64O0Q7gUnHq8",
    document: "/Hope 25 Concrete Mix and Cube design.pdf",
    limit: 16,
    time: "9:30 AM - 3:30 PM",
    prizes: {
      first: "₹1000",
      second: "₹500",
      third: "-",
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
    cover: "/autocad.jpg",
    link: "https://forms.gle/qFBVCqx782JEJKeb7",
    formId: "1D0GDhnbmfMHHx_pD7eE8vUJVGB-UFeoXNN3w5tHUfWk",
    document: "/Hope 25 Autocad competition rules.pdf",
    time: "12:30 PM - 3:30 PM",
    limit: 35,
    prizes: {
      first: "₹1500",
      second: "₹1000",
      third: "₹500",
    },
  },

  {
    id: 11,
    title: "Project Expo",
    description: "Showcase your innovative projects and win big prizes.",
    type: "Competition",
    fee: "100/-",
    teamSize: "Upto 5 members",
    link: "https://forms.gle/KKRJ6XHDW1j1PKLK9",
    cover: "/expo.jpeg",
    document: "/HOPE 25 Project Expo Rules.pdf",
    formId: "11d3Y44HMPKL-XjsJaw49R5dkzkZNm-Ttjmz1ud09EMU",
    prizes: {
      first: "₹20000",
      second: "₹10000",
      third: "₹5000",
    },
  },
  {
    id: 12,
    title: "CNC Workshop",
    description: "Learn the cutting edge tech of CNC.",
    type: "Workshop",
    fee: "50/-",
    teamSize: "Individual",
    link: "https://forms.gle/859bcGLe4ENCBcdbA",
    formId: "12d4hrsqr2aural-L2zeeSEw_X4Jp37lKOk16GxPb86A",
    cover: "/cnc.png",
    limit: 60,
    time: "9:30 AM - 12:30 PM",
  },
];

export const useResponses = (formId?: string | null) => {
  const { data, isLoading } = useSWR<{
    formId: string;
    responseCount: number;
  }>(
    formId
      ? `https://techfest-backend.amjedmgm.workers.dev/form-responses/${formId}`
      : null,
    fetcher
  );
  return { data, isLoading };
};

const EventCard = ({ event }: { event: (typeof events)[0] }) => {
  const { data, isLoading } = useResponses(event.formId);
  const seatsLeft = event.limit
    ? event.limit - (data?.responseCount ?? 0)
    : null;
  const showButton = event.limit ? seatsLeft > 0 : true;

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
        <div className="p-6 flex flex-col grow relative">
          {event.document && (
            <div className="absolute right-4 top-6 z-0">
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(event.document)}
                className="!rounded-full"
              >
                View Rules
              </Button>
            </div>
          )}
          <div className="flex justify-between items-start mb-4">
            <div>
              <Badge
                variant="outline"
                className={cn("mb-2", {
                  "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20":
                    event.type === "Competition",
                  "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20":
                    event.type === "Workshop",
                  "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20":
                    event.type === "Mixed",
                })}
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
            <div className="flex justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Fee: {event.fee}</span>
              </div>

              {event.time && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Time: {event.time}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{event.teamSize}</span>
            </div>
            {/* {!event.limit && ( */}
              <div className="flex items-center gap-2 text-sm">
                <UserCheck className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {isLoading
                    ? "Loading..."
                    : `${data?.responseCount} Registrations`}
                </span>
              </div>
            {/* )} */}
            {event.limit && (
              <div className="flex items-center gap-2 text-sm">
                <RockingChair className="h-4 w-4 text-muted-foreground" />
                <span
                  className={cn("text-muted-foreground", {
                    "text-red-500": seatsLeft < 1,
                  })}
                >
                  {isLoading
                    ? "Loading..."
                    : seatsLeft > 0
                    ? `${seatsLeft} Seats Left`
                    : "Event Full"}
                </span>
              </div>
            )}
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
                  <span className="prize-text font-bold text-base">
                    {event.prizes.first}
                  </span>
                  <span className="text-muted-foreground">|</span>
                  <span className="prize-text font-bold text-base">
                    {event.prizes.second}
                  </span>
                  <span className="text-muted-foreground">|</span>
                  <span className="prize-text font-bold text-base">
                    {event.prizes.third}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="grow" />
          <div className="mt-6">
            {/* {event.link && showButton && (
              <Button
                asChild
                className="group/button w-full bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                <a
                  href={`/form/${event.id}?title=${event.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedEvent = () => {
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  const projectExpo = events.find((event) => event.title === "Project Expo")!;
  const { data, isLoading } = useResponses(projectExpo.formId);

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 mb-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <img
            src="/expo.jpeg"
            alt="Project Expo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col relative">
          {projectExpo.document && (
            <div className="absolute right-4 top-6 z-0">
              <Button
                variant="outline"
                onClick={() => window.open(projectExpo.document)}
                className="!rounded-full"
              >
                View Rules
              </Button>
            </div>
          )}
          <Badge
            variant="outline"
            className="mb-2 w-fit bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
          >
            Featured Competition
          </Badge>
          <h2 className="text-2xl font-bold mb-3">{projectExpo.title}</h2>
          <p className="text-muted-foreground mb-4">
            {projectExpo.description}
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Fee: {projectExpo.fee}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {projectExpo.teamSize}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <UserCheck className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {isLoading
                  ? "Loading..."
                  : `${data?.responseCount} Registrations`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 self-end mb-1 text-yellow-500" />
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground">
                    1st Prize
                  </span>
                  <span className="prize-text animate-pulse duration-[1500] font-bold text-xl">
                    {projectExpo.prizes?.first}
                  </span>
                </div>
                <span className="text-muted-foreground self-end">|</span>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground">
                    2nd Prize
                  </span>
                  <span className="prize-text animate-pulse duration-[2000] font-bold text-xl">
                    {projectExpo.prizes?.second}
                  </span>
                </div>
                <span className="text-muted-foreground self-end">|</span>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-muted-foreground">
                    3rd Prize
                  </span>
                  <span className="prize-text animate-pulse duration-[3000] font-bold text-xl">
                    {projectExpo.prizes?.third}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button className="group/button w-full bg-destructive hover:bg-destructive/80 text-destructive-foreground">
              Event Full
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HelpDesk = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mb-4">Need Help? Contact Us</h3>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            window.open("https://maps.app.goo.gl/FawHwXkNmVryrmfD6")
          }
          className="!rounded-full"
        >
          View Location
        </Button>
      </div>
      <div className="space-y-3 md:grid grid-cols-2">
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
          <span className="text-muted-foreground">Midhun: +917306726134</span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
          <span className="text-muted-foreground">
            Abishek K: +918089782037
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
          <span className="text-muted-foreground">
            Fida Fathima: +917736506384
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
          <span className="text-muted-foreground">
            Anuroop (IEDC Coordinator): +919400472882
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
          <span className="text-muted-foreground">
            Danishmon N (HOS Electrical): +919400502054
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
          <span className="text-muted-foreground">
            Navaneet A (HOS Electronics): +919074594568
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
          <span className="text-muted-foreground">
            Muhsina T (HOS Civil): +919497345608
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
          <span className="text-muted-foreground">
            Ashokan AN (HOS Mechanical): +919446810407
          </span>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const filteredEvents = events.filter(
    (event) => event.title !== "Project Expo"
  );

  return (
    <div className="min-h-screen bg-[url('../bg-2.jpg')]">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-end mx-auto justify-center">
            <img
              src="/logo.png"
              alt="Hope 25 logo"
              className="w-24 mr-3 -rotate-[20deg]"
            />
            <img src="/name.png" alt="Hope 25 logo" className="mt-5" />
          </div>
          <div>
            <p className="text-xl font-light text-muted-foreground max-w-[600px] mx-auto">
              Igniting innovation, inspiring tomorrow
            </p>
            <p className="text-xl font-bold text-muted-foreground max-w-[600px] mx-auto">
              March 12th, 2025 | 9 AM | GPTC Perinthalmanna
            </p>
          </div>
        </div>

        <FeaturedEvent />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <HelpDesk />
        </div>
      </div>
      <div className="p-8 border-t bg-zinc-900/70">
        <div className="text-center text-foreground  mb-4">ORGANIZED BY</div>
        <div className="flex mx-auto justify-center flex-wrap container gap-8">
          <div className="flex flex-col shrink-0 items-center w-fit">
            <img src="/gpc-logo.png" alt="auto" className="w-16" />
            <p className="text-sm">GPC Perinthalmanna</p>
          </div>
          <div className="flex flex-col shrink-0 items-center w-fit">
            <img src="/iedc-logo.png" alt="auto" className="h-20" />
          </div>
          <div className="flex flex-col shrink-0 items-center w-fit">
            <img src="/iic-logo.png" alt="auto" className="h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
