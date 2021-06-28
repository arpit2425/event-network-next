import {getFeaturedEvents} from '../dummy-data'
import EventList from '../components/events/event-list';
const featuredEvents=getFeaturedEvents();
const HomePage=()=>{
    return <div>
        <EventList items={featuredEvents}></EventList>
    </div>
}
export default HomePage;