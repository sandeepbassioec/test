const CategoricalColors = {
    brand: {
        textColor: '#FFFFFF', // Contrasting text color for visibility
        color: '#003C71',
        colorHover: '#062136',
        colorHoverAlpha: '#c8d4df'
    },
    buyer: {
        textColor: '#FFFFFF',
        color: '#009538',
        colorHover: '#23655E',
        colorHoverAlpha: '#c8e6d3'
    },
    seller: {
        textColor: '#FFFFFF',
        color: '#005FB2',
        colorHover: '#003360',
        colorHoverAlpha: '#c8dbec'
    },
    payment: {
        textColor: '#FFFFFF',
        color: '#542F7D',
        colorHover: '#39185D',
        colorHoverAlpha: '#d9d1e1'
    },
    order: {
        textColor: '#FFFFFF',
        color: '#157DAC',
        colorHover: '#1E6C8F',
        colorHoverAlpha: '#cce1ea'
    },
    shipping: {
        textColor: '#FFFFFF',
        color: '#3B8179',
        colorHover: '#108352',
        colorHoverAlpha: '#d4e2e0'
    },
    uncategorized: {
        textColor: '#FFFFFF',
        color: '#4D4E53',
        colorHover: '#2B2C2F',
        colorHoverAlpha: '#838487'
    }
};
const colorTypes = {
    categorical: CategoricalColors
};
const getColors = (type) => {
    return colorTypes[type] || CategoricalColors;
};
export { getColors };
//# sourceMappingURL=color.js.map
