function formatDate(date) {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now - today)/1000);
}
console.log( formatDate(new Date(new Date() - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date() - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date() - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date() - 86400 * 1000)) );
