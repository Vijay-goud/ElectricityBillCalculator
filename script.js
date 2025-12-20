let billElement = document.getElementById("billElement");
let totalUnits = document.getElementById("totalUnits");

function calculateUnits() {
  let billElementValue = parseFloat(billElement.value);
  let totalUnitsValue = parseFloat(totalUnits.value);
  let LatestMonthReading = parseFloat(
    document.getElementById("LatestMonthReading").value
  );
  let previousMonthReading = parseFloat(
    document.getElementById("previousMonthReading").value
  );

  if (
    isNaN(billElementValue) ||
    isNaN(totalUnitsValue) ||
    isNaN(LatestMonthReading) ||
    isNaN(previousMonthReading)
  ) {
    alert("⚠️ Please fill all fields with valid numbers!");
    return;
  }

  // Calculate per unit rate
  let unitsConsumed = billElementValue / totalUnitsValue;
  let decimalPart = unitsConsumed - Math.floor(unitsConsumed);
  unitsConsumed =
    decimalPart > 0.5 ? Math.ceil(unitsConsumed) : Math.floor(unitsConsumed);

  // Reading difference
  let totalReading = LatestMonthReading - previousMonthReading;
  let thirdFloorBill = totalReading * unitsConsumed;

  document.getElementById("unitRs").textContent = unitsConsumed + " ₹ per unit";

  document.getElementById("unitDifference").textContent =
    "3rd Floor Reading: " + totalReading + " units";

  document.getElementById("result").textContent =
    "3rd Floor Bill: ₹" + thirdFloorBill.toFixed(2);

  let differenceOfbill = billElementValue - thirdFloorBill;
  document.getElementById("differenceAmount").textContent =
    "Remaining Amount: ₹" + differenceOfbill.toFixed(2);

  // Split among 4 floors
  let EachFloorAmount = differenceOfbill / 4;
  let decimalPart1 = EachFloorAmount - Math.floor(EachFloorAmount);
  EachFloorAmount =
    decimalPart1 > 0.5
      ? Math.ceil(EachFloorAmount)
      : Math.floor(EachFloorAmount);

  document.getElementById("EachFloor").textContent =
    "Each Floor Amount: ₹" + EachFloorAmount;
}


