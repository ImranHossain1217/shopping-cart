function getTextElementById(elementId) {
  const element = document.getElementById(elementId);
  const elementString = element.innerText;
  const elementValue = parseFloat(elementString);
  return elementValue;
}
document.getElementById("case_plus_btn").addEventListener("click", function () {
  const caseInputField = document.getElementById("case_input_field");
  const caseInputValueStr = caseInputField.value;
  const caseInputValue = parseInt(caseInputValueStr);

  const newInputvalue = caseInputValue + 1;
  caseInputField.value = newInputvalue;
  const caseTotalPrice = newInputvalue * 59;
  const caseTotalPriceElement = document.getElementById("case_total_price");
  caseTotalPriceElement.innerText = caseTotalPrice;
  // subtotal
  const phoneTotal = getTextElementById("case_total_price");
  const caseTotal = getTextElementById("phone_total_price");
  const subTotal = phoneTotal + caseTotal;
  const subTotalElement = document.getElementById("sub_total");
  const subTotalStr = subTotalElement.innerText;
  const subTotalPrice = parseFloat(subTotalStr);
  subTotalElement.innerText = subTotal;
});
document
  .getElementById("case_minus_btn")
  .addEventListener("click", function () {
    const caseInputField = document.getElementById("case_input_field");
    const caseInputValueStr = caseInputField.value;
    const caseInputValue = parseInt(caseInputValueStr);

    const newInputvalue = caseInputValue - 1;
    caseInputField.value = newInputvalue;

    const caseTotalPrice = newInputvalue * 59;
    const caseTotalPriceElement = document.getElementById("case_total_price");
    caseTotalPriceElement.innerText = caseTotalPrice;
    if (newInputvalue <= 1) {
      caseInputField.value = 1;
      caseTotalPriceElement.innerText = 59;
    }
    // sbtotal
    const phoneTotal = getTextElementById("case_total_price");
    const caseTotal = getTextElementById("phone_total_price");
    const subTotal = phoneTotal + caseTotal;
    const subTotalElement = document.getElementById("sub_total");
    const subTotalStr = subTotalElement.innerText;
    const subTotalPrice = parseFloat(subTotalStr);
    subTotalElement.innerText = subTotal;
  });
