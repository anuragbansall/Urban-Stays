const editListingForm = document.getElementById("edit-listing-form");

editListingForm.addEventListener("submit", async (event) => {
  event.preventDefault();  // Prevent the form from submitting the default way

  // Get form data
  const formData = new FormData(editListingForm);
  const { title, description, price, location, country, image } = Object.fromEntries(formData.entries());

  // Get the listing ID from data-id
  const id = editListingForm.dataset.id;

  try {
    // Send the PUT request
    const response = await fetch(`/api/listings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, price, location, country, image }), // Include image if it's provided
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Success message
    alert("Listing updated successfully!");
    window.location.href = `/listings/${id}`;  // Redirect to the updated listing's page
  } catch (error) {
    console.error(error);
    alert("Error updating listing");
  }
});
