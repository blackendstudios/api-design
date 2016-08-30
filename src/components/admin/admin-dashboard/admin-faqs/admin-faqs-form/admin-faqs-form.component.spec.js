import adminFaqsFormModule from './admin-faqs-form';

describe('adminFaqsForm component test', () => {
   'use strict';

   let component, scope, label, $componentController;
   
   beforeEach(window.module(adminFaqsFormModule.name));

   beforeEach(inject(($rootScope, _$componentController_) => {
      scope = $rootScope.$new();
      $componentController = _$componentController_;
      label = {name: 'adminFaqsForm'};
   }));

   it('should assign the name bindings to the label object', () => {
      // Here we are passing actual bindings to the component
      component = $componentController('adminFaqsForm',
         null,
         {label: label}
      );
      expect(component.label.name).toBe('adminFaqsForm');
   });
   
});