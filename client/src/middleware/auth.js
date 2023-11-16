export default function auth({ next, router }) {
    if (!sessionStorage.getItem('user')) {
      return router.push({ name: 'signin' });
    }
  
    return next();
  }