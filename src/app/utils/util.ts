export const calculateBMI = (mass: number, height: number): number => {
    return Number((mass / Math.pow(cmToMeter(height), 2)).toFixed(2));
}

const cmToMeter = (cm: number): number => {
    return cm / 100;
};