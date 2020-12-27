// Get insurance by year, estimate 3% of decrease of each year of difference from today
export function getInsuranceByYear(year, insurance) {
    const difference = new Date().getFullYear() - year
    return insurance - (( difference * 3 ) * insurance) / 100;;
}

export function getInsuranceByBrand(brand, insurance) {

    switch(brand) {
        case 'european':
            return insurance*1.30;
        case 'american':
            return insurance*1.15;
        case 'asian':
            return insurance*1.05;
        default:
            return insurance;
    }
}

export function getInsuranceByPlan(plan, insurance) {
    switch(plan) {
        case 'basic':
            return insurance*1.20;
        case 'complete':
            return insurance*1.5;
        default:
            return insurance;
    }
}