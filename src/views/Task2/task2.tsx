import { useState } from 'react';
import Questions from '../../components/questions/questions';
import 'react-datepicker/dist/react-datepicker.css';
import './task2.css';
import { formatDate } from '../../utils/utils';


function Task2() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [dateFormat, setDateFormat] = useState<string>('MM/DD/YYYY');
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = new Date(event.target.value);
        setSelectedDate(newDate);
    };
    const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDateFormat(event.target.value);
    };

    return (
        <>
            <div className="question">
                <Questions
                    title="Develop a utility function that takes a JavaScript Date object and returns a formatted date string"
                />
            </div>

            <main className='task2-container'>
                <form>
                    <label>
                        Choose Date:
                        <input
                            type="date"
                            value={selectedDate.toISOString().slice(0, 10)}
                            onChange={handleDateChange}
                        />
                    </label>
                    <br />
                    <label>
                        Choose Date Format:
                        <select value={dateFormat} onChange={handleFormatChange}>
                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                            <option value="YYYY/MMM/DD">YYYY/MMM/DD</option>
                        </select>
                    </label>
                </form>
                <p>Formatted Date: {formatDate(selectedDate, dateFormat)}</p>
            </main>
        </>
    );
}

export default Task2;
