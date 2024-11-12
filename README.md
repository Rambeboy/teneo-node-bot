### TENEO EXTENSION NODE BOT

![TRWA](assets/img1.jpg)

---

## Prerequisite

- Git
- Node JS (v22)

---

## BOT FEATURE

- Multi Account 
- Proxy Support (HTTP / SOCKS5)
- Auto Run Teneo Node


---

## TENEO EXTENSION NODE

Airdrop
New Airdrops: Teneo Node Ektension 

- Download Extension : [Download](https://chromewebstore.google.com/detail/teneo-community-node/emcclcoaglgcpoognfiggmhnhgabppkm)

- Install Extension

- Login / Create Account

- Enter Refferal Code :
```bash
KFqtX
```
- Verify Email

- Run Nodes Ektension 

- LFG


---

## Setup & Configure BOT

### Linux

1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/teneo-node-bot.git && cd teneo-node-bot
   ```
2. Install dependencies
   ```
   npm install && npm run setup
   ```
3. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
4. Configure the bot config
   ```
   nano config/config.js
   ```
5. Configure the proxy
   ```
   nano config/proxy_list.js
   ```
6. Run Bot
   ```
   npm run start
   ```
   
---

### Windows

1. Open your `Command Prompt` or `Power Shell`.

2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/teneo-node-bot.git && cd teneo-node-bot
   ```
3. Install dependencies
   ```
   npm install && npm run setup
   ```
5. Navigate to `teneo-node-bot` directory. 
6. Navigate to `accounts` folder and rename `accounts_tmp.js` to `accounts.js`.
7. Now open `acccounts.js` and setup your accounts.
8. Navigate to `config` and adjust the `config.js` as needed.
9. Also Configure proxy if you want to use proxy, by open `proxy_list.js`. (if you have 5 accounts, proxy is required)
10. Back to `teneo-node-bot` directory.
11. To start the app open your `Command Prompt` or `Power Shell`
12. Run Bot
    ```
    npm run start
    ```

---

## Update Bot

To update bot follow this step :
1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
2. start the bot


---

## IMPORTANT NOTE (READ IT THIS IS NOT DECORATION)

DWYOR

How can I get Teneo Points?
Reward distribution varies based on your contribution. You can collect Teneo Points through connecting your Node or inviting new people to our network. The points are distributed as the following:

Invite a Friend
Points per Referral	
5,000	
Points per Invitee
2,500

Node Connectivity
Points per Heartbeat
25
Max Points per Day
2,400

*Points are credited when the invitee has 10 successful heartbeats.
**Each hour consists of 4 heartbeats that evaluate if your Node is connected and successfully running. Please note that the points model can change at any time.

Teneo Using Web Socket, so make sure you only run 1 accounts session, example if you run bot using account A, dont run account A on your browser extension.

**USE PROXY IF YOU RUN MULTIPLE ACCOUNTS**

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
