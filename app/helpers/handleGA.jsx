import ReactGA from 'react-ga';

export function trackAndOpenLink (url, from) {
  ReactGA.event({
    category: 'link-click',
    action: `click-from-${from}`,
    label: url,
  });
  window.open(url, '_blank');
};

export function trackAndOpenLinkInCurrentTab (url, from) {
  ReactGA.event({
    category: 'link-click',
    action: `click-from-${from}`,
    label: url,
  });
  window.location = url;
};

export function trackAction (path, from) {
  ReactGA.event({
    category: 'link-click',
    action: `click-from-${from}`,
    label: path,
  });
}
