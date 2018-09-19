module.exports = app => {
    const { router, controller } = app;
    router.get('/',controller.home.index);
    router.get('/list',controller.news.list);
    router.post('/form',controller.form.post);
}
