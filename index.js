const markButton = document.getElementById('mark-button');
const notification = document.getElementsByClassName('notification');

function notificationRead() {
    const notification = document.getElementsByClassName('notification');
    const count = document.getElementById('count');
    const readButton = document.getElementById('mark-button');

    if (count.innerText !== '0') {
        for (let i = 0; i < notification.length; i++) {
            if (notification[i].classList.contains('unread')) {
                notification[i].classList.remove('unread');
                notification[i].classList.add('read');
            }
        }
    
        count.innerText = '0';
        
        readButton.innerText = 'Mark all as unread'; 
        console.log('code worked');
    } else if (count.innerText === '0') {
        for (let i = 0; i < notification.length; i++) {
            if (notification[i].classList.contains('read')) {
                notification[i].classList.remove('read');
                notification[i].classList.add('unread');
            }
        }

        count.innerText = notification.length.toString();
        
        readButton.innerText = 'Mark all as read';
        console.log('code worked1');
    }
}

markButton.addEventListener('click', notificationRead);

