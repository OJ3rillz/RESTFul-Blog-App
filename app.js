var bodyParser = require("body-parser"),
mongoose = require("mongoose"),
express = require("express"),
app = express();


//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
      title: String,
      image: String,
      body: String,
      created: {type: Date, default: Date.now}
}); 

var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES
app.get("/blogs", function(req, res){
      res.render("index");
})


app.listen(3000, function(){
      console.log("Server has started!");
  });