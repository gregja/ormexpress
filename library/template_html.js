

module.exports = function template (title='no title', divcontent='') {

return  `<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>${title}</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/d3.min.js"></script>
    </head>
    <body>
        <div class="container">
            <div id="body-page">${divcontent}</div>
        </div>
    </body>
</html>`;
    
};

