// js/ui-helpers.js
// دوال واجهة صغيرة مستقلة، تم فصلها من main.js لأنها لا تعتمد على أي متغيرات مشتركة.

/**
 * تعرض إشعارًا مؤقتًا في أعلى الصفحة.
 * @param {string} message - نص الرسالة.
 * @param {string} type - نوع الرسالة (e.g., 'error', 'success').
 */
export function showNotification(message, type = 'error') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.color = '#fff';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.5s ease-in-out';

    if (type === 'error') {
        notification.style.backgroundColor = 'rgba(220, 53, 69, 0.9)';
    } else if (type === 'success') {
        notification.style.backgroundColor = 'rgba(40, 167, 69, 0.9)';
    }

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.addEventListener('transitionend', () => {
            notification.remove();
        });
    }, 3000);
}

export function scrollToBottom() {
    const chatBox = document.querySelector('.chat-box') ||
                    document.querySelector('.chat-messages') ||
                    document.querySelector('#chat-container');
    if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
}
