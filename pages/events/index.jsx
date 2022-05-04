import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {

    const events = getAllEvents();
    const router = useRouter();

    const handlerFindEvents = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return(
        <div>
            <EventSearch onSearch={handlerFindEvents} />
            <EventList items={events} />
        </div>
    );
}

export default EventsPage;