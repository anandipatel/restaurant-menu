import express from 'express'
import path from 'path'

const app = express()

app.use('/static', express.static(path.resolve('dist')))

app.get('*', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(`<html>
    <head>
        <title>Restaurant Menu</title>
    </head>
    <body>
        <div id="app"></div> 
        <script src="/static/bundle.js" type="text/javascript"></script>   
    </body>
    </html>`)
})

module.exports = app