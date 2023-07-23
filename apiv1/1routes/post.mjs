import express from 'express';
let router = express.Router()

// GET     /api/post/:userId
router.get('/post', (req, res, next) => {
    
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        </meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        </meta>
        <title>Post</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        </link>
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <style>
    *{
        font-family: "Poppins", monospace;
        font-weight: bold;
    }
    
    html {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 1em;
    }
    
    body{
        background-color: #80d2f3;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: center;
        row-gap: 2em;
        padding: 2em 1em;
        margin: 0em;
        max-width: 320px;
        border: 3px solid #000;  
        height: 656px;
    }
    
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        margin: 0em;
    }
    
    .center{
        width: 100%;
        text-align: center;
    }
    
    .icon{
        font-size: 400%;
    }
    
    a{
        color: #fff;
        text-decoration: none !important;
    }
    
    row{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        column-gap: 1em;
        width: 100%;
        flex-wrap: wrap;
        row-gap: 1em;
    }
    
    table{
        border: 3px solid #000000;
    }
    
    td{
        border-bottom: 1px solid #fff !important;
        border-right: 1px solid #fff !important;
        font-size: 0.65em !important;
        padding: 0.4em;
        text-align: left;
        border-collapse: collapse !important;
    }
    
    @media only screen and (max-width: 350px) {
        body {
            height: 600px;
        }
    }

    </style>
    </head>
    <body>
    <h1 class="center bi bi-file-post-fill icon"></h1>
        <h1 class="center"> Post Version 2.0</h1>
        <h3 class="center">This Is Post Page</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Salman&copy;</p>
    <table>
        <tr>
            <td>1</td>
            <td>Login V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/login"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Login V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/login"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Signup V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/signup"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Signup V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/signup"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Feed V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/feed"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Feed V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/feed"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Post V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/post"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Post V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/post"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Posts V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/posts"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Posts V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/posts"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Comment V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/comment"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Comment V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/comment"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>7</td>
            <td>Comments V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/comments"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Comments V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/comments"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
    </table>


        
        <a class="center" href="https://dhedhi.cyclic.app">Back To Home</a>
        
<script>
            setInterval(() => {
                let currentTime = moment().format("dddd MMMM Do YYYY");
    
                document.getElementById("date").innerText = currentTime;
            }, 1);
        </script>
    </body>
    </html>`);

        })


        // GET     /api/posts/:userId
router.get('/posts/:userId/', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        </meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        </meta>
        <title>Posts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>
        <!-- font -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
        <!-- icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        </link>
        <!-- moment js -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <style>
    *{
        font-family: "Poppins", monospace;
        font-weight: bold;
    }
    
    html {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2em 1em;
    }
    
    body{
        background-color: #80d2f3;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: center;
        row-gap: 2em;
        padding: 2em 1em;
        margin: 0em;
        max-width: 320px;
        border: 3px solid #000;
        height: 656px;
    }
    
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        margin: 0em;
    }
    
    .center{
        width: 100%;
        text-align: center;
    }
    
    .icon{
        font-size: 400%;
    }
    
    a{
        color: #fff;
        text-decoration: none !important;
    }
    
    row{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        column-gap: 1em;
        width: 100%;
        flex-wrap: wrap;
        row-gap: 1em;
    }
    
    table{
        border: 3px solid #000000;
    }
    
    td{
        border-bottom: 1px solid #fff !important;
        border-right: 1px solid #fff !important;
        font-size: 0.65em !important;
        padding: 0.4em;
        text-align: left;
        border-collapse: collapse !important;
    }
    
    @media only screen and (max-width: 350px) {
        body {
            height: 600px;
        }
    }

    </style>
    </head>
    <body>
    <h1 class="center bi bi-file-post-fill icon"></h1>
        <h1 class="center"> Posts Version 2.0</h1>
        <h3 class="center">This Is Posts Page</h3>
        <h3 class="center" id="date"></h3>
        <p class="center">Thanks For Visiting Regards! Muhammad Salman&copy;</p>
      <table>
        <tr>
            <td>1</td>
            <td>Login V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/login"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Login V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/login"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Signup V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/signup"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Signup V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/signup"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Feed V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/feed"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Feed V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/feed"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Post V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/post"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Post V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/post"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>5</td>
            <td>Posts V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/posts"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Posts V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/posts"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>6</td>
            <td>Comment V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/comment"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Comment V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/comment"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
        <tr>
            <td>7</td>
            <td>Comments V1</td>
            <td><a href="https://dhedhi.cyclic.app/api/v1/comments"><i class="bi bi-arrow-up-right-square"></i></a></td>
            <td>Comments V2</td>
            <td><a href="https://dhedhi.cyclic.app/api/v2/comments"><i class="bi bi-arrow-up-right-square"></i></a></td>
        </tr>
    </table>


        
        <a class="center" href="https://dhedhi.cyclic.app">Back To Home</a>
        
<script>
            setInterval(() => {
                let currentTime = moment().format("dddd MMMM Do YYYY");
    
                document.getElementById("date").innerText = currentTime;
            }, 1);
        </script>
    </body>
    </html>`);

        })


 export default router  
