console.log("formatter.js module initialized");
export default function formatCurrency(amount){
    return `$${amount.toFixed(2)}`;
}