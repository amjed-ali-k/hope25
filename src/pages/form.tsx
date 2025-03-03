import { Link, useParams } from "react-router-dom";
import { events, useResponses } from "./Index";
import { Link2, Loader2, NotebookTextIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export const FormPage = () => {
  const { formId } = useParams();
  const event = events.find((e) => e.id === Number(formId));

  const { data, isLoading } = useResponses(event?.formId);
  const seatsLeft = event.limit
    ? event.limit - (data?.responseCount ?? 0)
    : null;

  const showButton = event.limit ? seatsLeft > 0 : true;
  const canShow = !isLoading && showButton;

  useEffect(() => {
    if (canShow) {
      const timer = setTimeout(() => {
        window.location.href = event.link;
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [event, canShow]);

  if (!event) {
    return (
      <div className="text-2xl flex justify-center items-center h-screen font-bold mb-4">
        <div className="text-center">
          <NotebookTextIcon className="block mx-auto size-16 mb-2" />
          <p>Form not found</p>
          <Button size="sm" variant="secondary" className="mt-4" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('../bg-2.jpg')] flex items-center justify-center">
      <div className="p-8 border-t flex-col flex items-center bg-zinc-900/70">
        <h1 className="text-center text-2xl font-light">
          <Loader2 className="mr-2 inline size-6 animate-spin" /> Redirecting to{" "}
          {event.title} form...
        </h1>
        {isLoading && (
          <p className="font-bold text-amber-600 animate-pulse duration-700">
            Loading...
          </p>
        )}
        {!isLoading && seatsLeft ? (
          <p className="font-bold text-amber-600 animate-pulse duration-700">
            Only {seatsLeft} seats left!
          </p>
        ) : null}
        {canShow ? (
          <Button size="sm" variant="secondary" className="mt-4" asChild>
            <a href={event.link}>
              <Link2 className="inline" /> Click here if you are not redirected
            </a>
          </Button>
        ) : (
          <Button size="sm" variant="secondary" className="mt-4" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
