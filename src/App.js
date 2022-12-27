import logo from "./logo.svg";
import "./App.css";

function coreConcepts() {
  /* Define what will be shown in index.html */
  return (
    /* return only one element so all must in a element like div/section/nav etc. */
    <div>
      <header className="App-header">
        <p>See You Tomorrow</p>
        <Person name="Md. Neamul Hoqe"></Person>
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

  /* back data to Person tag where invoked */
  return (
    <section>
      <div style={div}>
        <h1 style={h1}>{whats.name}</h1>
        <h3 style={h3}>This is subtitle of this page</h3>
      </div>
    </section>
  );
}

/* Call for export to index.html */
export default coreConcepts;
