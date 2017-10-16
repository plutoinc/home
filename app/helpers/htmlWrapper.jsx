export function staticHTMLWrapper(
  reactDom,
  scriptPath,
  initialState,
  css,
) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <link rel="shortcut icon" href="https://dd2gn9pwu61vr.cloudfront.net/favicon.png" />
        <title>Pluto | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'>
        <style type="text/css">${css}</style>
      </head>
      <body>
        <script>window.__INITIAL_STATE__=${initialState}</script>
        <div id="react-app">
          ${reactDom}
        </div>
        <script src="${scriptPath}"></script>
      </body>
    </html>
  `;
}
