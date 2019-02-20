---
id: Events
title: رویدادها (Events)
sidebar_label: رویدادها (Events)
---

جاوااسکریپت در مرورگر از مدل برنامه نویسی رویداد محور پیروی میکند.
همه چیز با دنبال کردن یک رویداد شروع میشه. در این بخش به معرفی و نحوه مدیریت رویدادها در جاوااسکریپت خواهیم پرداخت.

این رویداد میتونه لود شدن DOM باشه، یا به اتمام رسیدن یک درخواست API، یا کلیک کردن بر روی یک المنت یا اسکرول کردن صفحه باشه، حتی میتونه تایپ کردن یوزر بر روی کیبرد باشه.

حالت های بسیار زیادی از رویدادها داریم.

## Mauris In Code

```js
const link = document.getElementById("my-link");
link.addEventListener("mousedown", event => {
  // process the event
  // ...
  event.stopPropagation();
});
```

## Nulla

Nulla facilisi. Maecenas sodales nec purus eget posuere. Sed sapien quam, pretium a risus in, porttitor dapibus erat. Sed sit amet fringilla ipsum, eget iaculis augue. Integer sollicitudin tortor quis ultricies aliquam. Suspendisse fringilla nunc in tellus cursus, at placerat tellus scelerisque. Sed tempus elit a sollicitudin rhoncus. Nulla facilisi. Morbi nec dolor dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras et aliquet lectus. Pellentesque sit amet eros nisi. Quisque ac sapien in sapien congue accumsan. Nullam in posuere ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin lacinia leo a nibh fringilla pharetra.

## Orci

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin venenatis lectus dui, vel ultrices ante bibendum hendrerit. Aenean egestas feugiat dui id hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur in tellus laoreet, eleifend nunc id, viverra leo. Proin vulputate non dolor vel vulputate. Curabitur pretium lobortis felis, sit amet finibus lorem suscipit ut. Sed non mollis risus. Duis sagittis, mi in euismod tincidunt, nunc mauris vestibulum urna, at euismod est elit quis erat. Phasellus accumsan vitae neque eu placerat. In elementum arcu nec tellus imperdiet, eget maximus nulla sodales. Curabitur eu sapien eget nisl sodales fermentum.

## Phasellus

Phasellus pulvinar ex id commodo imperdiet. Praesent odio nibh, sollicitudin sit amet faucibus id, placerat at metus. Donec vitae eros vitae tortor hendrerit finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vitae purus dolor. Duis suscipit ac nulla et finibus. Phasellus ac sem sed dui dictum gravida. Phasellus eleifend vestibulum facilisis. Integer pharetra nec enim vitae mattis. Duis auctor, lectus quis condimentum bibendum, nunc dolor aliquam massa, id bibendum orci velit quis magna. Ut volutpat nulla nunc, sed interdum magna condimentum non. Sed urna metus, scelerisque vitae consectetur a, feugiat quis magna. Donec dignissim ornare nisl, eget tempor risus malesuada quis.
