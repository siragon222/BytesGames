import React, { createContext, useState, useEffect } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(() => {
    // Initialize from localStorage or default to Venezuela (BS)
    const savedCurrency = localStorage.getItem('selectedCurrency');
    return savedCurrency ? JSON.parse(savedCurrency) : { name: 'Venezuela', code: 'BS', symbol: 'Bs', factor: 1 };
  });

  useEffect(() => {
    localStorage.setItem('selectedCurrency', JSON.stringify(selectedCurrency));
  }, [selectedCurrency]);

  const updateCurrency = (currency) => {
    let symbol;
    let factor;
    switch (currency.code) {
      case 'BS':
        symbol = 'Bs ';
        factor = 143; // Placeholder: You need to set your actual conversion factor for BS
        break;
      case 'COP':
        symbol = 'COP ';
        factor = 4000; // Placeholder: You need to set your actual conversion factor for COP
        break;
      case 'CLP':
        symbol = 'CLP ';
        factor = 1000; // Placeholder: You need to set your actual conversion factor for CLP
        break;
      case 'PEN': // New case for Peruvian Sol
        symbol = '/S ';
        factor = 4; // Placeholder: You need to set your actual conversion factor for PEN
        break;
      case 'USD':
        symbol = '$ ';
        factor = 1; // USD is the base currency
        break;
      default:
        symbol = '';
        factor = 1; // Default to 1 if currency code is unknown
    }
    setSelectedCurrency({ ...currency, symbol, factor });
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}; 