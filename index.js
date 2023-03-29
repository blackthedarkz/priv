const Express = require('express'), App = Express();
App.use(Express.static('views')), App.set('view engine', 'ejs');
const Saves = require('./saves.json');

App.get('/:short_url', async (request, response) => {
    if (Saves.hasOwnProperty(request.params.short_url)) response.render('index', { redirect: Saves[request.params.short_url] });
    else return response.render('404');
});

App.listen(80, () => console.log('[App] Iniciado.'));
