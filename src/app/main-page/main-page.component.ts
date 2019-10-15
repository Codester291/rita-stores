import {Component} from '@angular/core';

@Component({
    selector: 'app-main-page',
    template: `
      <div class="container logo">
          RITA CORNER <br>
          <div class="nav-links">
              <a href="#">Blogs</a>&nbsp;&nbsp;
              <a href="#">About</a>&nbsp;&nbsp;
              <a href="#">Portfolio</a>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1482501157762-56897a411e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" height="588.92" width="883" class="img-fluid ims">
          </div>
          <br><br><br>
          <h1>CURRENTLY IN STOCK</h1>
          <br><br>
          <div class="row">
              <div>
                  <img src="https://images.unsplash.com/photo-1528475478853-5b89bed65c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80" class="ass img-fluid">
                  <span>$20.99</span>
              </div>
              <div>
                  <img src="https://images.unsplash.com/photo-1528475478853-5b89bed65c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80" class="ass img-fluid">
                  <span>$20.99</span>
              </div>
          </div>
      </div>
    `,
    styles: [
      `
        .logo { font-size: 50px; text-align: center; margin-top: 12rem; letter-spacing: 0.13em }
        .nav-links { text-align: center; font-size: 17px; }
        .ims { margin-top: 12rem; }
        .row { display: flex; flex-direction: row; justify-content: space-evenly; }
        .ass { margin-left: 1em }
        span:hover { font-weight: bolder; color:  mediumspringgreen; cursor: pointer }
      `
    ]
  }
)

export class MainPageComponent {}
