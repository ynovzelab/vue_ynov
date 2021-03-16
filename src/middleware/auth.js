export default function auth({ next, router }) {
    console.log('test');
    if (!localStorage.getItem('token')) {
        return false;
    }
    return next();
}