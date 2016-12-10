$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/2713427.json',
    dataType: 'jsonp',
    success: function(res) {
      let $badgeContainer = $('#badges');
      let $courses = res.courses.completed.forEach(course => {
        $badgeContainer.append(
          `<div class="course">
            <h3>${course.title}</h3>
            <img src="${course.badge}" />
            <a class="btn btn-primary" target="_blank" href="${course.url}">See Course</a>
          </div>`
        );
      });
    }
  });


});
