# [Discord Clone](https://discord-clone-app-production.up.railway.app/)
<img width="846" alt="Screenshot 2023-10-25 at 11 23 37 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/d0e10f53-594c-4fed-b594-c1596730c58c">
<img width="846" alt="Screenshot 2023-10-25 at 11 38 00 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/4a604511-f0c7-4e75-8127-1580d377d5a7">


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features:

- Real-time messaging using Socket.io
- Send attachments as messages using UploadThing
- Delete & Edit messages in real time for all users
- Create Text, Audio and Video call Channels
- 1:1 conversation between members
- 1:1 video calls between members
- Member management (Kick, Role change Guest / Moderator)
- Unique invite link generation & full working invite system
- Infinite loading for messages in batches of 10 (tanstack/query)
- Server creation and customization
- Full responsivity and mobile UI
- Light / Dark mode
- Websocket fallback: Polling with alerts
- ORM using Prisma
- MySQL database using Planetscale
- Authentication with Clerk

## Project Description
-Application allows for real time messaging in groups using channels inside Servers. Invite links are automatically generated and can be regenerated by admins and moderators to invalidate previous ones:

<img width="260" alt="Screenshot 2023-10-25 at 11 12 07 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/46328e10-0ae9-4ea0-b37b-024ae1ec604c">

-Server Admins can delete messages, manage members, change server name and image, and manage channels. Moderators can manage channels and delete messages. All members can leave a server and edit or delete their own messages.

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img width="239" label="Admin Permissions" alt="Screenshot 2023-10-25 at 10 55 58 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/cbda573e-976a-4ec3-8463-d8b38efeb66c">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<img width="238" alt="Screenshot 2023-10-25 at 10 55 26 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/a70f9eb8-9e6d-4b7a-a333-c309ee54d8a0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<img width="400" alt="Screenshot 2023-10-25 at 11 24 42 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/b25eef49-ae7f-4a34-9777-9a57ebb5103b">
<img width="1486" alt="Screenshot 2023-10-25 at 11 25 58 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/509f7601-7c74-4f36-8862-355b1b4a5fb2">

-File uploads for pdfs in chat messages and channel messages, as well as channel images, server images, and profile images managed with uploadthing

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img width="250" alt="Screenshot 2023-10-25 at 11 29 41 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/f930df6c-bec7-432a-881b-9a553da464c2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
<img width="250" alt="Screenshot 2023-10-25 at 11 29 54 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/68025bde-87dc-41ee-b245-1ff8a60ed151">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<img width="250" alt="Screenshot 2023-10-25 at 11 30 03 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/21b4c804-32fa-4595-8609-c9453c73fbed">

## Coding Decisions
- Socket Io is used to provide live updates to users, an important consideration was socket errors when using the app router in newer versions of nextjs api. Due to this the pages api router is used specifically for all socket api calls. The fallback is using polling every second when the socket is not connected to get recent messages and to send them.
  
- Tailwind css is used due to it not needing redundant css files and inline styles when differentiating between styles with dark and light mode. Tailwind also allows for hover effects in many buttons and portions of the app without needing to create new eventhandlers for each separate effect/location. Conditional styling using tailwind and cn function also removes need for multiple portions in a css file. Responsive design is built into tailwind's modifiers.

- Clerk allows for simple and quick user authentication. It is an easy solution to make sure users are able to sign in through many apps, without needing to create separate keys and secrets for each individual OAuth credential. Redirecting users to a sign in is also simple if a non user tries to visit a restricted page.

- uploadthing has file hosting and is built to be compatible with Nextjs and Typescript. Rapid upload and link creation allows easy file and image sharing in both messages as well as the images for channels and servers. Built in UI is easily modifiable to fit application needs.

<img width="1479" alt="Screenshot 2023-10-25 at 11 58 56 PM" src="https://github.com/mihirp11/discord-clone-app/assets/114366288/9fb8ce8d-ff49-4308-a9d8-3547b3a5069c">

- LiveKit provides a way to create audio and video calls between either two users or with a whole channel. LiveKits components are pre-styled and can be included in the app quickly  
