import "./App.css";
import { useEffect, useState } from "react";

const SPACE_ID = "j6zm7o6y974w";
const ACCESS_TOKEN = "63jHrxO7iujkfejFc86ScaF8Pi94jgFkv_A_eqmxLLw";

const query = `{
  blogPostCollection(limit: 3) {
    items {
      title
      richText {
        json
        links {
          entries {
            inline {
              sys {
                id
              }
          
              
              ... on BlogPost {
                title
              }
            }
            block {
              sys{
                id
              }
              ...on BlogPost {
                title
              }
            }
          }
          
        }
      }
    }
    
  }
}`;

async function fetchBlogPosts() {
  // debugger;
  // const body1 = JSON.stringify({ query });

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ query }),
    },
  );
  const body = await response.json();
  return body.data.blogPostCollection.items[0];
}

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchBlogPosts().then((data) => {
      setPost(data);
    });
  }, [setPost]);

  return (
    <div className="App">
      <header className="App-header">Practice {post && post.title}</header>
    </div>
  );
}

export default App;
