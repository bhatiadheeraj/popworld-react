import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable,MDBCard } from "mdbreact";

class TablePage extends Component {
  render() {
    const data = {
      columns: [
        {
          label: "Generation",
          field: "id",
          sort: "asc"
        },
        {
          label: "p-value",
          field: "first"
        },
        {
          label: "q-value",
          field: " last"
        }
      ],
      rows: this.props.rows
    };

    return (
      // <div>
      // <MDBTable scrollY>
      //   <MDBTableHead columns={data.columns} />
      //   <MDBTableBody rows={data.rows} />
      // </MDBTable>
      // </div>
      <MDBDataTable
      scrollX
      striped
      maxHeight="20vh"
      paging={false }
      responsiveSm
      searching ={false}
      sorting={false}
      bordered
      data={data}
    />


    );
  }
}

export default TablePage;
