import React, { Fragment } from 'react';
import Media from 'react-media';

function BannerAside() {

  return (
    <Media queries={{
      small: "(max-width: 599px)",
      medium: "(min-width: 600px) and (max-width: 799px)",
      large: "(min-width: 800px)"
    }} >

      {matches => (
        <Fragment>
          {matches.small &&
            <aside className="aside-sm">
              <img src="static/imgs/me.jpg" alt="Me" />
            </aside>
            }
          {matches.medium &&
            <aside className="aside-md">
              <img src="static/imgs/me.jpg" alt="Me" />
            </aside>
            }
          {matches.large &&
            <aside className="aside-lg">
              <img src="static/imgs/me.jpg" alt="Me" />
            </aside>
            }
        </Fragment>
      )}
    </Media>

  );

}

export default BannerAside;
