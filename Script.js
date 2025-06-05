document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", function (e) {
      const radio = this.querySelector('input[type="radio"]');
      if (!radio.checked) {
        radio.checked = true;
        updateTotal(radio.id.replace("unit", ""));
      }
    });
  });

  document.querySelectorAll('input[name="unit"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      updateTotal(this.id.replace("unit", ""));
    });
  });
});

function updateTotal(units) {
  const selectedOption = document.querySelector('input[name="unit"]:checked');
  const totalElement = document.getElementById("total");
  const totalPrice = selectedOption ? selectedOption.value : "0.00";
  totalElement.textContent = `TOTAL: $${totalPrice} USD`;

  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("selected");
  });
  if (selectedOption) {
    selectedOption.closest(".option").classList.add("selected");
  }
}

function addToCart() {
  const selected = document.querySelector('input[name="unit"]:checked');
  if (selected) {
    alert("Your item has been added to the cart successfully.");
  } else {
    alert("Please select an option.");
  }
}
