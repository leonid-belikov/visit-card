// Grid spotlight: highlights the coordinate grid around the cursor.
// Only for devices with a precise pointer that can hover (mouse / trackpad).
(function () {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll('.grid-bg').forEach(function (el) {
    var frame = 0;
    var x = 0;
    var y = 0;

    function apply() {
      frame = 0;
      el.style.setProperty('--mx', x + 'px');
      el.style.setProperty('--my', y + 'px');
    }

    el.addEventListener('pointermove', function (e) {
      var rect = el.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
      if (!frame) frame = requestAnimationFrame(apply);
      el.classList.add('is-spot');
    });

    el.addEventListener('pointerleave', function () {
      el.classList.remove('is-spot');
    });
  });
})();
