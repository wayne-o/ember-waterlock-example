import PageObject from '../page-object';
import loginPanel from '../pages/components/sonatribe-login';

let {
  visitable, clickable
} = PageObject;

export default PageObject.build({
  visit: visitable('/'),
  openLogin: clickable('#trigger-overlay'),
  loginPanel: loginPanel
});
