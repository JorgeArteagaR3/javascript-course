function calculateDiscount(price, discount) {
    const pricePercentageWithDiscount = 100 - discount;
    const priceWithDiscount = (price * pricePercentageWithDiscount) / 100;
    return priceWithDiscount;
}
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const value1 = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const value2 = inputDiscount.value;
    const priceWithDiscount = calculateDiscount(value1, value2);
    const finalPrice = document.getElementById("ResultPrice");
    finalPrice.innerHTML = priceWithDiscount + "$";
}
