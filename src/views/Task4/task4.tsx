import React, { useState, useCallback, useMemo } from 'react';
import Questions from '../../components/questions/questions';
import './task4.css';
import { formatNumberWithOptions } from '../../utils/utils';

interface NumberFormatProps {
    value: number;
    userSeparator: string;
}

const Task4: React.FC<NumberFormatProps> = ({ userSeparator = ',' }) => {
    const [inputValue, setInputValue] = useState('');
    const [precision, setPrecision] = useState(2);
    const [format, setFormat] = useState('decimal');
    const [currency, setCurrency] = useState('USD');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handlePrecisionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const precisionValue = parseInt(event.target.value);
        setPrecision(isNaN(precisionValue) ? 0 : precisionValue);
    };

    const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormat(event.target.value);
    };

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(event.target.value);
    };

    const formattedNumber = useMemo(() => {
        return formatNumberWithOptions(
            parseInt(inputValue) || undefined,
            userSeparator,
            precision,
            format,
            currency
        );
    }, [inputValue, userSeparator, precision, format, currency]);

    const memoizedInputChange = useCallback(handleInputChange, []);
    const memoizedPrecisionChange = useCallback(handlePrecisionChange, []);
    const memoizedFormatChange = useCallback(handleFormatChange, []);
    const memoizedCurrencyChange = useCallback(handleCurrencyChange, []);

    return (
        <>
            <div className="question">
                <Questions
                    title="Develop a utility function to format a number with commas as a specific separator."
                />
            </div>
            <main className='container'>
                <div>
                    <div className='input'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={memoizedInputChange}
                            placeholder="Enter number"
                        />
                        <input
                            type="number"
                            value={precision}
                            onChange={memoizedPrecisionChange}
                            placeholder="Precision"
                        />
                    </div>

                    <div className='options'>
                        <select value={format} onChange={memoizedFormatChange}>
                            <option value="decimal">Decimal</option>
                            <option value="percent">Percent</option>
                            <option value="currency">Currency</option>
                        </select>
                        <select value={currency} onChange={memoizedCurrencyChange}>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>

                    <p>
                        {inputValue !== '' && !isNaN(parseInt(inputValue)) ? (
                            `Formatted Number: ${formattedNumber}`
                        ) : (
                            'Please enter a valid number'
                        )}
                    </p>
                </div>
            </main>
        </>
    );
};

export default Task4;
