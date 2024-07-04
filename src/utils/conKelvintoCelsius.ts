export function conKelvintoCelsius(tempInKilvin: number): string {
    const tempInCelsius = tempInKilvin - 273.15;
    return `${Math.floor(tempInCelsius)}°C`;
}