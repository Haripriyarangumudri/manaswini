import React from "react";

function Main() {
  return (
    <>
      <main>
        <section id="student-search" class="section">
            <h2>Find Your Seat</h2>
            <form id="search-form">
                <label for="regNumber">Registration Number:</label>
                <input type="text" id="regNumber" placeholder="Enter registration number"></input>
                <button type="submit">Search</button>
            </form>
            <div class="seat-details">
                <p><strong>Section:</strong> A</p>
                <p><strong>Seat Number:</strong> 110</p>
            </div><br /><br />
            <div class="visual-map">
                <p id="visualMap"><b>Visual Map Placeholder</b> </p>
                <img src="./src/img.png" alt="" id="stageImg"/>
            </div>
        </section>
        
        <section id="admin-dashboard" class="section">
            <h2>Admin Dashboard</h2>
            <div class="upload-section">
                <h3>Upload Seating Data</h3>
                <input type="file" id="file-upload"></input>
                <button>Upload</button>
                <p class="status-message">Status: Upload successful</p>
            </div>
            <div class="seating-table">
                <h3>Manage Seats</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Reg. No.</th>
                            <th>Section</th>
                            <th>Seat No.</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>REG001</td>
                            <td>A</td>
                            <td>110</td>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        </main>
    </>
  );
}

export default Main;