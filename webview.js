/*--
const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
--*/

module.exports = (Ferdi) => {
  /*--
  // if the user is on gmail's landing page, go to the login page.
  if (location.hostname == 'www.google.com' && location.href.includes('gmail/about/')) {
    location.href = 'https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/';
  }
  --*/

  const getMessages = function getMessages() {
    let count = 0;

    const inboxLinks = document.getElementsByClassName('inmail');
    if (inboxLinks.length > 0) {
      const unreadCounts = inboxLinks[0].getElementsByClassName('new-mess');
      if (unreadCounts.length > 0) {
        count = Ferdi.safeParseInt(unreadCounts[0].textContent);
      }
    }

    // set Ferdi badge
    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);

  //-- Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
