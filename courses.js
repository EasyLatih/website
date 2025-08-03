
const coursesData = [ /* all existing data remains unchanged */ ];

// Utility functions
function addToCart(courseTitle) {
  let inquiryCart = JSON.parse(localStorage.getItem('inquiryCart')) || [];
  if (!inquiryCart.includes(courseTitle)) {
    inquiryCart.push(courseTitle);
    localStorage.setItem('inquiryCart', JSON.stringify(inquiryCart));
    updateCartCount();
  }
}

function updateCartCount() {
  const inquiryCart = JSON.parse(localStorage.getItem('inquiryCart')) || [];
  document.getElementById("cartCount").textContent = inquiryCart.length;
  const summaryEl = document.getElementById("cartSummary");
  summaryEl.innerHTML = "";
  inquiryCart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "×";
    removeBtn.onclick = () => {
      inquiryCart.splice(index, 1);
      localStorage.setItem('inquiryCart', JSON.stringify(inquiryCart));
      updateCartCount();
    };
    li.appendChild(removeBtn);
    summaryEl.appendChild(li);
  });
}

function renderCourses() {
  const container = document.getElementById("coursesContainer");
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const selectedCategory = document.getElementById("categoryFilter").value;
  const selectedLevel = document.getElementById("levelFilter").value;

  container.innerHTML = "";
  const filteredCourses = coursesData.filter(course => {
    const matchSearch = course["Course Title"].toLowerCase().includes(searchText) ||
                        course["Description"].toLowerCase().includes(searchText);
    const matchCategory = selectedCategory === "" || course["Category"] === selectedCategory;
    const matchLevel = selectedLevel === "" || course["Level"] === selectedLevel;
    return matchSearch && matchCategory && matchLevel;
  });

  const noResultsMessage = document.getElementById("noResultsMessage");

  if (filteredCourses.length === 0) {
    if (noResultsMessage) noResultsMessage.style.display = "block";
  } else {
    if (noResultsMessage) noResultsMessage.style.display = "none";
    filteredCourses.forEach(course => {
      const card = document.createElement("div");
      card.className = "course-card";
      card.innerHTML = `
        <h4>${course["Course Title"]}</h4>
        <p class="details">${course["Description"]}</p>
        <p class="details">
          <strong>Related Law / Act:</strong> ${course["Related Law / Act"]}<br>
          <strong>Level:</strong> ${course["Level"]}<br>
          <strong>Category:</strong> ${course["Category"]}
        </p>
        <button class="inquire-button" onclick="addToCart('${course["Course Title"]}')">Add to Inquiry</button>
      `;
      container.appendChild(card);
    });
  }
}

function sendInquiryToGoogleForm() {
  const inquiryCart = JSON.parse(localStorage.getItem('inquiryCart')) || [];
  if (inquiryCart.length === 0) {
    alert("Your inquiry cart is empty. Please add courses first.");
    return;
  }
  const baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSc_UkVoIW1bUqMsGFV0zbFlauUYZgfdMewSf-6JL69SB5np7w/viewform?usp=pp_url";
  const fieldID = "entry.896601463";
  const selectedCourses = inquiryCart.join(", ");
  const finalURL = `${baseURL}&${fieldID}=${encodeURIComponent(selectedCourses)}`;
  window.open(finalURL, "_blank");
  alert("Your selected courses have been sent to the form.");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  updateCartCount();
  document.getElementById("searchInput").addEventListener("input", renderCourses);
  document.getElementById("categoryFilter").addEventListener("change", renderCourses);
  document.getElementById("levelFilter").addEventListener("change", renderCourses);
});
