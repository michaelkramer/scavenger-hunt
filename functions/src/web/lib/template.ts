const template = (opts: { body: string; initialState: string }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Employee Directory</title>
        <meta name="description" content="Demonstrates how to dynamically generate images on the server">
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <!-- Custom CSS -->
        <link rel="stylesheet" href="/assets/custom.css" />
      </head>
      <body>
        <div id="root">${opts.body}</div>
      </body>
      <script>
        window.__initialState = ${opts.initialState}
      </script>
      <!-- Client bundle generated by webpack -->
      <script src='/assets/client.bundle.js'></script>
    </html>
    `;
};

export default template;
