const d = document;
export function observationSection() {
  var sections = document.querySelectorAll('.section');

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset;

  sections.forEach(function(section) {
    var sectionOffset = section.offsetTop;

    if (scrollPosition >= sectionOffset) {
      section.classList.add('hidden');
    } else {
      section.classList.remove('hidden');
    }
  });
});

  

}