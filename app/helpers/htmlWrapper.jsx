export function staticHTMLWrapper(reactDom, scriptPath, initialState, css) {
  return `
    <!doctype html>
    <html>
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <link rel="shortcut icon" href="https://assets.pluto.network/favicon.png" />

      <title>Pluto Network | Decentralied scholarly communication</title>
      <meta name="description" content="A dedicated team building digital tools to break down barriers in academia, Pluto Network advances the way science evolves. Join the great march and empower the community."
      />

      <meta itemprop="name" content="Pluto Network | Decentralied scholarly communication">
      <meta itemprop="description" content="A dedicated team building digital tools to break down barriers in academia, Pluto Network advances the way science evolves. Join the great march and empower the community.">
      <meta itemprop="image" content="https://assets.pluto.network/pluto-home-meta.jpg">

      <meta name="twitter:card" content="Pluto Network">
      <meta name="twitter:site" content="@pluto_network">
      <meta name="twitter:title" content="Pluto Network | Decentralied scholarly communication">
      <meta name="twitter:description" content="A dedicated team building digital tools to break down barriers in academia, Pluto Network advances the way science evolves. Join the great march and empower the community.">
      <meta name="twitter:creator" content="@pluto_network">
      <meta name="twitter:image" content="https://assets.pluto.network/pluto-home-meta.jpg">

      <meta property="og:title" content="Pluto Network | Decentralied scholarly communication" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://pluto.network" />
      <meta property="og:image" content="https://assets.pluto.network/pluto-home-meta.jpg" />
      <meta property="og:description" content="A dedicated team building digital tools to break down barriers in academia, Pluto Network advances the way science evolves. Join the great march and empower the community."
      />
      <meta property="og:site_name" content="Pluto Network" />
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
