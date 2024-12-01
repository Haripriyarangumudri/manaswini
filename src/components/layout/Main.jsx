import React from "react";

function Main() {
  return (
    <>
      <main>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut recusandae sint modi sunt, voluptatem excepturi ipsa facere dignissimos! Eum quo voluptatem, reiciendis dolor similique enim dolore nulla maxime saepe?
        Eius vel architecto explicabo possimus consequatur aperiam id ratione nihil voluptate saepe officia odio, ut fugiat error? Eius eum blanditiis, odio obcaecati ratione quaerat optio accusamus quidem cumque pariatur repudiandae!
        Unde cumque consequuntur laborum dolore velit earum doloremque labore incidunt, saepe accusamus eveniet beatae, nobis ullam quis. Odio perferendis iusto maxime consequatur laborum labore nesciunt veniam maiores qui, fugiat deleniti?
        Necessitatibus, eligendi, aspernatur dolorum ipsum ab nemo consectetur quae ratione corrupti quibusdam et maxime doloremque quaerat, nobis recusandae laudantium a reprehenderit? Doloribus, ad debitis rerum eius dicta iusto eligendi nostrum?
        Optio exercitationem vel quidem consectetur quia iure aperiam. Minus consectetur voluptas praesentium modi, eius doloribus quibusdam recusandae. Voluptatum provident aliquid minima nemo nihil ipsa sapiente ad itaque facilis, obcaecati atque.
        Qui soluta, laborum id facilis minima quibusdam rerum quaerat laudantium recusandae laboriosam cum vitae repellendus, pariatur veniam, nihil eum dignissimos. Sequi, eligendi incidunt? Corporis perspiciatis placeat repudiandae, officiis blanditiis aperiam?
        Sequi tenetur temporibus harum provident ullam ea a voluptate voluptas sint cum, deserunt illum veritatis, ducimus adipisci modi blanditiis error officia quidem suscipit dolore reiciendis pariatur? Minus unde voluptatibus nisi!
        In, quia sunt praesentium, aliquid veniam quod similique laboriosam modi ut explicabo quasi voluptate rerum neque consequuntur repudiandae rem dolorem illo velit deleniti officiis sapiente beatae voluptatibus. Ipsam, labore reiciendis.
        Totam facere neque a, sed aliquid quis cum nobis autem fugit quo, accusantium odio praesentium tenetur quisquam atque doloribus, distinctio deleniti quos! Maiores reiciendis deleniti ab enim, ipsum vel. Tempora?
        Officia sed impedit soluta molestias odit deleniti corporis in fuga velit? Quaerat ut sed hic aliquam facilis voluptate ea officiis quod cum odio. Tenetur nesciunt in cum sint deserunt? Corrupti?
        Dolores sit excepturi vel aliquid, nihil ratione laudantium enim voluptatem modi reprehenderit molestias eius vitae odit vero architecto tenetur quas pariatur laborum cumque praesentium? Aut quisquam modi cum libero tenetur.
        Labore aut commodi provident quasi at cumque ducimus natus quo illum quae. Modi aut sint illum aliquid est illo, necessitatibus quam, corporis repellat vitae fugiat suscipit cupiditate? Dolor, odit recusandae.
        Necessitatibus iure nobis magni ad vero tenetur ut dolores sit laudantium iste odit cum animi officiis sunt nihil quos enim maiores, magnam molestias aut porro nostrum. Nesciunt sequi eveniet magnam?
        Deleniti voluptatibus dolore, nostrum, amet quos earum ex ut rerum, non repellat necessitatibus eaque incidunt consequatur voluptates inventore quis dolor ipsam et dignissimos consectetur velit! Veritatis excepturi aut rem error?
        Esse alias aliquid doloremque nemo laborum, sunt mollitia hic magni asperiores vitae iure impedit ab eaque sed consequuntur, fugit, expedita provident sapiente dolore repellat ducimus voluptatibus exercitationem illo! Vitae, at.
        Hic facere magnam vero suscipit distinctio, impedit amet tempore. Molestiae placeat beatae ipsam nisi magnam asperiores debitis fuga! Incidunt maxime quidem quibusdam sed dolorum repudiandae laborum inventore nesciunt vero ullam!
        Perspiciatis itaque, nostrum fugiat obcaecati unde, ipsa adipisci earum dignissimos, delectus quo repellat fuga a voluptates reiciendis soluta porro eligendi dolorum. Consequuntur quasi totam autem soluta eius accusantium quae. Autem?
        Soluta dolor tempora quidem a aliquam est dicta minima cupiditate voluptates voluptate beatae iusto iste totam aut fugit provident, delectus odit doloremque velit consectetur ducimus mollitia officia labore temporibus. Tempora?
        Temporibus architecto, et dicta itaque obcaecati reprehenderit perspiciatis magni maiores dolor ea necessitatibus modi adipisci iste quas soluta, quo rerum doloribus? Accusamus iure voluptates earum a quo facilis tempora quas?
        Quis assumenda nam omnis, molestiae ea sit quia facere qui rem laudantium aut non voluptatem possimus natus explicabo, nihil eligendi fugit debitis minima nemo rerum iusto. Architecto nulla dicta consectetur!</P>
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