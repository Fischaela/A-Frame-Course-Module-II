AFRAME.registerComponent('photo-gallery-button', {
  init: function () {
    this.el.addEventListener('click', this.onClick.bind(this));
  },
  onClick: function (event) {
    var id = '#' + this.el.getAttribute('data-image');
    document.querySelector('#panorama').setAttribute('material', 'src', id);
  }
});
