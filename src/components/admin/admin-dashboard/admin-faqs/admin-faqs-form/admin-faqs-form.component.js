import template from './admin-faqs-form.html';
import controller from './admin-faqs-form.controller';

let adminFaqsFormComponent = {
  template,
  controller,
  bindings: {
    onSave: '&',
    onUpdate: '&',
    question: '<'
  }
};

export default adminFaqsFormComponent;