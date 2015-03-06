Emailer.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        subject: this.get('subject'),
        body: this.get('body'),
        address: this.get('address')
      });
      newEmail.save();
      this.transitionToRoute('emails')
    }
  }
});
