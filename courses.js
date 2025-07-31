let coursesData = [];

function initCourses() {
  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/1M4ldzpUoBHGbZiLbKJ7nsiwCshUFTwWnjG9s8e98Li8/pub?output=csv',
    simpleSheet: true,
    callback: function(data) {
      coursesData = data;
      renderCourses();
    }
  });
}

window.addEventListener('DOMContentLoaded', initCourses);
