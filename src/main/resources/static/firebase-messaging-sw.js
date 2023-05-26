self.addEventListener('push', event => {
    const data = event.data.json();
    console.log(data);
    const title = data.notification.title;
    const body = data.notification.body;
    event.waitUntil(
        self.registration.showNotification(title, {
            body: body
        })
    )
});