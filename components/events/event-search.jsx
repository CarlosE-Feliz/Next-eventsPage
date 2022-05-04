import { useRef } from "react";
import Button from "../ui/button";

import classes from "./event-search.module.css";

function EventSearch(props) {
    const yearInput = useRef();
    const monthInput = useRef();

    const handlerSubmit = (event) => {
        event.preventDefault();

        const selectedYear = yearInput.current.value;
        const selectedMonth = monthInput.current.value;

        props.onSearch(selectedYear, selectedMonth);
    }


    return (
        <form className={classes.form} onSubmit={handlerSubmit}>
            <div className={classes.control}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInput}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInput}>
                        <option value="1">January</option>       
                        <option value="2">February</option>       
                        <option value="3">March</option>       
                        <option value="4">April</option>       
                        <option value="5">May</option>       
                        <option value="6">Jun</option>       
                        <option value="7">July</option>       
                        <option value="8">August</option>       
                        <option value="9">September</option>       
                        <option value="10">October</option>       
                        <option value="11">November</option>       
                        <option value="12">December</option>       
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventSearch;