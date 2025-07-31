let coursesData = [];

async function fetchCourses() {
  try {
    const res = await fetch("https://opensheet.vercel.app/2PACX-1vTqL2e95bVxD7cJx34xNsGMRnJO8MVaFZQX_Bz-zPpeuCrp2qaYLZxcUWu-ONm1KqsVm-yaiDDSOnrZ/Sheet1");
    coursesData = await res.json();
    renderCourses();
    updateCartCount();
  } catch (err) {
    console.error("Failed to fetch courses from Google Sheet", err);
  }
}
