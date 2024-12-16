const messages = [
  "Miss You 💜"
];

function generateRandomNotifications() {
  const notificationCount = 300;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>Memory Overload</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 200);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

function changeTitleAndIcon() {
    document.title = "Memory Overload";
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "New Icon.ico"; // Replace with the path to your new icon
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "New Icon.ico"; // Replace with the path to your new icon
      document.head.appendChild(newFavicon);
    }
}
function handleButtonClick (){
    changeTitleAndIcon()
    generateRandomNotifications()
    const audio = document.getElementById('background-music');
    audio.play()
}