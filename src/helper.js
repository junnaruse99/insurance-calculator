// Get insurance by year, estimate 3% of decrease of each year of difference from today
export function getInsuranceByYear(year, insurance) {
    const difference = new Date().getFullYear() - year
    return insurance - (( difference * 3 ) * insurance) / 100;;
}

export function getInsuranceByBrand(brand, insurance) {

    switch(brand) {
        case 'European':
            return (insurance*1.30).toFixed(2);
        case 'American':
            return (insurance*1.15).toFixed(2);
        case 'Asian':
            return (insurance*1.05).toFixed(2);
        default:
            return insurance;
    }
}

export function getInsuranceByPlan(plan, insurance) {
    switch(plan) {
        case 'Basic':
            return (insurance*1.20).toFixed(2);
        case 'Complete':
            return (insurance*1.5).toFixed(2);
        default:
            return insurance;
    }
}