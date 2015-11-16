function Article() {
  this.tags = ['js', 'css'];
}
var article = new Article();

// Pattern 1
function BlogPost() {}
BlogPost.prototype = article;
var blog = new BlogPost();

// Pattern 2
function StaticPage() {
  Article.call(this);
}
var staticPage = new StaticPage();

// Usage
article.hasOwnProperty('tags'); // true
blog.hasOwnProperty('tags'); // false
staticPage.hasOwnProperty('tags'); // true