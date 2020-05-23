# zendesk-chat-plugin
add custom window before showing the main chat window in zendesk chat, this plugin is implementation for a charity website, you can change it for your own use

# use case
allow to filter users based on specific criteria, you may want to direct traffic to custom form to reduce online chat requests

# usage
Step 1: copy css and js to your website directory, you may copy the css and js files explicitly to your exisiting structure
Step 2: add css and js reference in your site

put this line in head tag of your website, assuming you have put the css file in css folder of your website root directory
```
<link href="/css/custom-chat.css" rel="stylesheet" />
```

put this line before </body> tag of your website, assuming you have put the js file in js folder of your website root directory
**important**: place this file after your zendesk snippet url
```
<script src="/scripts/custom-chat.js"> </script>
```

Step 3: put the code snippet in body of your html after your </footer> tag
Step 4: replace [BLOCK] these tags in html file and js file with your own use case
