// Include React
var React = require("react");

// This is the Saved component. It will be used to show saved articles.
var Saved = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center" style={{fontSize: 25 + 'px', fontWeight: 'bold', color: 'blue'}}>Saved Articles</h2>
        </div>
        <div className="panel-body">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.savedArticles.map(function(article, i) {
            return (
              <div key={i} className="row">
                <div className="col-md-10">
                  <h2><a href={article.web_url}>{article.main_headline}</a></h2>
                  <p>{article.snippet}</p>
                  <p>Published: {article.pub_date}</p>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-danger" style={{marginLeft: 25 + '%', marginTop: 25 + '%'}}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
                 
                  