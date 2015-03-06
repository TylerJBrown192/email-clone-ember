Emailer.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        subject: this.get('subject'),
        body: this.get('body'),
        address: this.get('address')
      });
      newEmail.save();
      var self = this;
      self.set('subject', "");
      self.set('body', "");
      self.set('address', "");
      this.transitionToRoute('emails')
    }
  }
});
