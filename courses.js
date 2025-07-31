
let coursesData = [];

function initCourses() {
  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTqL2e95bVxD7cJx34xNsGMRnJO8MVaFZQX_Bz-zPpeuCrp2qaYLZxcUWu-ONm1KqsVm-yaiDDSOnrZ/pub?output=tsv',
    simpleSheet: true,
    callback: function(data, tabletop) {
      coursesData = data;
      renderCourses(); // Call your rendering function
    }
  });
}

window.addEventListener('DOMContentLoaded', initCourses);
