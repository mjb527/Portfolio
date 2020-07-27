import React from 'react';

import './project.css';

function Project(props) {

  const { title, repo, deployment, img_url, description, technologies } = props;

  return(

    <div className="row project-row my-4">

      { /* img from url */}
      <div className="col-md-4 col-sm-12 py-2">
        <div className="d-flex justify-content-center align-items-center my-auto">
          <img src={img_url} alt={title + " example"} className="align-self-center rounded"/>
        </div>
      </div>

      <div className="col-md-8 col-sm-12">

        <div>

          {/* title */}
          <h4>{ title }</h4>

          { /* repository */}
          <div>Repository: <a href={repo}>{ repo }</a> </div>

          { /* if deployment url */ }
          <p>Deployment: { (deployment) ? <a href={deployment}>{deployment}</a> : "Not Deployable" } </p>

          { /* description */ }
          <p> { description } </p>

          <p>Technologies include { formatTechs(technologies) }.</p>


        </div>

      </div>

    </div>

  );
}

function formatTechs(technologies) {
    let str = technologies[0]
    for(let i = 1; i < technologies.length - 1; i++)
      str = str + ", " + technologies[i];
    str = str + ", and " + technologies[technologies.length - 1];
    return str;

}

export default Project;
