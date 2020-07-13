import Modifier from 'ember-modifier';

export default class FadeDownModifier extends Modifier {
  didReceiveArguments() {
    const {
      duration,
      delay
    } = this.args.named;

    this.element.animate(
      [{
          opacity: 0,
          transform: 'translateY(-20px)'
        },
        {
          opacity: 1,
          transform: 'translateY(0px)'
        }
      ], {
        duration: duration || 1500,
        delay: delay || 0,
        /*easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        fill: 'backwards'*/
      }
    );
  }
}