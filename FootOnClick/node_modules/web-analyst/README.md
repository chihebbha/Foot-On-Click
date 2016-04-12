
# Web-Analyst
Web Analyst is a simple back-end tracking system to measure your web app performances..

## Installation
   
npm install web-analyst


## Note

It is recommended to install the package locally.


## Usage

    // Load the library
    var webAnalyst = require('web-analyst');

    // Initialize with options
    webAnalyst.init({
      ignoreIPs: ['192.168.x.x'],
      ignoreRoutes: ['/stats','favicon'],
      ignoreExtensions: ['.map'],
      dataDir: './'
    });

    // Start the engine
    app.use(webAnalyst.track());

    // Analytics will be available at: http://yoursite.com/stats
    // Note that you might want to provide some sort of authentication
    // in order for this page to be available only by you.
    app.get('/stats', webAnalyst.render());


## Usage with authentication page

    To protect access to your page, the process is slightly different.
    You would need to load a session manager (In this example cookie-session is used).
    
    var cookieSession = require('cookie-session');
    app.use(cookieSession({
        name: 'session',
        keys: ['key1', 'key2']
    }));

    // Initialize with options users (Array of authorized users)
    webAnalyst.init({
        // List of options
        // ...: ...
        // ---------------------
        users: [{
            username: 'johndoe',
            password: 'demopass'
        },
        {
            username: 'someoneelse',
            password: 'demo'
        }]
    });

    // Start the engine
    app.use(webAnalyst.track());

    // Set route
    app.all('/stats', webAnalyst.check(), webAnalyst.render());
    

## Screenshot

![screenshot1](https://perspectivedev.com/portfolio/img/screenshot3.jpg)    

![screenshot2](https://perspectivedev.com/portfolio/img/screenshot4.jpg)    

## License

[MIT License]

Copyright (c) 2015 Patrice THIMOTHEE <thimpat@gmail.com>


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



