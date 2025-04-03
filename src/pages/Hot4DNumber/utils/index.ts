function getYears() {
    const startYear = 1985;
    const currentYear = new Date().getFullYear();
    const years = new Array(currentYear - startYear + 1); // Preallocate memory
  
    for (let i = 0; i < years.length; i++) {
      years[i] = (startYear + i).toString(); // Direct assignment
    }
  
    return years;
  }

  export { getYears }