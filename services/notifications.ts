export function sendNotification(text: string = 'Hello World') {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            const noti = new Notification(text, {
                body: 'This is a notification',
                icon: '../assets/img/Associate-logo.png',
                data: { 'url': 'url' },
                tag: 'tag',
            })

            noti.addEventListener('close', (e) => {
                console.log(e)
            })
        }
    })

}

export async function checkNotificationPermission() {
    if (!('Notification' in window)) {
        // Check if the browser supports notifications
        return
    }
    try {
        const permission = await Notification.requestPermission()
        return permission === 'granted'
    } catch (error) {
        console.error('Error checking notification permission:', error)
    }
}