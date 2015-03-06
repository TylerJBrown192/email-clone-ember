Emailer.Router.map(function() {
  this.resource('emails', {path: '/'});
  this.resource('email', {path: ':email_id'});
  this.resource('new-email');
});
