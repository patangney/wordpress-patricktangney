const settings = {
  "name": "wordpress-patricktangney",
  "state": {
    "frontity": {
      "url": "https://blog.patangney.com/",
      "title": "Test Blog",
      "description": "Test Blog"
    }
  },
  "packages": [
    {
      "name": "CreativeIpsum"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://blog.patangney.com/",
          
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
