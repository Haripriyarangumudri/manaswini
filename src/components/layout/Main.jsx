import React from "react";

function Main() {
  return (
    <>
      <main>
       
            <section class="registration-form">
            <h2>Find Your Seat</h2>
            <form action="search-form">
            <label for="regNumber">Registration Number:</label>
                <input type="text" placeholder="Registration Number" required></input>
                <button type="submit">Submit</button>
            </form>
        </section>
        </main>
    </>
  );
}

export default Main;