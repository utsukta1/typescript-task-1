export function Capitalize(str: string): string {
    return str.toUpperCase();
}

export function Truncate(str: string, length: number): string {
    return str.length > length ? `${str.substring(0, length)}...` : str;
}

export const formatDate = (date: Date, format: string): string => {
    switch (format) {
        case 'MM/DD/YYYY':
            return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        case 'YYYY/MM/DD':
            return `${date.getFullYear()}/${(date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)}/${(date.getDate() < 10 ? '0' : '') + date.getDate()}`;
        case 'YYYY/MMM/DD':
            return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' }).replace(/\s/g, '/').replace(/,/g, '').replace(/(\w+)\s(\d+)/, '$1');
        default:
            return date.toLocaleDateString();
    }
};

export function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

export function convertFahrenheitToCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
}

export function convertCelsiusToKelvin(celsius: number): number {
    return celsius + 273.15;
}

export function convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
}

export function convertFahrenheitToKelvin(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

export function convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin - 273.15) * (9 / 5) + 32;
}

import { useState } from "react";

export const useToggle = (
    initialState: boolean = false
): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initialState);
    const toggle = () => {
        setState((prevState) => !prevState);
    };
    return [state, toggle];
};


export const formatNumberWithOptions = (
    value: number | undefined,
    separator: string,
    precision: number,
    format: string,
    currency: string
): string => {
    if (value === undefined || isNaN(value)) {
        return "Invalid Number";
    }
    const formattedValue = value.toLocaleString(undefined, {
        style: format,
        currency,
        minimumFractionDigits: precision,
        useGrouping: true,
    });
    return formattedValue.replace(/,/g, separator);
};


export interface Tea {
    id: number;
    title: string;
    price: number;
    description: string;
}

export const filterAndSortTea = (
    teaList: Tea[],
    minPrice: number,
    maxPrice: number,
    sortOrder: 'asc' | 'desc',

): Tea[] => {
    const filtered = teaList.filter(tea => tea.price >= minPrice && tea.price <= maxPrice);

    if (sortOrder === 'asc') {
        const ascendingSorted = filtered.sort((a, b) => {
            return a.price - b.price;
        })
        return ascendingSorted;
    }
    else {
        const descendingSorted = filtered.sort((a, b) => {
            return b.price - a.price;
        })
        return descendingSorted;

    }


};







