const settings = {
  "name": "wordpress-patricktangney",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
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
