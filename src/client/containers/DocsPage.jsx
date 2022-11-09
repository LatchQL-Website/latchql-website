import { useEffect } from 'react';
import Prism from 'prismjs';

const DocsPage = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div id="docs">

      {/* -------------------Docs SideBar------------------- */}

      <aside id="docs-sidebar">
        <img id="latchql-logo" src="public/logo.png" alt=""></img>
        <ul id="docs-sidebar-container">
          <a href="#latchql">
            <li className="h1">LatchQL</li>
          </a>
          <a href="#installing-the-npm-module">
            <li className="h1">Installing the NPM Module</li>
          </a>
          <a href="#using-latchql">
            <li className="h1">Using LatchQL</li>
          </a>
          <a href="#setting-limits">
            <li className="h1">Setting Limits</li>
          </a>
          <a href="#rate-limits">
            <li className="h2">Rate Limits</li>
          </a>
          <a href="#depth-limits">
            <li className="h2">Depth Limits</li>
          </a>
          <a href="#cost-limits">
            <li className="h2">Cost Limits</li>
          </a>
          <a href="#auth-limits">
            <li className="h2">Auth Limits</li>
          </a>
          <a href="#how-to-launch-the-GUI">
            <li className="h1">How to Launch the GUI</li>
          </a>
          <a href="#gui-features">
            <li className="h1">GUI features</li>
          </a>
          <a href="#changing-auth-level">
            <li className="h2">Changing Auth Level</li>
          </a>
          <a href="#running-queries">
            <li className="h2">Running Queries</li>
          </a>
          <a href="#error-handling">
            <li className="h2">Error Handling</li>
          </a>
          <a href="#extra-feature">
            <li className="h2">Extra Feature or nah?</li>
          </a>
          <a href="#how-to-run-tests">
            <li className="h1">How to Run Tests</li>
          </a>
          <a href="#all-the-features">
            <li className="h1">Features</li>
          </a>
          <a href="#stretch-goals">
            <li className="h1">In Progress Features</li>
          </a>
          <a href="#tech-stack">
            <li className="h1">Technologies</li>
          </a>

        </ul>
      </aside>

      {/* -------------------Docs Main------------------- */}

      <main id="docs-main">
        <p align="center">
          <img src="public/banner.jpg" alt="latch" />
        </p>

        <h1 id="latchql">LatchQL</h1>
        <ul className="docs-heading-ul">
          <li>
            Short description of LatchQL
          </li>
        </ul>
        
      {/* -------------------Installing the NPM Module------------------- */}

        <h1 id="installing-the-npm-module">Installing the NPM Module</h1>
        <p>Steps:</p>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>

      {/* -------------------Using LatchQL------------------- */}
  
        <h1 id="using-latchql">Using LatchQL</h1>
        <ol className="latchql-ol">
        <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>

      {/* -------------------Setting Limits------------------- */}
  
        <h1 id="setting-limits">Setting Limits</h1>
        <h2 id= "rate-limits">
          Rate Limiting
        </h2>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>
        <h2 id="depth-limits">
          Depth Limiting
        </h2>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>
        <h2 id="cost-limits">
          Cost Limiting
        </h2>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>
        <h2 id="auth-limits">
          Auth Limiting
        </h2>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>

      {/* -------------------How to Launch the GUI------------------- */}
  
        <h1 id="how-to-launch-the-GUI">How to Launch the GUI</h1>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>
        
      {/* -------------------GUI Features------------------- */}
  
        <h1 id="gui-features">
          GUI features
        </h1>
        <h2 id="changing-auth-level">
          Changing auth level
        </h2>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>
        <h2 id="running-queries">
          Running Queries
        </h2>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>
        <h2 id="error-handling">
          Error Handling
        </h2>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>
        <h2 id="extra-feature">
          Extra Feature or nah?
        </h2>
        <ol className="latchql-ol">
          <li>
           first
          </li>
          <li>
           second
          </li>
          <li>
           third
          </li>
        </ol>

      {/* -------------------How to Run Tests------------------- */}
  
        <h1 id="how-to-run-tests">How to Run Tests</h1>
        <h3 id="testing-with-jest">
          Testing with Jest
        </h3>
        <p>
          WE SHALL SHOW HOW TO TEST HERE
        </p>

      {/* -------------------Features------------------- */}
  
        <h1 id="all-the-features">Features</h1>
        <ul className="features-ul">
        <li>Short description of queries</li>
          <li>Short description of GUI</li>
          <li>
            Short description of rate limiter
          </li>
          <li>Short description of depth limiter</li>
          <li>Short description of fragments</li>
          <li>
          Short description of auth limiter
          </li>
          <li>Short description of redis</li>
          <li>
          Short description of cpu usage
          </li>
          <li>
          Short description of response time
          </li>
        </ul>

      {/* -------------------Stretch Goals------------------- */}
  
        <h2 id="stretch-goals">In Progress</h2>
        <ol className="stretch-goals-ol">
          <li>
           stretch goal
          </li>
          <li>stretch goal</li>
          <li>
          stretch goal
          </li>
        </ol>

      {/* -------------------Tech Stack------------------- */}
  
        <h1 id="tech-stack">Tech Stack</h1>
        <ul className="built-with-ul">
        <li>
            <a href="https://graphql.org/">GraphQL</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </li>
          <li>
            <a href="https://reactjs.org/">React</a>
          </li>
          <li>
            <a href="https://reactrouter.com/">React Router</a>
          </li>
          <li>
            <a href="https://jestjs.io/">Jest</a>
          </li>
          <li>
            <a href="https://nodejs.org/">Node</a>
          </li>
          <li>
            <a href="https://jwt.io/">JSON Web Token (JWT)</a>
          </li>
          <li>
            <a href="https://redis.io/">Redis</a>
          </li>
          <li>
            <a href="https://expressjs.com/">Express</a>
          </li>
        </ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </main>
    </div>
  );
};

export default DocsPage;
