/*
This function is used to make an element resizable
and draggable. Simply just put 'resize-drag' as the
class name of the element.
*/
interact('.resize-drag')
  .draggable({
    onmove: dragMoveListener,
  })
  .resizable({
    preserveAspectRatio: true,
    edges: { left: true, right: true, bottom: true, top: true },
  })
  .on('resizemove', function (event) {
    var target = event.target,
      x = parseFloat(target.getAttribute('data-x')) || 0,
      y = parseFloat(target.getAttribute('data-y')) || 0;

    // update the element's style
    target.style.width = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  });

/*
This function is used to make an element
and draggable. Simply just put 'draggable' as the
class name of the element.
*/
// target elements with the "draggable" class
interact('.draggable').draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true,
    }),
  ],
  // enable autoScroll
  autoScroll: true,

  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,

    // call this function on every dragend event
    // end(event) {
    // },
  },
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

/*
This function is used to make an element
and resizable. Simply just put 'resizable' as the
class name of the element.
*/
interact('.resizable').resizable({
  edges: { top: true, left: true, bottom: true, right: true },
  listeners: {
    move: function (event) {
      let { x, y } = event.target.dataset;

      x = (parseFloat(x) || 0) + event.deltaRect.left;
      y = (parseFloat(y) || 0) + event.deltaRect.top;

      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        transform: `translate(${x}px, ${y}px)`,
      });

      Object.assign(event.target.dataset, { x, y });
    },
  },
});
