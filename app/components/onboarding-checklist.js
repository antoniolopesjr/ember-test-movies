import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
//import config from 'celulain/config/environment';
//import initHelpHero from "helphero";
//const HelpHero = initHelpHero(config.APP.helpHero.appId);

const tours = {
  step1:  [
    {
      attachTo: {
        element:'.index',
        on: 'bottom'
      },
      // beforeShowPromise: function() {
      //   return new Promise(function(resolve) {
      //     Ember.run.scheduleOnce('afterRender', this, function() {
      //       window.scrollTo(0, 0);
      //       this.get('documents.firstObject').set('isSelected', true);
      //       resolve();
      //     });
      //   });
      // },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Sair',
          type: 'cancel'
        },
        /*{
          classes: 'shepherd-button-primary',
          text: 'Voltar',
          type: 'back'
        },*/
        {
          classes: 'shepherd-button-primary',
          text: 'Avançar',
          type: 'next'
        }
      ],

      cancelIcon: {
        enabled: true
      },
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      modal: true,
      useModalOverlay: true,
      id: 'intro',
      scrollTo: true,
      title: 'Ola! Bem vindo ao célula.in!',
      text: 'O célula.in é feito para você e todas as pessoas da sua igreja! <br> <br> Vamos ver como é possivel criar um novo cadastro de uma pessoa?',
      when: {
        show: () => {
          window.console.log('show step');
        },
        hide: () => {
          window.console.log('hide step');
        }
      },
      //useModalOverlay: true,
    },

    {
      attachTo: {
        element:'.nav-bar__main-btn',
        on: 'bottom'
      },
      // beforeShowPromise: function() {
      //   return new Promise(function(resolve) {
      //     Ember.run.scheduleOnce('afterRender', this, function() {
      //       window.scrollTo(0, 0);
      //       this.get('documents.firstObject').set('isSelected', true);
      //       resolve();
      //     });
      //   });
      // },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      cancelIcon: {
        enabled: true
      },
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      modal: true,
      id: 'intro',
      scrollTo: false,
      title: 'Esse é o card',
      text: 'Ember-Shepherd is a JavaScript library for guiding users through your Ember app.',
      when: {
        show: () => {
          window.console.log('show step');
        },
        hide: () => {
          window.console.log('hide step');
        },
        complete: () => {
          window.console.log('NEXT', 'to no passo 2');
        }
      }
    },

    {
      attachTo: {
        element:'.sidebar-link__admin-people',
        on: 'bottom'
      },
      // beforeShowPromise: function() {
      //   return new Promise(function(resolve) {
      //     Ember.run.scheduleOnce('afterRender', this, function() {
      //       window.scrollTo(0, 0);
      //       this.get('documents.firstObject').set('isSelected', true);
      //       resolve();
      //     });
      //   });
      // },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      cancelIcon: {
        enabled: true
      },
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      modal: true,
      id: 'intro',
      scrollTo: false,
      title: 'Área pessoas',
      text: 'Ember-Shepherd is a JavaScript library for guiding users through your Ember app.',
      when: {
        show: () => {
          window.console.log('show step');
        },
        hide: () => {
          window.console.log('hide step');
        }
      }
    }
  ],
  step2: [],
  step3: [
    {
      attachTo: {
        element:'.index-container',
        on: 'bottom'
      },
      // beforeShowPromise: function() {
      //   return new Promise(function(resolve) {
      //     Ember.run.scheduleOnce('afterRender', this, function() {
      //       window.scrollTo(0, 0);
      //       this.get('documents.firstObject').set('isSelected', true);
      //       resolve();
      //     });
      //   });
      // },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      cancelIcon: {
        enabled: true
      },
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      modal: true,
      id: 'intro',
      scrollTo: false,
      title: 'Bem vindo ao célula.in!',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quas quo pariatur ipsum quam labore consequatur quis, corrupti quasi! Incidunt optio et quisquam porro numquam sequi, veniam, sapiente nemo itaque.',
      when: {
        show: () => {
          window.console.log('show step');
        },
        hide: () => {
          window.console.log('hide step');
        }
      }
    },

    {
      attachTo: {
        element:'.nav-bar__main-btn',
        on: 'bottom'
      },
      // beforeShowPromise: function() {
      //   return new Promise(function(resolve) {
      //     Ember.run.scheduleOnce('afterRender', this, function() {
      //       window.scrollTo(0, 0);
      //       this.get('documents.firstObject').set('isSelected', true);
      //       resolve();
      //     });
      //   });
      // },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      cancelIcon: {
        enabled: true
      },
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      modal: true,
      id: 'intro',
      scrollTo: false,
      title: 'Esse é o card',
      text: 'Ember-Shepherd is a JavaScript library for guiding users through your Ember app.',
      when: {
        show: () => {
          window.console.log('show step');
        },
        hide: () => {
          window.console.log('hide step');
        },
        complete: () => {
          window.console.log('NEXT', 'to no passo 2');
        }
      }
    },

    {
      attachTo: {
        element:'.sidebar-link__admin-people',
        on: 'bottom'
      },
      // beforeShowPromise: function() {
      //   return new Promise(function(resolve) {
      //     Ember.run.scheduleOnce('afterRender', this, function() {
      //       window.scrollTo(0, 0);
      //       this.get('documents.firstObject').set('isSelected', true);
      //       resolve();
      //     });
      //   });
      // },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      cancelIcon: {
        enabled: true
      },
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      modal: true,
      id: 'intro',
      scrollTo: false,
      title: 'Área pessoas',
      text: 'Ember-Shepherd is a JavaScript library for guiding users through your Ember app.',
      when: {
        show: () => {
          window.console.log('show step');
        },
        hide: () => {
          window.console.log('hide step');
        }
      }
    }
  ],
  step4: [],
  step5: [],
  step6: [],
  step7: [],
  step8: []
};

export default class OnboardingCheckListController extends Component{
//export default Component.extend({
  classNames= ['onboarding-checklist']

  store= service()

  tour= service()

  isOpen= false

  isLoading= false

  

    //watchVideo(/*step*/) {
    //  this.set('isOpen', false);
    //},

    // startTour(step) {
    //   if (step.get('hasTour') === true) {
    //     this.set('isOpen', false);
    //     HelpHero.startTour(step.get('tourId'));
    //   }
    // }

    @action
    startTour() {
      /*this.get('tour').addSteps(tours[step.get('id')]).then(() => {
        this.get('tour').start();
      });*/
      this.get('tour').set('defaultStepOptions', {
        classes: 'custom-class-name-1 custom-class-name-2',
        highlightClass: 'highlight',
        scrollTo: {
          behavior: 'smooth',
          block: 'center'
        },
        cancelIcon: {
          enabled: true,
        },
        modal: true,
        useModalOverlay: true
      });
      this.get('tour').addSteps(tours['step1']).then(() => {
        this.get('tour').start();
      });
    }
  
}
