import PageObject from '../../page-object';

let {
  clickable, fillable, text
} = PageObject;

export default PageObject.component({
  registrationPanel: clickable('div>div>form>button:eq(1)'),
  email: fillable('#email'),
  username: fillable('#username'),
  register: clickable('#register-button'),
  successMessage: text('.registration-sent')
});
