export default () => {
  apos.util.widgetPlayers.collapse = {
    selector: '[data-collapse-widget]',
    player: function(el) {
      // Add player code
      console.log(el);
      const color = el.dataset.color || 'purple';

      // Find our button
      const btn = el.querySelector('[data-collapse-button]');
      // Find our hidden text
      const target = el.querySelector('[data-collapse-detail]');

      btn.onclick = () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        // Update the button's aria attribute
        btn.setAttribute('aria-expanded', !expanded);
        // Update the `hidden` attribute on the detail
        target.hidden = expanded;
      };
    }
  };
};
