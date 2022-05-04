/* eslint-disable @next/next/no-img-element */
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowIcon from '../icons/arrow-right-icon';
import Button from "../ui/button";
import classes from './event-item.module.css';


function EventItem(props){
    const { title, image, date, location, id } = props;

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    const readableDate = new Date(date).toLocaleDateString('en-US', options);

    const formatedAddress = location.replace(',', '\n');
    const exploreEvent = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title} />
           <div className={classes.content}>
           <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{readableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formatedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreEvent}>  
                <span> 
                    Explore Event 
                </span>
                <span className={classes.icon}>
                    <ArrowIcon /> 
                </span>
                </Button>
            </div>
           </div>
        </li>
    )
}

export default EventItem;