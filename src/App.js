import logo from "./logo.svg";
import "./App.css";

function coreConcepts() {
  /* Define what will be shown in index.html */
  return (
    /* return only one element so all must in a element like div/section/nav etc. */
    <div>
      <header className="App-header">
        <p>See You Tomorrow</p>
        <Person name="Md. Neamul Hoqe" jobs="HTML5, CSS3, Bootstrap4 & Bootstrap5, JS, JQuery, React, PHP7"></Person>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

/* Define a similar in pattern object */
function Person(whats) {
  console.log(whats);
  const div = {
    textAlign: "center",
    width: "800px",
    border: "1px solid yellow",
    padding: "10px 20px",
  };
  const h1 = {
    border: "10px groove yellow",
    padding: "0px 10px",
    margin: "0",
  };
  const h3 = {
    border: "1px dashed red",
    margin: "1px auto",
    // textAlign: "center",
  };
const table = {
  // backgroundImage: url("./logo.svg")
}
  /* back data to Person tag where invoked */
  return (
    <section>
      <table border={"3"}>
        <thead>
          <tr>
            <th>I am {whats.name}</th>
            <th>We need to learn more and more and more to reach the goal.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{textAlign: "center"}} colSpan={2}>Al Hamdulill-ah. I have enouph knowledge in {whats.jobs}</td>
          </tr>
          <tr>
            {/* need To be import images in top, before  use it in your page */}
            <td style={{textAlign: "center"}} colSpan={2}><img src={logo} alt="This is an image" /></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

/* Call for export to index.html */
export default coreConcepts;
